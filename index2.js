const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/goods', {useNewUrlParser: true, useUnifiedTopology: true});
const Good = require('./models/good').Good;
const schema = mongoose.Schema({
    name: String
});

schema.methods.meow = function () {
    console.log(this.get('name'));
}
const Cat = mongoose.model('Cat', schema);

const good = new Good({
    productName: "Toyota",
})

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => kitty.meow());

kitty.save().then(() => console.log(arguments));

