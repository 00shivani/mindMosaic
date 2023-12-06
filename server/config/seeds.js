const db = require('./connection');
const { User, Post, Comment } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Comment', 'comments');
  await cleanDB('Post', 'posts');
  await cleanDB('User', 'users');

  const Comment = await Comment.insertMany([
    { commentText: 'That is my Favorite Picture!', username: 'testUser1' },
    { commentText: 'OMG I want to go!', username: 'testUser2' },
    { commentText: 'Spectacular!', username: 'testUser3' },
    { commentText: 'That is my Favorite Artist', 'testUser4' },
    { commentText: 'Breathtakingly stunning!', username: 'testUser5' },
  ]);

  console.log('comment seeded');

  const Post = await Post.insertMany([
    {
      title: 'MY FAV!',
      postText: 'This is my favorite picture',
      username: 'testUser1',
      comments: [comments[0]._id, comments[1]._id]
    },
    {
      title: 'Breathtaking!',
      postText: 'I want to go there so bad!',
      username: 'testUser2',
      comments: [comments[2]._id]
    },
  ]);
  console.log('Post seeded');

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    posts: [posts[0]._id],
    comments: [comments[0]._id]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345',
    posts: [posts[1]._id],
    comments: [comments[1]._id]
  });

  console.log('user seeded');

  process.exit();
});

