var express= require('express'),
    mongoose=require('mongoose'),
    bodyParser=require('body-parser'),
    app=express(),
    agents=require("./models/agents"),
    countries=require("./models/countries"),
    seed=require("./seeds")

    mongoose.connect("mongodb://localhost:27020/squirrel",{ useNewUrlParser: true });
    app.set("view engine", "ejs");
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(express.static(__dirname + ("/public")))

    seed();

app.get("/takeovers", function(req,res){

  agents.find({}, function(err, agent){
        if (err) {
          console.log(err);
        }else {
            res.render('index', {agents:agent});
        }
      })

      })

app.get("/takeovers/:id", function(req, res){
agents.findById(req.params.id, function(err, agent){
  if (err) {
    console.log(err);
  }else {
    res.render("squiP", {agent:agent})
  }
});

});





app.listen(3000, function(){
  console.log("initialized");
})
