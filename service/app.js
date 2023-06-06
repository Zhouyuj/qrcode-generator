const userApi = require('./api/userApi');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const jsonwebtoken = require('jsonwebtoken');
const JWT_SECRET =
    "goK!pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu";

var cors = require('cors')

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded())

app.use(function(req, res, next) {
    if (['/api/login', '/api/resetPassword', '/api/register'].includes(req.url)) {
        return next();
    }
    console.log(22222)
    if (!req.headers.authorization) {
        return res.status(401).json({ error: "Not Authorized" });
    }

    // Bearer <token>>
    const authHeader = req.headers.authorization;

    const token = authHeader.split(" ")[1];

    try {
        // Verify the token is valid
        const { user } = jsonwebtoken.verify(token, JWT_SECRET);
        next();        
    } catch (error) {
        return res.status(401).json({ error: "Not Authorized" });
    }
})

app.use('/api', userApi);

app.listen(3000);
console.log('success listen at port: 3000')