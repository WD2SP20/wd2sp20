var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (req.query.process) {
     res.render('madlib',
        {
            title: 'Generate MadLib',
        }
    );
  } else {
    res.render('madlib',
        {
            title: 'Generate MadLib',
        }
    );
  }
});

module.exports = router;
