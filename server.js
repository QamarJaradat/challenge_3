
var express = require('express')
var server = express()

server.use(express.static(__dirname + '/public'));


server.post('/account', (req, res) => {

})

server.listen(3001)
console.log("Server Listening on 3000!")

