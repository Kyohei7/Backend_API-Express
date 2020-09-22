const model = require('../models')
const bcrypt = require('bcryptjs')

function createUser(req, res) {
    let salt = bcrypt.genSaltSync(10)
    let hash = bcrypt.hashSync(req.body.password, salt)
    model.User.create({
        username: req.body.username,
        email: req.body.email,
        password: hash,
        role: req.body.role,
    })
    .then( function(result) {
        res.send({
            success: true,
            message: 'Success Create Data User',
            data: result
        })
        res.status(201).res.json(result)
    })
    .catch( function(error) {
        res.send({
            success: false,
            message: 'Failed to Create Data User'
        })
        res.json({error: error})
    })
}
function readUser(req, res) {
    model.User.findAll()
    .then( function(result) {
        res.send({
            success: true,
            message: 'Success Get Data User',
            data: result
        })
        res.status(201).res.json(result)
    })
    .catch( function(error) {
        res.send({
            success: false,
            message: 'Failed to Get Data User'
        })
        res.json({error: error})
    })
}
function updateUser(req, res) {

}
function deleteUser(req, res) {

}

module.exports = {
    createUser,
    readUser,
    updateUser,
    deleteUser
}