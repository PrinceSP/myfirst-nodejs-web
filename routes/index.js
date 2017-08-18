var express = require('express');
var router = express.Router();
var model_guests = require('../models/guests');
var model_items = require('../models/items');
var model_users = require('../models/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HOME' });
});
router.get('/about-me', function(req, res, next) {
  res.render('page_about.html', { title: 'ABOUT' });
});
router.get('/blog',function(req, res, next) {
  res.render('page_blog.html', {title: 'BLOG'});
});
router.get('/contact',function(req, res, next) {
  res.render('page_contact.html', {title: 'CONTACT'});
});
router.get('/news',function(req, res, next) {
  res.render('page_news.html', {title: 'NEWS'});
});
router.get('/article', function(req, res, next) {
  res.render('page_article.html', {title: 'ARTICLE'});
});
router.get('/requested-item', function(req, res, next) {
  model_items.fetchdata(function(err,allItems) {

    console.log(err);
    res.render('page_requested-item.html', {allItems:allItems, title: 'REQUESTED ITEM'})
  });
});
router.get('/shop', function(req, res, next) {
  res.render('page_shop.html', {title: 'SHOP'});
});
router.get('/guests-list', function(req, res, next) {
  model_guests.fetchdata(function(err,allGuests) {

      console.log(err);
      res.render('page_guests-list.html', {allGuests:allGuests, title: 'GUESTS LIST'});
  });

});
router.get('/inventory', function(req, res, next) {
  res.render('page_inventory.html', {title: 'INVENTORY'})
});
router.get('/login', function(req,res, next) {
  model_users.fetchdata(function(err,allAuth) {

    res.render('page_login.html', {title: 'LOGIN'})
  });
});

router.post('/send-message', function(req, res, next) {
var guestData = {
  name:req.body.name,
  mail:req.body.mail,
  message:req.body.comment
}
model_guests.createdata(guestData,function(status,err) {
  console.log(err);
  res.json({
    status:status,
    name:req.body.name,
    mail:req.body.mail,
    message:req.body.comment});
  })
});

router.post('/send-item', function(req, res, next) {
var guestData = {
  item:req.body.item,
  ammount:req.body.ammount,
  price:req.body.price
}
model_items.createdata(guestData,function(status,err) {
  console.log(err);
  res.json({
    status:status,
    item:req.body.item,
    ammount:req.body.ammount,
    price:req.body.price});
  })
});
router.get('/auth-failed', function(req,res, next) {
  res.send('invalid user name or password please retry.')
});

router.post('/send-auth', function(req, res, next) {
  var userData = {
    username:req.body.username,
    password:req.body.password
  }
model_users.fetchOneByUsername(userData.username,function(e,o) {
  var username_data;
  var password_data;
  if (o) {
    username_data=o.username;
    password_data=o.password;
  }
  if(userData.username==username_data && userData.password==password_data) {
    res.redirect('/contact');
  }
  else {
    res.redirect('/auth-failed');
  }
});

});

module.exports = router;
