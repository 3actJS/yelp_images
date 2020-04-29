const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/imagesInfo');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('db connected');
});

let imagesSchema = mongoose.Schema({
  // TODO: your schema here!
  imageId: Number,
  imageURL: String,
  imageTitle: String,
  imageCategory: String,
  imageDescription: String,
  imageUploadDate: Date,
  imageModiefiedDate: Date
});

let Image = mongoose.model('Image', imagesSchema);