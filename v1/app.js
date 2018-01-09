var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
            {name: "Salmon Creek", image: "https://farm3.staticflickr.com/2938/14259065508_c08a1eb915.jpg"},
            {name: "Granite Hill", image: "https://farm3.staticflickr.com/2947/15215548990_efc53d32b6.jpg"},
            {name: "Mountain Goat's rest", image: "https://farm8.staticflickr.com/7179/6927088769_cc14a7c68e.jpg"}
        ]

app.get("/", function(req, res){
   res.render("landing"); 
});

app.get("/campgrounds", function(req, res){
        res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
    //get data from form and add to campgrounds array
    var name = req.body.name
    var image = req.body.image
    var newCampground ={name: name, image: image}
    campgrounds.push(newCampground);
    //redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
   res.render("new");
});





app.listen(process.env.PORT, process.env.IP, function(){
      console.log("The server has started")
});
  
