const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');


const jacket = mongoose.model('Puffers', { name: String });


const nike = new jacket({ name: 'nike' });
nike.save().then(() => console.log('Пуховик сохранён!)'));