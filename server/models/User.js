const mongoose = require('mongoose');
const { Tile } = require('./models/Tile.js');
const { Comment } = require('./models/Comment.js');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const { SignUpValidation } = require('./utils/validation/index.js');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  tiles: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Tile',
    }
  ],
  comments: [
    {
      type: Schema.Types.ObjectId, 
      ref: 'Comment',
    }
  ],
  gallery: {

    type: String,
    required: true,
    enum: SignUpValidation.gallery,
  },
  galleryBio: {
    type: String,
    required: false,
  }
});
//  add gallery name
// add gallery bio

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
