const _logger = require('tracer').console()
const mongoose = require('mongoose');
var schema = {
  "item": {type:String, default:'-'},
  "ammount": {type:String, default:'-'},
  "price": {type:String, default:'-'},
  "picture": {type:String, default:'-'}
}
module.exports.schema = schema;
var schemaObject = new mongoose.Schema(schema);
var model = mongoose.model('items', schemaObject);

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
