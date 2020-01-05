const db = require("../configs/db");

module.exports = {
  addMessageToEngineer: data => {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO message_to_engineer SET ?", data, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },
  addMessageToCompany: data => {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO message_to_company SET ?", data, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },
  getMessage: (id_company, id_engineer) => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM message WHERE id_company = ? and id_engineer = ? ORDER BY date_created DESC",
        [id_company, id_engineer],
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },
  deleteMessage: id_message => {
    return new Promise((resolve, reject) => {
      db.query(
        "DELETE from message WHERE id_message = ?",
        id_message,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  }
};
