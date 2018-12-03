var express = require('express');
var router = express.Router();
const asyncHandler = require('express-async-handler');

/* GET users listing. */
router.get('/', asyncHandler(async (req, res, next) => {
  res.send('respond with a resource');
}));

module.exports = router;
