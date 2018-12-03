var express = require('express');
var router = express.Router();
const asyncHandler = require('express-async-handler');

/* GET home page. */
router.get('/', asyncHandler(async (req, res, next) => {
  console.log(req);
  res.render('index', { title: 'Home',
                        metaDescription: 'Guitar Shop',
                        menuPath: req.path});
                        
}));

router.get('/about', asyncHandler(async (req, res, next) => {
  console.log(req);
  res.render('about', { title: 'About',
                        metaDescription: 'Guitar Shop About Page',
                        menuPath: req.path});
                        
}));
module.exports = router;
