const jsonwebtoken = require('jsonwebtoken');
var models = require('../db/db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
var $sql = require('../db/sqlMap');
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
var smtpTransport = require('nodemailer-smtp-transport');

const JWT_SECRET =
    "goK!pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu";

var conn = mysql.createConnection(models.mysql);

conn.connect();

var jsonWrite = function (res, ret) {
    if (typeof ret === 'undefined') {
        res.send('err');
    } else {
        console.log(ret);
        res.send(ret);
    }
}

var dateStr = function (str) {
    return new Date(str.slice(0, 7));
}

router.post('/generateCode', async (req, res) => {
    var body = req.body;

    if (!req.headers.authorization) {
        return res.status(401).json({ error: "Not Authorized" });
    }

    // Bearer <token>>
    const authHeader = req.headers.authorization;

    const token = authHeader.split(" ")[1];
    console.log(token)

    try {
        // Verify the token is valid
        const { user } = jsonwebtoken.verify(token, JWT_SECRET);
        // TODO: 进行二维码生成操作
        return res.status(200).json({
            message: `Congrats ${user}! You can now accesss the super secret resource`,
        });
    } catch (error) {
        console.log(JSON.str(error))
        return res.status(401).json({ error: "Not Authorized" });
    }

    // try {
    //   var result = await fetch('https://qrtiger.com/api/qr/static', {
    //     method: 'POST',
    //     body,

    //         headers: {Authorization: 'Bearer 8d421250-ddb5-11ed-b589-7b17f4c12f74'}


    //     })
    //     var json = await result.json();  
    //     jsonWrite(res, json);
    // } catch(e) {
    //     console.log(JSON.stringify(e))
    //     res.send('-1')
    // } 

})

// 增加用户接口
router.post('/register', (req, res) => {
    var sql = $sql.user.add;
    var sql_one = $sql.user.select_name;
    var params = req.body;
    console.log(params);
    // 先找出是否已存在用户
    // if (params.username) {
    //     sql_one += " where username ='"+ params.username +"'";
    // }
    if (params.email) {
        sql_one += " where email ='" + params.email + "'";
    }
    conn.query(sql_one, params.email, function (err, result) {
        if (!err && result.length) {
            // 有重复email，不允许注册
            return jsonWrite(res, { msg: '该email已被注册，请重新输入', code: 400 });
        }
        conn.query(sql, [params.username, params.password, params.email, params.telephone], function (err, result) {
            console.log(222, err, result)
            if (err) {
                jsonWrite(res, { msg: err, code: 400 });
            }
            if (result) {
                jsonWrite(res, { msg: '注册成功', code: 200 });
            }
        })
    })


});

//登录
router.post('/login', (req, res) => {
    var sql_name = $sql.user.select_name;
    // var sql_password = $sql.user.select_password;
    var params = req.body;
    if (params.email && params.password) {
        // sql_name += " where email ='" + params.email + "' and password = '" + "'";
        sql_name += ` where email = ? and password = ?`
    }
    conn.query(sql_name, [params.email, params.password], function (err, result) {
        if (err) {
            console.log(err);
            return res.send({ msg: '系统出错了' + JSON.stringify(err), code: 400 })
        }
        // console.log(result);
        if (result[0] === undefined) {
            res.send({ msg: '邮箱或密码错误，请重试', code: 400 })   //查询不出username，data 返回-1
        } else {
            var resultArray = result[0];
            var obj = {
                token: jsonwebtoken.sign({ user: 'sql_name' }, JWT_SECRET),
                info: resultArray
            }
            res.send({ ...obj, code: 200 })
        }
    })    
});
// 第三方登录
router.post('/thirdLogin', (req, res) => {
    var params = req.body; 

    var obj = {
        token: jsonwebtoken.sign({ user: 'sql_name' }, JWT_SECRET),
        info: {
            email: params.email,
            username: params.username,
            thirdLogin: true
        }
    }
    res.send({ ...obj, code: 200 })
});

// 主界面进行刷新时，调用接口验证token
router.post('/checkToken', (req, res) => {

    res.send({ msg: '验证成功', code: 200 })
});

//获取用户信息
router.get('/getUser', (req, res) => {
    var sql_name = $sql.user.select_name;
    // var sql_password = $sql.user.select_password;
    var params = req.body;
    console.log(params);
    if (params.name) {
        sql_name += "where username ='" + params.name + "'";
    }
    conn.query(sql_name, params.name, function (err, result) {
        if (err) {
            console.log(err);
        }
        // console.log(result);
        if (result[0] === undefined) {
            res.send('-1')   //查询不出username，data 返回-1
        } else {
            jsonWrite(res, result);
        }
    })
});

//更新用户信息
router.post('/updateUser', (req, res) => {
    var sql_update = $sql.user.update_user;
    var params = req.body;
    console.log(params);
    if (params.id) {
        sql_update += " email = '" + params.email +
            "',telephone = '" + params.telephone +
            "' where id ='" + params.id + "'";
    }
    conn.query(sql_update, params.id, function (err, result) {
        if (err) {
            console.log(err);
        }
        console.log(result);
        if (result.affectedRows === undefined) {
            res.send('更新失败，请联系管理员')   //查询不出username，data 返回-1
        } else {
            res.send('ok');
        }
    })
});

//更改密码
router.post('/changePassword', (req, res) => {
    var sql_modify = $sql.user.update_user;
    var params = req.body;
    console.log(params);
    if (params.id) {
        sql_modify += " password = '" + params.password +
            // "',repeatPass = '" + params.checkPass +
            "' where id ='" + params.id + "'";
    }
    conn.query(sql_modify, params.id, function (err, result) {
        if (err) {
            console.log(err);
            res.send({ msg: '修改密码失败，' + JSON.stringify(err), code: 400 })
        }
        // console.log(result);
        if (result.affectedRows === undefined) {
            res.send({ msg: '修改密码失败，请联系管理员', code: 400 })   //查询不出username，data 返回-1
        } else {
            res.send({ msg: '修改成功', code: 200 });
        }
    })
});

const transporter = nodemailer.createTransport({
    host: 'smtp.163.com',
    port: 465,
    auth: {
        user: '18898323178@163.com',
        pass: 'HRDDYTHKHOYEBMSR',
    },
});


// var transporter = nodemailer.createTransport(smtpTransport({
//     service: 'gmail',
//     auth: {
//         // user: 'arnoldzhouyj@gmail.com',
//         // pass: 'ztzvmyhufuqgnrev',
//         user: '18898323178@163.com',
//         pass: 'dzE*2qgS9RVt+Lm'
//     }
// }));

// verify connection configuration
transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take our messages");
    }
});

