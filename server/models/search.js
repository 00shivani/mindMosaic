const mongoose = require('mongoose');
const { Schema } = mongoose;

const searchSchema = new Schema({
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
    comments: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
        },
    ],
});

const Search = mongoose.model('Search', searchSchema);

module.exports = Search;