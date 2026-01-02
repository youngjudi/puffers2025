var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Джордана */
router.get('/jordan', function(req, res, next) {
    res.render('puffer', {
        title: "Puffer Jordan",
        picture: "images/jordan.jpg",
        desc: "Пуховики Jordan — это стильные и тёплые куртки с логотипом Jumpman, часто с синтетическим утеплителем или пухом. Они водоотталкивающие, объёмные, идеальны для холодной погоды."
    });
});
/* Страница Найка */
router.get('/nike', function(req, res, next) {
    res.render('puffer', {
        title: "Puffer Nike",
        picture: "images/nike.jpg",
        desc: "Пуховики Nike сочетают спорт и повседневность, с технологиями Therma-FIT, Storm-FIT для защиты от ветра и влаги. Утеплитель синтетический или пуховый, водоотталкивающая ткань, лёгкие и тёплые."
    });
});
/* Страница Аликса */
router.get('/alyx', function(req, res, next) {
    res.render('puffer', {
        title: "Puffer Alyx",
        picture: "images/alyx.jpg",
        desc: "Пуховики Alyx — авангардная высокая мода от Matthew Williams, с фирменными пряжками-роллеркоастерами, нейлоновой тканью и стёганым дизайном."
    });
});

module.exports = router;
