const model = require('../models')

function createAccount(req, res) {
    model.Account.create({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password
    })
    .then( function(result) {
        res.send({
            success: true,
            message: 'Success Create Data Account',
            data: result
        })
        res.status(201).res.json(result)
    })
    .catch( function(error) {
        res.send({
            success: false,
            message: 'Failed to Create Data Account'
        })
        res.json({error: error})
    })
}
function readAccount(req, res) {
    model.Account.findAll()
    .then( function(result) {
        res.send({
            success: true,
            message: 'Success Get Data Account',
            data: result
        })
        res.status(201).res.json(result)
    })
    .catch( function(error) {
        res.send({
            success: false,
            message: 'Failed to Get Data Account'
        })
        res.json({error: error})
    })
}
function updateAccount(req, res) {
    model.Account.update({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password
    }, {
        where: {
            id: req.params.id
        }
    })
    .then( function(result) {
        res.send({
            success: true,
            message: 'Success Update Data Account',
            data: result
        })
        res.status(201).res.json(result)
    })
    .catch( function(error) {
        res.send({
            success: false,
            message: 'Failed to Update Data Account'
        })
        res.json({error: error})
    })
}
function deleteAccount(req, res) {
    model.Account.destroy({
        where: {
            id: req.params.id
        }
    })
    .then( function(result) {
        res.send({
            success: true,
            message: 'Success Delete Data Account',
            data: result
        })
        res.status(201).res.json(result)
    })
    .catch( function(error) {
        res.send({
            success: false,
            message: 'Failed to Delete Data Account'
        })
        res.json({error: error})
    })
}

module.exports = {
    createAccount,
    readAccount,
    updateAccount,
    deleteAccount
}