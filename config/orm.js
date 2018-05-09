// import MySQL connection
var connection = require("../config/connection.js");

// methods to execute MySQL queries 
var orm = {
    all: function(table, cb) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, [table], function(err, result) {
        if (err) throw err;
        if(cb){
          cb(result);
        }
      });
    },

    create: function(table, col1, col2, val1, val2) {
      var queryString = "INSERT INTO ??(??, ??) VALUES (?, ?)";
      connection.query(queryString, [table, col1, col2, val1, val2], function (err, result) {
        if (err) throw err;
      });
    },  

    update: function(table, col1, col2, val1, val2) {
      var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
      connection.query(queryString [table, col1, val1, col2, val2], function (err){
      if(err)throw err;
    });
  }
};

// export the orm object for the model burger.js
module.exports = orm;