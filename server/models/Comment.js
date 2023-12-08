const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  commentText: {
    type: String,
    required: true,
  }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
