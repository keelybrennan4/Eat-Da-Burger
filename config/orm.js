// import MySQL connection
var connection = require("../config/connection.js");

// methods to execute MySQL queries 
var orm = {
    all: function(table, cb) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, [table], function(err, result) {
        if (err) throw err;
//
        cb(result);
//}
      });
    },

    create: function(table, col1, col2, val1, val2) {
      connection.query("SELECT * FROM "+table+";", function (err) {
        if (err) throw err;
      });
    },  

    update: function(table, condition, cb) {
      connection.query("UPDATE " +table+" SET devoured=true WHERE id= "+condition+";", function(err, result){
        if(err)throw err;
        cb(result);
    })
  }
};

// export the orm object for the model burger.js
module.exports = orm;