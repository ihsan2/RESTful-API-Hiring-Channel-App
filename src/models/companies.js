const db = require('../configs/db')

module.exports = {
  getCompanies: () => {
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
  getCompanybyId: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM company WHERE id = ?`, id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  createCompany: (data) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO company SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateCompany: (data, id) => {
    return new Promise((resolve, reject) => {
      db.query('UPDATE company SET ? WHERE id = ?', [data, id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteCompany: (id) => {
    return new Promise((resolve, reject) => {
      db.query('DELETE from company WHERE id = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}
