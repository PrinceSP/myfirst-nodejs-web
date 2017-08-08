var express = require('express');
var router = express.Router();

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
router.post('/send-message', function(req, res, next) {
  res.json({message:req.body.comment});
})
module.exports = router;
