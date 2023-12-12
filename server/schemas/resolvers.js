const { User, Tile, Comment, Gallery, Search } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const resolvers = {
  Query: {
    User: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOneById(context.user._id).populate({
          path: 'Tiles',
          populate: 'Comments',
        });
        return userData;
      }
      throw AuthenticationError;
    },  
    Tile: async () => {
        return await Tile.find();
    },
    Comment: async (parent, { tile, name }) => {
      const params = {};
      if (tile) {
        params.tile = tile;
      }
      if (name) {
        params.name = {
          $regex: name
        };
      }
      return await Comment.find(params).populate('tile');
    },
    Gallery: async ( parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'Gallery',
          populate: 'Comments',
        });
        return user.Gallery;
      }
      throw new AuthenticationError('Not logged in');
    },
    Search: async (_, { _id }) => {
      try {
        const search = await Search.findById(_id);
        return search;
      } catch (error) {
        throw new Error('Error fetching search.');
      }
    },
    // Implement other query resolvers as needed
  },

  Mutation : {
    addUser: async (parent, {name, password, gallery, email }) => {
      const user = await User.create({ name, password, gallery, email });
      const token = signToken(user);
      return { token, user };
    },
    addTile: async (parent, args, context) => {
      if (context.user) {
        const tile = await Tile.create({ ...args, username: context.user.username });
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { Tiles: tile._id } },
          { new: true }
        );
        return tile;
      }
      throw AuthenticationError;
    },
    addComment: async (parent, { tileId, commentText }, context) => {
      if (context.user) {
        const addComment = await Comment.findOneAndUpdate(
          { _id: tileId },
          { $push: { Comments: { commentText, username: context.user.username } } },
          { new: true, runValidators: true }
        );
        return addComment;
      }
      throw AuthenticationError;
    },
    removeTile: async (parent, { tileId }, context) => {
      if (context.user) {
        const removeTile = await Tile.findOneAndDelete({
          _id: tileId,
          username: context.user.username
        });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { Tiles: tileId } }
        );
        return removeTile;
      }
      throw AuthenticationError;
    },
    removeComment: async (parent, { tileId, commentId }, context) => {
      if (context.user) {
        const removeComment = await Comment.findOneAndDelete(
          { _id: tileId },
          { $pull: { Comments: { _id: commentId } } },
          { new: true }
        );
        await Comment.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { Comments: commentId } }
        );
        return removeComment;
      }
      throw AuthenticationError;
    },
    removeUser: async (parent, { userId }, context) => {
      if (context.user) {
        const removeUser = await User.findOneAndDelete(
          { _id: userId },
          { $pull: { Tiles: userId } }
        );
        return removeUser;
      }
      throw AuthenticationError;
    },
    updateTile: async (parent, { tileId, name, description, image }, context) => {
      if (context.user) {
        const updateTile = await Tile.findOneAndUpdate(
          { _id: tileId, username: context.user.username },
          { name, description, image },
          { new: true, runValidators: true }
        );
        return updateTile;
      }
      throw AuthenticationError;
    },
    updateComment: async (parent, { tileId, commentId, commentText }, context) => {
      if (context.user) {
        const updateComment = await Tile.findOneAndUpdate(
          { _id: tileId },
          { $set: { 'Comments.$[comment].commentText': commentText } },
          {
            new: true,
            runValidators: true,
            arrayFilters: [{ 'comment._id': commentId }],
          }
        );
        return updateComment;
      }
      throw AuthenticationError;
    },
    updateUser: async (parent, { userId, username, email, password }, context) => {
      if (context.user) {
        const updateUser = await User.findOneAndUpdate(
          { _id: userId },
          { username, email, password },
          { new: true, runValidators: true }
        );
        return updateUser;
      }
    },
    updateGallery: async (parent, { galleryId, title, caption, media }, context) => {
      if (context.user) {
        const updateGallery = await Gallery.findOneAndUpdate(
          { _id: galleryId },
          { title, caption, media },
          { new: true, runValidators: true }
        );
        return updateGallery;
      }
    },
  },
};
module.exports = resolvers;










