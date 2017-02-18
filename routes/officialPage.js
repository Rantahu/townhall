var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('officials', { title: 'Official',
    districtNum: '20',
    officialsName: 'FirstName LastName',
    officialsEmail: 'name@domain.gov'
    partials: {
      head: './partials/head',
      footer: './partials/footer',
      navbar: './partials/navbar',
    }
 });
});

module.exports = router;
