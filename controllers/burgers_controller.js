var express = require("express");
var router = express.Router();

// Import the model burger.js to use its database functions.
var burger = require("../models/burger.js");

//render index within views folder 
router.get("/", function(req, res){
    burger.all(function(burger_data){
        console.log(burger_data);
        res.render("index", {burger_data});
    });
});

router.post("/burgers/create", function (req, res){
    burger.create(req.body.burger_name, function(result){
        res.redirect("/");
    })
});

// Update the status to devoured
router.put("/burgers/update", function(req, res) {
    burger.update(req.body.id, function(result){
        console.log(result);
        res.redirect("/");
    });
});

// export routes for server.js to use.
module.exports = router;