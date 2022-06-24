const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.get('/login', function (req, res) {
    jwt.sign({user: {
        id: 1,
        name: "Niket Kharat",
        email: "niketkharat@gmail.com"
    }}, 'secretkey', (err, token) => {
        res.json({
            token: token,
            status: 500
        })
    })
})

app.get('/getdata', verifyToken, function(req, res) {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.sendStatus(403)
        } else {
            res.json({
                status: true,
                msg: 'authenticated',
                authData
            })
        }
    })
    
})

function verifyToken(req, res, next) {
    const bearerToken = req.headers['authorization'];
    if (typeof bearerToken != undefined) {
        const token = bearerToken.split(' ')[1];
        req.token = token;
        next();
    } else {
        res.json({
            status: 403,
            msg: "Cant Access"
        })
    }
}
  

app.listen(4000, () => {
    console.log("listening");
})
  