const db = require('../configs/db')

module.exports = {
    checkEmailExistsEngineer: (email, password) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT id FROM engineer WHERE email = ? and password = ?`, [email, password], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    checkEmailExistsCompany: (email, password) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT id FROM company WHERE email = ? and password = ?`, [email, password], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    loginEngineer: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM engineer', (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    loginCompany: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM company', (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
}