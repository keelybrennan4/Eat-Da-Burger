var express = require("express");
var router = express.Router();

// Import the model burger.js to use its database functions.
var burger = require("../models/burger.js");

//// Create all routes and set up logic within those routes

//render index within views folder 
router.get("/", function(req, res){
    burger.selectAll(function(data){
        //console.log(data);
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res){
    burger.insertOne([
        "name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        res.json({ id: result.insertId});
    });
});

router.put("api/burgers/:id", function (req, res){
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    
    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    });
});


//router.delete()

// export routes for server.js to use.
module.exports = router;