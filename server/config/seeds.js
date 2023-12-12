const db = require('${__dirname}/../../config/connection');
const { User, Tile, Comment, } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Comment', 'comments');
  await cleanDB('Tile', 'tiles');
  await cleanDB('User', 'users');

  const comments = await Comment.insertMany([
    { commentText: 'That is my Favorite Picture!', username: 'testUser1' },
    { commentText: 'OMG I want to go!', username: 'testUser2' },
    { commentText: 'Spectacular!', username: 'testUser3' },
    { commentText: 'Breathtakingly stunning!', username: 'testUser5' },
  ]);

  console.log('comments seeded');

  const tiles = await Tile.insertMany([
    {
      title: 'MY FAV!',
      caption: 'This is my favorite picture',
      username: 'testUser1',
      comments: [comments[0]._id, comments[1]._id],
    },
    {
      title: 'Breathtaking!',
      caption: 'I want to go there so bad!',
      username: 'testUser2',
      comments: [comments[2]._id],
    },
  ]);
  console.log('Tiles seeded');

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    tiles: [tiles[0]._id],
    comments: [comments[0]._id],
    galleryName: 'myGallery',
    galleryBio: 'Art, music, and memes',
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345',
    tiles: [tiles[1]._id],
    comments: [comments[1]._id],
    galleryName: 'lalaGallery',
    galleryBio: 'Video games, movies',
  });

  console.log('users seeded');

  process.exit();
});
