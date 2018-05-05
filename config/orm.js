// import MySQL connection
var connection = require("../config/connection.js");

// methods to execute the necessary MySQL commands in the controllers to retrieve and store data in db

//selectAll()
//insertOne()
//updateOne()
//



var orm = {
    all: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
}

// export the orm object for the model burger.js
module.exports = orm;