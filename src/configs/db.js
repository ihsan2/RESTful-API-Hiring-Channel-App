const mysql = require('mysql')
const dotenv = require('dotenv')
dotenv.config()

var conn = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PAST,
    database : process.env.DB_NAME,
  })
  conn.connect(err => {
    if (err) {
        console.log(`Error \n ${err}`)
    } else {
        console.log('Success Connect To Database')
    }
})

module.exports = conn