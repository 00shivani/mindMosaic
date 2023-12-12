const mongoose = require('mongoose');

const { Schema } = mongoose;

const { Comment } = require('./models/Comment.js');

const tileSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  title: {
    type: String
  },
  credit: {
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
      ref: 'Comment'
    }
  ]
});

const Tile = mongoose.model('Tile', tileSchema);

module.exports = Tile;
