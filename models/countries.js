var mongoose= require('mongoose');

var countrySchema= new mongoose.Schema({name: String, Population: Number});

module.exports= mongoose.model("country", countrySchema);
