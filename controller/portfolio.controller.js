const model = require('../models')

function createPortfolio(req, res) {
    model.Portfolio.create({
        name: req.body.name,
        description: req.body.description,
        link: req.body.link,
        repository: req.body.repository,
        company: req.body.company,
        type: req.body.type,
        photo: req.body.photo
    })
    .then( function(result) {
        res.send({
            success: true,
            message: 'Success Create Data Portfolio',
            data: result
        })
        res.status(201).res.json(result)
    })
    .catch( function(error) {
        res.send({
            success: false,
            message: 'Failed to Create Data Portfolio'
        })
        res.json({error: error})
    })
}
function readPortfolio(req, res) {
    model.Portfolio.findAll()
    .then( function(result) {
        res.send({
            success: true,
            message: 'Success Get Data Portfolio',
            data: result
        })
        res.status(201).res.json(result)
    })
    .catch( function(error) {
        res.send({
            success: false,
            message: 'Failed to Get Data Portfolio'
        })
        res.json({error: error})
    })
}
function updatePortfolio(req, res) {
    model.Portfolio.update({
        name: req.body.name,
        description: req.body.description,
        link: req.body.link,
        repository: req.body.repository,
        company: req.body.company,
        type: req.body.type,
        photo: req.body.photo
    }, {
        where: {
            id: req.params.id
        }
    })
    .then( function(result) {
        res.send({
            success: true,
            message: 'Success Update Data Portfolio',
            data: result
        })
        res.status(201).res.json(result)
    })
    .catch( function(error) {
        res.send({
            success: false,
            message: 'Failed to Update Data Portfolio'
        })
        res.json({error: error})
    })
}
function deletePortfolio(req, res) {
    model.Portfolio.destroy({
        where: {
            id: req.params.id
        }
    })
    .then( function(result) {
        res.send({
            success: true,
            message: 'Success Delete Data Portfolio',
            data: result
        })
        res.status(201).res.json(result)
    })
    .catch( function(error) {
        res.send({
            success: false,
            message: 'Failed to Delete Data Portfolio'
        })
        res.json({error: error})
    })
}


module.exports = {
    createPortfolio,
    readPortfolio,
    updatePortfolio,
    deletePortfolio
}