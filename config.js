if(process.env.NODE_ENV=='production'){
  exports.database = {
      mongodb:{
          'host':'localhost',
          'port':'27017',
          'database':'blog',
          'username':'',
          'password':''
      }
    };
}else if(process.env.NODE_ENV=='development'){
  exports.database = {
      mongodb:{
          'host':'localhost',
          'port':'27017',
          'database':'blog',
          'username':'',
          'password':''
      }
    };
}else{
  exports.database = {
      mongodb:{
          'host':'localhost',
          'port':'27017',
          'database':'blog',
          'username':'',
          'password':''
      }
    };
}
