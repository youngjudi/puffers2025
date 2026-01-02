
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

const jacketSchema = new mongoose.Schema({ 
  name: String 
});

jacketSchema.methods.show = function () {
  console.log(`${this.name} — в магазине прямо сейчас!`);
};

const Jacket = mongoose.model('Puffers', jacketSchema);

const nike = new Jacket({ name: 'Puffer Nike' });
nike.save().then(() => {
  console.log('Пуховик сохранён!');
  nike.show();  // ← вот здесь сработает наш метод
});