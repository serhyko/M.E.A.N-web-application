var articleSchema, mongoose;

mongoose = require('mongoose');

articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  cdate: {
    type: String,
    required: true
  }
});

module.exports = articleSchema;