// 重置密码
router.post('/resetPassword', (req, res) => {
    var sql_sel = $sql.user.select_name;
    var params = req.body;
    console.log(params);
    if (params.email) {
        sql_sel += " where email ='" + params.email + "'";
    }
    conn.query(sql_sel, params.email, function (err, result) {
        if (err || result.length == 0) {
            console.log(err);
            res.send({ msg: '输入邮箱不存在', code: 400 })
        } else {
            // 发送邮件
            const mail = {
                sender: `18898323178@163.com`,
                to: params.email, // receiver email,
                subject: 'reset password',
                text: `the new password had reset to 123456`,
            };
            transporter.sendMail(mail, (err, data) => {
                if (err) {
                    console.log(err);
                    // res.status(500).send("Something went wrong.");
                    jsonWrite(res, { msg: '邮件发送失败', code: 400 });
                } else {
                    // res.status(200).send("Email successfully sent to recipient!");
                    // 修改密码
                    var sql_modify = $sql.user.update_user;
                    var params = req.body;
                    if (params.email) {
                        sql_modify += " password = '123456'" +
                            " where email ='" + params.email + "'";
                    }
                    conn.query(sql_modify, params.email, function (err, result) {
                        if (err) {
                            console.log(err);
                            return jsonWrite(res, { msg: '邮件发送失败', code: 400 });
                        }
                        // console.log(result);
                        if (result.affectedRows === undefined) {
                            jsonWrite(res, { msg: '邮件发送失败', code: 400 });//查询不出username，data 返回-1
                        } else {
                            jsonWrite(res, { msg: '邮件发送成功', code: 200 });
                        }
                    })
                }
            });
        }
    })
});


module.exports = router;
