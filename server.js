
var express = require('express')
var server = express()
// var db = require('./database/index')

server.use(express.static(__dirname + '/public'));


server.post('/account', (req, res) => {
    //req.body send the account info to the database
    // db.creatAccount(req.body)

})

server.listen(3001)
console.log("Server Listening on 3000!")

