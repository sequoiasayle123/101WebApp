var express = require("express");

var router = express.Router();

router.get("/", function(req, res){
    console.log("Working on getting something")
    res.render("home")
});

module.exports = router;