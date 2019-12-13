const db = require('../configs/db')

module.exports = {
    getEngineers: (searchBy, searchValue, sort, order, offset, limit) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM engineer WHERE ${searchBy} like '%${searchValue}%' ORDER BY ${sort} ${order} LIMIT ${offset}, ${limit}`, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    createEngineer: (data) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO engineer SET ?', data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    updateEngineer: (data, id) => {
        return new Promise((resolve, reject) => {
            db.query('UPDATE engineer SET ? WHERE id = ?', [data, id], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    deleteEngineer: (id) => {
        return new Promise((resolve, reject) => {
            db.query('DELETE from engineer WHERE id = ?', id, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
}