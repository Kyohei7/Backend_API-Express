const express = require('express')
const app = express()
const router = require('./routes/router')
const cors = require('cors')

app.use(express.urlencoded({extended: true}))
app.use(cors())
app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "X-Requested-With")
    next()
})

app.use('/', router)



app.listen(5000, function() {
    console.log('Server Running on port 5000')
})

module.exports = app