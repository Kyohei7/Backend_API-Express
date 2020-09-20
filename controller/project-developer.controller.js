const model = require('../models')


function createProjectDeveloper(req, res) {
    model.ProjectDev.create({
        developer: req.body.developer,
        message: req.body.message,
        price: req.body.price,
        status: req.body.status
    })
    .then( function(result) {
        res.send({
            success: true,
            message: 'Sucess Create Data Project Developer',
            data: result
        })
        res.status(201).res.json(result)
    })
    .catch( function(error) {
        res.send({
            success: false,
            message: 'Failed to Create Data Project Developer'
        })
        res.json({error: error})
    })
}

function readProjectDeveloper(req, res) {
    model.ProjectDev.findAll()
    .then( function(result) {
        res.send({
            success: true,
            message: 'Sucess Get Data Project Developer',
            data: result
        })
        res.status(201).res.json(result)
    })
    .catch( function(error) {
        res.send({
            success: false,
            message: 'Failed to Get Data Project Developer'
        })
        res.json({error: error})
    })
}

function updateProjectDeveloper(req, res) {
    model.ProjectDev.update({
        developer: req.body.developer,
        message: req.body.message,
        price: req.body.price,
        status: req.body.status
    }, {
        where: {
            id: req.params.id
        }
    })
    .then( function(result) {
        res.send({
            success: true,
            message: 'Success Update Data Project Developer',
            data: result
        })
        res.status(201).res.json(result)
    })
    .catch( function(error) {
        res.send({
            success: false,
            message: 'Failed to Update Data Project Developer'
        })
        res.json({error: error})
    })
}

function deleteProjectDeveloper(req, res) {
    model.ProjectDev.destroy({
        where: {
            id: req.params.id
        }
    })
    .then( function(result) {
        res.send({
            success: true,
            message: 'Success Delete Data Project Developer',
            data: result
        })
        res.status(201).res.json(result)
    })
    .catch( function(error) {
        res.send({
            success: false,
            message: 'Failed to Delete Data Project Developer'
        })
        res.json({error: error})
    })
}

module.exports = {
    createProjectDeveloper,
    readProjectDeveloper,
    updateProjectDeveloper,
    deleteProjectDeveloper
}