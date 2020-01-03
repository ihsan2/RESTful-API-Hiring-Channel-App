const db = require("../configs/db");

module.exports = {
  getTes: () => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM tes`, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },
  createTes: data => {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO tes SET ?", data, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  }
};
