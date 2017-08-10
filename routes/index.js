var express = require('express');
var router = express.Router();
var model_guests = require('../models/guests');

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
})
router.get('/guests-list', function(req, res, next) {
  model_guests.fetchdata(function(err,allGuests) {

      console.log(err);
      res.render('page_guests-list.html', {allGuests:allGuests, title: 'GUESTS LIST'});
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

module.exports = router;
