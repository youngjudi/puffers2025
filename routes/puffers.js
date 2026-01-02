var express = require('express');
var router = express.Router();
var Puffers = require('../models/puffer').Puffers;
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с puffers');
});
/* Страница пуховиков */
router.get("/:nick", async function(req, res, next) {
   var puffers = await Puffers.find({nick: req.params.nick});
   console.log(puffers)
   if(!puffers.length) return next(new Error("Нет такого пуховика в нашем магазине"))
       var puffer = puffers[0];
       res.render('puffer', {
           title: puffer.title,
           picture: puffer.avatar,
           desc: puffer.desc
       })
});
module.exports = router;
