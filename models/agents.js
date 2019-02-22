var mongoose=require('mongoose');
var agentsSchema= new mongoose.Schema({name: String,
                                        level: String,
                                        image: String,
                                        hq: String,
                                      captures:[{
                                        type: mongoose.Schema.Types.ObjectId,
                                        ref:"country"
                                      }]});
module.exports=mongoose.model("Agent", agentsSchema);
