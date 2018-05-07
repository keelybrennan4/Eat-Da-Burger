var express = require("express");
var router = express.Router();

// Import the model burger.js to use its database functions.
var burger = require("../models/burger.js");

//render index within views folder 
router.get("/", function(req, res){
    burger.all(function(burger_data){
        //console.log(burger_data);
        var hbsObj = {
            burgers: data
        };
        for (i=0; i<hbsObj.burgers.length; i++){
            hbsObj.burgers[i].devoured = parseInt(hbsObj.burgers[i].devoured);
        }
        res.render("index", hbsObj);
    });
});

router.post("/", function (req, res){
    burger.create(req.body.newBurger);
    res.redirect("/");
});

router.put("/:id", function(req, res) {
    burger.update(req.params.id);
    res.redirect("/");
});

// export routes for server.js to use.
module.exports = router;