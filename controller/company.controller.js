const model = require('../models')

function createCompany(req, res) {
    model.Company.create({
        name: req.body.name,
        sector: req.body.sector,
        city: req.body.city,
        description: req.body.description,
        instagram: req.body.instagram,
        linkedin: req.body.linkedin,
        photo: req.file.originalname,
        account: req.body.account
    })
    .then( function(result) {
        res.send({
            success: true,
            message: 'Success Post Data Company',
            data: result
        })
        res.status(201).res.json(result)
    })
    .catch( function(error) {
        res.send({
            success: false,
            message: 'Failed to Post Data Company'
        })
        res.json({error: error})
    })
}

function readCompany(req, res) {
    model.Company.findAll()
    .then( function(result) {
        res.send({
            success: true,
            message: 'Success Get Data Company',
            data: result
        })
        res.status(201).res.json(result)
    })
    .catch( function(error) {
        res.send({
            success: false,
            message: 'Failed to Get Data Company'
        })
        res.json({error: error})
    })
}

function updateCompany(req, res) {
    model.Company.update({
        name: req.body.name,
        sector: req.body.sector,
        city: req.body.city,
        description: req.body.description,
        instagram: req.body.instagram,
        linkedin: req.body.linkedin,
        image: req.body.image,
        account: req.body.account
    }, {
        where: {
            id: req.params.id
        }
    })
    .then( function(result) {
        res.send({
            success: true,
            message: 'Success Update Data Company',
            data: result
        })
        res.status(201).res.json(result)
    })
    .catch( function(error) {
        res.send({
            success: false,
            message: 'Failed to Update Data Company'
        })
        res.json({error: error})
    })
}

function deleteCompany(req, res) {
    model.Company.destroy({
        where: {
            id: req.params.id
        }
    })
    .then( function(result) {
        res.send({
            success: true,
            message: 'Success Delete Data Company',
            data: result
        })
        res.status(201).res.json(result)
    })
    .catch( function(error) {
        res.send({
            success: false,
            message: 'Failed to Delete Data Company'
        })
        res.json({error: error})
    })
}

module.exports = {
    createCompany,
    readCompany,
    updateCompany,
    deleteCompany,
}