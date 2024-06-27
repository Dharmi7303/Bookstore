const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const booksRoutes = require('./routes/booksRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = 'mongodb+srv://dharmijaviya:WkQJusU4AM4qPRBX@webappdb.eqlwoam.mongodb.net/';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
  process.exit(1);
});

app.use(bodyParser.json());

app.use('/api/books', booksRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
