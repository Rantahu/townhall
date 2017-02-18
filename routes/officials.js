var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Officials',
    partials: {
      head: './partials/head',
      footer: './partials/footer',
      navbar: './partials/navbar',
    }
 });
});

module.exports = router;
