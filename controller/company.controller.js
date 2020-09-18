const model = require('../models')

function createCompany(req, res) {
    model.Company.create({
        name: req.body.name,
        sector: req.body.sector,
        city: req.body.city,
        description: req.body.description,
        instagram: req.body.instagram,
        linkedin: req.body.linkedin,
        image: req.body.image,
        account: req.body.account
    })
    .then( function(result) {
        res.send('Success Create Data Company')
        res.json(result)
    })
    .catch( function(error) {
        res.json({error: error})
    })
}

function readCompany(req, res) {
    model.Company.findAll()
    .then( function(result) {
        res.send('Success Get Data Company')
        res.json(result)
    })
    .catch( function(error) {
        res.json({error: error})
    })
}

function updateCompany(req, res) {
    
}

function deleteCompany(req, res) {

}

module.exports = {
    createCompany,
    readCompany,
    updateCompany,
    deleteCompany,
}