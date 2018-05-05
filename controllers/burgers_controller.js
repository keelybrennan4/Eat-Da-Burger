var express = require("express");
var router = express.Router();

// Import the model burger.js to use its database functions.
var burger = require("../models/burger.js");

//// Create all routes and set up logic within those routes

//render index within views folder 
router.get('/', function(req, res){
    burger.all(function(burger_data){
        console.log(burger_data);
        res.render('index');
    })
})

//router.post()
//router.put()
//router.delete()






// export routes for server.js to use.
module.exports = router;