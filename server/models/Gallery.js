const mongoose = require('mongoose');

const { Schema } = mongoose;

const gallerySchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    caption: {
        type: String
    },
    media: {
        type: String,
        required: false
    },
    credit: {
        type: String
    },
    comments: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
        }
    ]
});

const Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;