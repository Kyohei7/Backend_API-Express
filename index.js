const express = require('express')
const app = express()
const router = require('./routes/router')
const cors = require('cors')

app.use(express.urlencoded({extended: true}))

// CORS
app.use(cors())

app.use('/', router)
app.get('/', function (req, res) {
    res.send('hello world')
  })


app.listen(5000, function() {
    console.log('Server Running on port 5000')
})

module.exports = app