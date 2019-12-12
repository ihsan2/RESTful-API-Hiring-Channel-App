const db = require('../configs/db')

module.exports = {
    addMessageToEngineer: (data) => {
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO message_to_engineer SET ?`, data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    addMessageToCompany: (data) => {
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO message_to_company SET ?`, data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getMessage: (company, engineer) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM message WHERE id_company = ? and id_engineer = ? ORDER BY date_created DESC`, [company, engineer], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
}