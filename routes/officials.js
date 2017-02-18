var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('officials', { title: 'Officials',
    districtNum: '20',
    partials: {
      head: './partials/head',
      footer: './partials/footer',
      navbar: './partials/navbar',
    }
 });
});

module.exports = router;
