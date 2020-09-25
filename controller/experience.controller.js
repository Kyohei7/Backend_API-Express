const model = require('../models')

function createExperience(req, res) {
    model.Experience.create({
        position: req.body.position,
        company: req.body.company,
        duration: req.body.duration,
        description: req.body.description,
        photo: req.file.originalname
    })
    .then( function(result) {
        res.send({
            success: true,
            message: 'Success Create Data Experience',
            data: result
        })
        res.status(201).res.json(result)
    })
    .catch( function(error) {
        res.send({
            success: false,
            message: 'Failed to Create Data Experience'
        })
        res.json({error: error})
    })
}
function readExperience(req, res) {
    model.Experience.findAll()
    .then( function(result) {
        res.send({
            success: true,
            message: 'Success Get Data Experience',
            data: result
        })
        res.status(201).res.json(result)
    })
    .catch( function(error) {
        res.send({
            success: false,
            message: 'Failed to Get Data Experience'
        })
        res.json({error: error})
    })
}
function updateExperience(req, res) {
    model.Experience.update({
        position: req.body.position,
        company: req.body.company,
        duration: req.body.duration,
        description: req.body.description,
        icon: req.body.icon
    }, {
        where: {
            id: req.params.id
        }
    })
    .then( function(result) {
        res.send({
            success: true,
            message: 'Success Update Data Experience',
            data: result
        })
        res.status(201).res.json(result)
    })
    .catch( function(error) {
        res.send({
            success: false,
            message: 'Failed to Update Data Experience'
        })
        res.json({error: error})
    })
}
function deleteExperience(req, res) {
    model.Experience.destroy({
        where: {
            id: req.params.id
        }
    })
    .then( function(result) {
        res.send({
            success: true,
            message: 'Success Delete Data Experience',
            data: result
        })
        res.status(201).res.json(result)
    })
    .catch( function(error) {
        res.send({
            success: false,
            message: 'Failed to Delete Data Experience'
        })
        res.json({error: error})
    })
}

module.exports = {
    createExperience,
    readExperience,
    updateExperience,
    deleteExperience
}