// import MySQL connection
var connection = require("../config/connection.js");

//helper function to pass 3 values into the mySQL query 
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

function objToSql(ob) {
  var arr = [];

// loop through the keys and push the key/value as a string int arr
for (var key in ob) {
  var value = ob[key];
  // check to skip hidden properties
  if (Object.hasOwnProperty.call(ob, key)) {

    // if string with spaces, add quotations
    if (typeof value === "string" && value.indexOf(" ") >= 0) {
      value = "'" + value + "'";
    }
    arr.push(key + "=" + value);
  }
}
  // translate array of strings to a single comma-separated string
  return arr.toString();
}

// methods to execute the necessary MySQL commands in the controllers to retrieve and store data in db
var orm = {
    all: function(table, cb) {
      connection.query("SELECT * FROM " + table + ";", function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },

    create: function(table, cols, vals, cb) {
      connection.query("INSERT INTO " + table + ";" + vals, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },  

    update: function(table, condition, cb) {
      connection.query("UPDATE " + table + "SET devoured = true WHERE id =" + condition + ";", [req.body.devoured, req.params.id], function(err, result) {
      if(err)throw err;
      cb(result);
    });
  }
};




// export the orm object for the model burger.js
module.exports = orm;