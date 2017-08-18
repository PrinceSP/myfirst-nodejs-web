const _logger = require('tracer').console()
const mongoose = require('mongoose');
var schema = {
  "username": {type:String, default:'-'},
  "password": {type:String, default:'-'},
}
module.exports.schema = schema;
var schemaObject = new mongoose.Schema(schema);
var model = mongoose.model('users', schemaObject);

module.exports.createdata = function(guestData,callback){
  var guest = model(guestData);
  guest.save(function(e,o){
    if(e) return callback(false);
    else {
      callback(true,o);
    }

  });
}


module.exports.fetchdata = function(callback){

  model .find({},function(e,o){
    if(e) return callback(e,o);
    else {
      callback(e,o);
    }

  });
}
module.exports.fetchOneByUsername = function(v_username,callback){
  model.findOne({username:v_username},function(e,o){
    callback(e,o);
  });
}
