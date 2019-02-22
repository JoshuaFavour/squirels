var mongoose= require('mongoose'),
    agents=require("./models/agents"),
    countries=require("./models/countries")

    var data=[{
              name: "Mr Twitch",
              level: "6",
              image: "https://us.123rf.com/450wm/memoangeles/memoangeles1510/memoangeles151000009/47212111-stock-vector-sad-cartoon-squirrel-vector-clip-art-illustration-with-simple-gradients-all-in-a-single-layer-.jpg?ver=6",
              hq:"Noisy Sun planet"
            },
            {
                name: "Mrs Nutbear",
                level: "3",
                image: "https://png.pngtree.com/element_origin_min_pic/17/03/23/29eefd93c340ca38b28e2de0dcb2796d.jpg",
                hq:"Corn planet"
              },
            {
                name: "Jimbo",
                level: "10",
                image: "https://us.123rf.com/450wm/alexeyzet/alexeyzet1210/alexeyzet121000003/15818844-cute-cartoon-squirrel-looking-through-a-telescope-vector-illustration-.jpg?ver=6",
                hq:"AMusement park"
              },
              {
                  name: "Meeseek",
                  level: "12",
                  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7eAeavvnk0AnuWsH0r0SZFUHabbt5B9qkP2DRQEsUoPskeyQ1lw",
                  hq:"AMusement park"
                }
          ]

          function seedDB(){

            agents.deleteMany({}, function(err){
              if (err) {
                console.log(err);
              }
              console.log("removed all agents");
              countries.deleteMany({}, function(err){
                if (err) {
                  console.log(err);
                }
                console.log("removed all countries");
                data.forEach(function(seed){
                  agents.create(seed, function(err, data){
                    if (err) {
                      console.log(err);
                    }else {
                      console.log("added new agents");
                    }
                })

                })
              })
            })
          }

module.exports= seedDB;
