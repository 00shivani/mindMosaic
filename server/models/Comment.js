const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
