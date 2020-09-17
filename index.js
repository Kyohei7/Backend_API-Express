const express = require('express')
const app = express()
const router = require('./routes/router')

app.use(express.urlencoded({extended: true}))
app.use('/', router)



app.listen(5000, function() {
    console.log('Server Running on port 5000')
})

module.exports = app