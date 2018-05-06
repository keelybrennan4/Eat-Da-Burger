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
//selectAll()
//insertOne()
//updateOne()

// Object for all SQL statement functions.
var orm = {
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    insertOne: function(table, cols, vals, cb) {
      var queryString = "INSERT INTO " + table;
  
      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += printQuestionMarks(vals.length);
      queryString += ") ";
  
      console.log(queryString);

      connection.query(queryString, vals, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },  

// An example of objColVals would be {burger_name: veggie burger, devoured: true}
  updateOne: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

// export the orm object for the model burger.js
module.exports = orm;