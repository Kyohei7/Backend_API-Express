const model = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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
    let decodedId = req.decoded.id

    if(Number(decodedId) === Number(req.params.id)) {
        model.User.update({
            username: req.body.username,
            email: req.body.email,
            role: req.body.role
        }, {
            where: {
                id: req.params.id
            }
        })
        .then( function(result) {
            res.send({
                success: true,
                message: 'Success Update Data User',
                data: result
            })
            res.status(201).res.json(result)
        })
        .catch( function(error) {
            res.send({
                success: false,
                message: 'Failed to Update Data User'
            })
            res.json({error: error})
        })
    } else {
        res.json({
            message: "It's Not Your Data"
        })
    }

}
function deleteUser(req, res) {
    let decodedId = req.decoded.id

    if(Number(decodedId) === Number(req.params.id)) {
        model.User.destroy({
            where: {
                id: req.params.id
            }
        })
        .then( function(result) {
            res.send({
                success: true,
                message: 'Success Delete Data User',
                data: result
            })
            res.status(201).res.json(result)
        })
        .catch( function(error) {
            res.send({
                success: false,
                message: 'Failed to Delete Data User'
            })
            res.json({error: error})
        })
    } else {
        res.json({
            message: "It's Not Your Data"
        })
    }
}

function loginUser(req, res) {
    const email = req.body.email
    const password = req.body.password
    model.User.findOne({
        where: {
            email: email
        }
    })
    .then(function(result) {
        let passwordHash = result.password
        let checkPassword = bcrypt.compareSync(password, passwordHash)

        if(checkPassword) {
            res.json({
                message: 'Success to Login',
                token: jwt.sign({ id: result.id }, 'rizki07')
            })
        } else {
            res.json({
                message: 'Failed to Login'
            })
        }
    })
    .catch( function(error) {
        res.json({ error : error })
    })
}


module.exports = {
    createUser,
    readUser,
    updateUser,
    deleteUser,
    loginUser
}