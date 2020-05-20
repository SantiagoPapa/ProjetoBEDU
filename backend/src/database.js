const mongoose = require('mongoose');

const URL = process.env.MONGODB_URL
? process.env.MONGODB_URL
: 'mongodb://localhost/DBprueba';


mongoose.connect(URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('DB is Connected');
}); 