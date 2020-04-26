//connect the mongodb
var mongoose = require('mongoose');
mongoose.connect('mongodb://mongo:27017/connectDBapp',{useNewUrlParser:true});

//to confirm that the connection
var db =mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function(){
    cinsole.log("Connection!");
});

//define the schema
var testSchema = new mongoose.Schema({
    id :Number,
    name:String
});
//to set up the allocation of Schema
testSchema.set('collection','test');
//default allocation
var tesrModle=mongoose.model('test', testSchema);

