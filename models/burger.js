// import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

//call the ORM functions using burger specific input for the ORM 
var burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    
    // cols and vals are arrays
    create: function(name, cb) {
      orm.create("burgers", name, cb);
    },

    update: function(id, cb) {
      orm.update("burgers", id, cb);
    },
};

// export the database functions for the controller (burgers_controller.js).
module.exports = burger;