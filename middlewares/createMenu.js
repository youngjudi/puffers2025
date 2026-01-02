var Puffers = require("../models/puffer").Puffers

module.exports = async function(req,res,next){
   res.locals.nav = []


   var menu =  await Puffers.find({},{_id:0,title:1,nick:1});
  console.log(menu);
  if (menu.length != 0) {
   res.locals.nav = menu;
  }
  next();
}