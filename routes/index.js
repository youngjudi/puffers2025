var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Джордана*/
router.get('/jordan', function(req, res, next) {
    res.send("<h1>Страница Пуховика Jordan</h1>")
});
/* Страница Найка */
router.get('/nike', function(req, res, next) {
    res.send("<h1>Страница пуховика Nike</h1>")
});

/* Страница Аликса */
router.get('/alyx', function(req, res, next) {
    res.send("<h1>Страница пуховика Alyx</h1>")
});
module.exports = router;
