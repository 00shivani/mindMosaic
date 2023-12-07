const { User, Post, Comment, } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const resolvers = {
  Query: {
    User: async (_, { _id }) => {
      try {
        const user = await User.findById(_id);
        return user;
      } catch (error) {
        throw new Error('Error fetching user.');
      }
    },
    // Implement other query resolvers as needed
  },
  Mutation : {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    addPost: async (parent, args, context) => {
      if (context.user) {
        const post = await Post.create({ ...args, username: context.user.username });
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { Posts: post._id } },
          { new: true }
        );
        return post;
      }
      throw AuthenticationError;
    },
    addComment: async (parent, { postId, commentText }, context) => {
      if (context.user) {
        const updatedComment = await Comment.findOneAndUpdate(
          { _id: postId },
          { $push: { Comments: { commentText, username: context.user.username } } },
          { new: true, runValidators: true }
        );
        return updatedComment;
      }
      throw AuthenticationError;
    },
    removePost: async (parent, { postId }, context) => {
      if (context.user) {
        const post = await Post.findOneAndDelete({
          _id: postId,
          username: context.user.username
        });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { Posts: postId } }
        );
        return post;
      }
      throw AuthenticationError;
    },
    removeComment: async (parent, { postId, commentId }, context) => {
      if (context.user) {
        const removeComment = await Comment.findOneAndDelete(
          { _id: postId },
          { $pull: { Comments: { _id: commentId } } },
          { new: true }
        );
        await Comment.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { Comments: commentId } }
        );
        return updatedPost;
      }
      throw AuthenticationError;
    },
    removeUser: async (parent, { userId }, context) => {
      if (context.user) {
        const user = await User.findOneAndDelete(
          { _id: userId },
          { $pull: { Posts: userId } }
        );
        return user;
      }
      throw AuthenticationError;
    },
    updatePost: async (parent, { postId, name, description, image }, context) => {
      if (context.user) {
        const updatedPost = await Post.findOneAndUpdate(
          { _id: postId, username: context.user.username },
          { name, description, image },
          { new: true, runValidators: true }
        );
        return updatedPost;
      }
      throw AuthenticationError;
    },
    updateComment: async (parent, { postId, commentId, commentText }, context) => {
      if (context.user) {
        const updatedPost = await Post.findOneAndUpdate(
          { _id: postId },
          { $set: { 'Comments.$[comment].commentText': commentText } },
          {
            new: true,
            runValidators: true,
            arrayFilters: [{ 'comment._id': commentId }],
          }
        );
        return updatedPost;
      }
      throw AuthenticationError;
    },
    updateUser: async (parent, { userId, username, email, password }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: userId },
          { username, email, password },
          { new: true, runValidators: true }
        );
        return updatedUser;
      }
  }
},
};
module.exports = resolvers;










