// import dependencies
const uuidv4 = require('uuid/v4')
const db = require('../configs/db')
// import model
const engineersModel = require('../models/engineers')

const maxSize = 1024 * 1024 * 1 //set maximun size of file image to 1 MB

module.exports = {
    getEngineers: (req, res) => {
        engineersModel.getEngineers()
            .then(result => {
                res.status(200).json({
                    status: 200,
                    error: false,
                    data: result,
                })
            })
            .catch(err => {
                res.status(400).json({
                    status: 400,
                    error: true,
                    message: 'Error get engineers',
                })
            })
    },
    createEngineer: (req, res) => {
        const id = uuidv4();
        const {email, password, name, description, skill, location, date_of_birth, showcase} = req.body
        const image = req.file.filename
        const date_created = new Date()
        const date_updated = new Date()
        const data = {id, email, password, name, image, description, skill, location, date_of_birth, showcase, date_created, date_updated}
        engineersModel.createEngineer(data)
            .then(result => {
                res.status(200).json({
                    status: 200,
                    error: false,
                    data,
                    message: 'Success create a New Engineer'
                })
            })
            .catch(err => {
                res.status(400).json({
                    status: 400,
                    error: true,
                    message: 'Error create a new engineer'
                })
            })        
    },
    updateEngineer: (req, res) => {
        const id = req.params.id;
        const {email, password, name, description, skill, location, date_of_birth, showcase} = req.body;
        const image = req.file.filename;
        const date_updated=new Date();
        const data = {id, email, password, name, image, description, skill, location, date_of_birth, showcase, date_updated}
        if (req.file.size > maxSize) {
            res.status(400).json({
                status: 400,
                error: true,
                message: 'Error! File Too Large.'
            }) 
        } else {
            engineersModel.updateEngineer(data, id)
            .then(result => {
                res.status(200).json({
                    status: 200,
                    error: false,
                    data,
                    message: 'Success update engineer with id: ' + id
                })
            })
            .catch(err => {
                res.status(400).json({
                    status: 400,
                    error: true,
                    message: 'Error update engineer with id: ' + id
                })
            })
        }        
    },
    deleteEngineer: (req, res) => {
        const id = req.params.id
        engineersModel.deleteEngineer(id)
            .then(result => {
                res.status(201).json({
                    status: 201,
                    error: false,
                    message: 'Success delete engineer with id: ' + id
                })
            })
            .catch(err => {
                res.status(400).json({
                    status: 400,
                    error: true,
                    message: err
                })
            })
    },
    searchEngineers: (req, res) => {
        const {name, skill} = req.body;
        engineersModel.searchEngineers(name, skill)
            .then(result => {
                if (result.length > 0) {
                    resutl = result;
                } else {
                    result = "Data Not Found!"
                }
                res.status(200).json({
                    status: 200,
                    error: false,
                    data: result,
                })
            })
            .catch(err => {
                res.status(400).json({
                    status: 400,
                    error: true,
                    message: err
                })
            })
    },
    sortEngineersByName: (req, res) => {
        const order = req.body.order;
        engineersModel.sortEngineersByName(order)
            .then(result => {
                res.status(200).json({
                    status: 200,
                    error: false,
                    data: result,
                })
            })
            .catch(err => {
                res.status(400).json({
                    status: 400,
                    error: true,
                    message: err
                })
            })
    },
    sortEngineersBySkill: (req, res) => {
        const order = req.body.order;
        engineersModel.sortEngineersBySkill(order)
            .then(result => {
                res.status(200).json({
                    status: 200,
                    error: false,
                    data: result,
                })
            })
            .catch(err => {
                res.status(400).json({
                    status: 400,
                    error: true,
                    message: err
                })
            })
    },
    sortEngineersByDateUpdated: (req, res) => {
        const order = req.body.order;
        engineersModel.sortEngineersByDateUpdated(order)
            .then(result => {
                res.status(200).json({
                    status: 200,
                    error: false,
                    data: result,
                })
            })
            .catch(err => {
                res.status(400).json({
                    status: 400,
                    error: true,
                    message: err
                })
            })
    },
    pageEngineers: (req, res) => {
        const page = parseInt(req.query.page)
        const limit = 5

        const startIndex = (page - 1) * limit
        const endIndex = limit
        let totalRow = 0
        let totalPage = 0

        db.query("SELECT count(*) totalRow FROM engineer", (err, result) => {
            totalRow = result[0].totalRow
            totalPage = totalRow / limit
            if (totalRow % limit > 0) {
                totalPage = parseInt(totalPage) + 1
            }
            
            if (page > totalPage) {
                res.status(400).json({
                    status: 400,
                    error: true,
                    message: `Page Not Found. Total Page is only ${totalPage}`
                })
            } else {
                engineersModel.pageEngineers(startIndex, endIndex)
                .then(result => {
                    res.status(200).json({
                    status: 200,
                    error: false,
                    data_page: {
                        totalRow,
                        totalPage: totalPage,
                        perPage: limit,
                        prevPage: page - 1,
                        currentPage: page,
                        nextPage: page + 1
                    },
                    data: result,
                    })
                })
                .catch(err => {
                    res.status(400).json({
                        status: 400,
                        error: true,
                        message: err
                    })
                })
            }
        })
    }
}
