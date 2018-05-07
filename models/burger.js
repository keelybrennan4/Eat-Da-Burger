// import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

//call the ORM functions using burger specific input for the ORM 
var burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    
    create: function(newBurger) {
      orm.create("burgers", "burger_name", "devoured", newBurger, "0");
    },

    update: function(id, cb) {
      orm.update("burgers", "devoured", "1", "id", id);
    },
};

// export the database functions for the controller (burgers_controller.js).
module.exports = burger;