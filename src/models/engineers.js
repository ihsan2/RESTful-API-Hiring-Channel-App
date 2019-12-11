const db = require('../configs/db')

module.exports = {
    getEngineers: () => {
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
    searchEngineers: (name, skill) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM engineer WHERE name like '%${name}%' and skill like '%${skill}%'`, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    sortEngineersByName: (order) => {
        return new Promise((resolve, reject) => {
            const sql = '';
            if (order == 'asc') {
                sql = 'SELECT * FROM engineer order by name ASC'
            } else if (order == 'desc') {
                sql = 'SELECT * FROM engineer order by name DESC'
            }
            db.query(sql, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    sortEngineersBySkill: (order) => {
        return new Promise((resolve, reject) => {
            const sql = '';
            if (order == 'asc') {
                sql = 'SELECT * FROM engineer order by skill ASC'
            } else if (order == 'desc') {
                sql = 'SELECT * FROM engineer order by skill DESC'
            }
            db.query(sql, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    sortEngineersByDateUpdated: (order) => {
        return new Promise((resolve, reject) => {
            const sql = '';
            if (order == 'asc') {
                sql = 'SELECT * FROM engineer order by date_updated ASC'
            } else if (order == 'desc') {
                sql = 'SELECT * FROM engineer order by date_updated DESC'
            }
            db.query(sql, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    pageEngineers: (startIndex, endIndex) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM engineer LIMIT ?, ?', [startIndex, endIndex], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}