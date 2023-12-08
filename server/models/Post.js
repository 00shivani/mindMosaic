const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  title: {
    type: String
  },
  caption: {
    type: String
  },
  media: {
    type: String,
    required: false
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
