const fs = require('fs');
const jsonwebtoken = require('jsonwebtoken');
var models = require('../db/db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
var $sql = require('../db/sqlMap');
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
var smtpTransport = require('nodemailer-smtp-transport');
const COS = require('cos-nodejs-sdk-v5');
const axios = require('axios');
const fetch = require('node-fetch');

const cos = new COS({
    SecretId: 'AKIDkKfMxIVHwKUO7du82kDdpJajgP7ct423',
    SecretKey: 'yhBPDoUwe8NNAj3C6UhiU0XsxqdCW8be'
});

const JWT_SECRET =
    "goK!pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu";

var conn = mysql.createConnection(models.mysql);

conn.connect();

const environment = process.env.ENVIRONMENT || 'sandbox';
const client_id = 'AeCDYb060D3vGqVjupm7JGhDdoLpgiWuLiSde2bl_0P8mvs3f18jynCiDXB8LAfDpqnt7mULPeUIJgCN'; //process.env.CLIENT_ID;
const client_secret = 'EAM0-cAUiXXfvPMTbPxuxgVbFF5Xcs4k3J7c_hmBKgnkbgvl9EbiWe2dVPSZYOYW9U52MczLONGh2Kxw'; //process.env.CLIENT_SECRET;
const endpoint_url = environment === 'sandbox' ? 'https://api-m.sandbox.paypal.com' : 'https://api-m.paypal.com';

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

    var data = req.body;
    // console.log(data)
    // if (!req.headers.authorization) {
    //     return res.status(401).json({ error: "Not Authorized" });
    // }

    // Bearer <token>>
    // const authHeader = req.headers.authorization;

    // const token = authHeader.split(" ")[1];
    // console.log(token)

    // try {
    //     // Verify the token is valid
    //     const { user } = jsonwebtoken.verify(token, JWT_SECRET);
    //     // TODO: 进行二维码生成操作
    //     return res.status(200).json({
    //         message: `Congrats ${user}! You can now accesss the super secret resource`,
    //     });
    // } catch (error) {
    //     console.log(JSON.str(error))
    //     return res.status(401).json({ error: "Not Authorized" });
    // }

    // const jsonData = {"data":"https://www.baidu.com","config":{"body":"round","eye":"frame7","eyeBall":"ball0","erf1":[],"erf2":[],"erf3":[],"brf1":[],"brf2":[],"brf3":[],"bodyColor":"#D61919","bgColor":"#110F0F","eye1Color":"#D61919","eye2Color":"#D61919","eye3Color":"#D61919","eyeBall1Color":"#D61919","eyeBall2Color":"#D61919","eyeBall3Color":"#D61919","gradientColor1":"","gradientColor2":"","gradientType":"linear","gradientOnEyes":"true","logo":"","logoMode":"default"},"size":1000,"download":"imageUrl","file":"svg"};
    try {
        const r = await axios.post('https://api.qrcode-monkey.com//qr/custom', data);
        if (r.data) {
            console.log('success');
            const base64 = await download_to_base64('https:' + r.data.imageUrl);
            console.log(base64)
            // var base64str = base64_encode('https:' + r.data.imageUrl);
            // console.log(base64str)
            return res.status(200).json({
                imageUrl: base64,
            });
        }
    } catch (e) {
        console.log('error::::',e);
        return res.status(400).json({ error: "二维码生成错误!" });
    }
})

async function download_to_base64(url) {
    console.log(url)
    const result = await axios.get(url, { responseType: 'arraybuffer' });
    // console.log(data);
    const data = "data:" + result.headers["content-type"] + ";base64," + Buffer.from(result.data).toString('base64');
    return data;
    //     axios.get(url, function (error, response, body) {
    //     if (!error && response.statusCode == 200) {
    //         data = "data:" + response.headers["content-type"] + ";base64," + Buffer.from(body).toString('base64');
    //         console.log(data);
    //     }
    // });
}

function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}

async function downloadImage(url, filename) {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
  
    fs.writeFile(filename, response.data, (err) => {
      if (err) throw err;
      console.log('Image downloaded successfully!');
    });
  }

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
                token: jsonwebtoken.sign({ user: 'sql_name', level: resultArray.level, expiredTime: resultArray.expired_time }, JWT_SECRET),
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
    const authHeader = req.body.authorization;

    const token = authHeader.split(" ")[1];

    try {
        // Verify the token is valid
        const result = jsonwebtoken.verify(token, JWT_SECRET);
        res.send({ level: result.level, expiredTime: result.expiredTime, code: 200 })       
    } catch (error) {
        return res.status(401).json({ error: "Not Authorized" });
    }
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

router.post('/uploadFile', (req, res) => {
    const filename = req.body.name;
    console.log(req.body)
    
    cos.putObject({
        Bucket: 'test-1301682364', /* 必须 */
        Region: 'ap-beijing',    /* 必须 */
        Key: filename,              /* 必须 */
        StorageClass: 'STANDARD',
        Body: fs.createReadStream(req.body.data), // 上传文件对象
        onProgress: function(progressData) {
            console.log(JSON.stringify(progressData));
        }
    }, function(err, data) {
        console.log(err || data);
    });
    

    // cos.postObject({
    //     Bucket: 'test-1301682364',
    //     Region: 'ap-beijing',
    //     Key: filename,
    //     FilePath: tmpFilePath, // wx.chooseImage 选择文件得到的 tmpFilePath
    //     onProgress: function (info) {
    //         console.log(JSON.stringify(info));
    //     }
    // }, function (err, data) {
    //     console.log(err || data);
    // });
})

router.post('/create_order', (req, res) => {
    const price = req.body.price;
    get_access_token()
        .then(access_token => {
            let order_data_json = {
                'intent': req.body.intent.toUpperCase(),
                'purchase_units': [{
                    'amount': {
                        'currency_code': 'USD',
                        'value': price
                    }
                }]
            };
            const data = JSON.stringify(order_data_json)
            
            fetch(endpoint_url + '/v2/checkout/orders', { //https://developer.paypal.com/docs/api/orders/v2/#orders_create
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${access_token}`
                    },
                    body: data
                })
                .then(res => res.json())
                .then(json => {
                    res.send(json);
                }) //Send minimal data to client
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(err)
        })
});

router.post('/complete_order', (req, res) => {
    get_access_token()
        .then(access_token => {
            fetch(endpoint_url + '/v2/checkout/orders/' + req.body.order_id + '/' + req.body.intent, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${access_token}`
                    }
                })
                .then(res => res.json())
                .then(json => {
                    console.log(json);
                    res.send(json);
                }) //Send minimal data to client
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(err)
        })
});

//PayPal Developer YouTube Video:
//How to Retrieve an API Access Token (Node.js)
//https://www.youtube.com/watch?v=HOkkbGSxmp4
function get_access_token() {
    console.log(client_id)
    const auth = `${client_id}:${client_secret}`
    const data = 'grant_type=client_credentials'
    return fetch(endpoint_url + '/v1/oauth2/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${Buffer.from(auth).toString('base64')}`
            },
            body: data
        })
        .then(res => res.json())
        .then(json => {
            return json.access_token;
        })
}


module.exports = router;
