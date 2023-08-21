var sqlMap = {
    user: {
        // sql: CREATE TABLE user (id int NOT NULL AUTO_INCREMENT, username varchar(255), password varchar(255) NOT NULL, email varchar(255) NOT NULL, telephone varchar(255),  PRIMARY KEY (id));
        add: 'insert into user (username, password, email, telephone) values (?,?,?,?)',
        select_name: 'select * from user', 
        update_user: 'update user set'
    }
}

module.exports = sqlMap;