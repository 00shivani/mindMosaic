// Inside server/models/graphql.js

const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    Name: String! 
    Email: String!
    Password: String!
    Gallery: [Gallery]
  }
  type Tile {
    _id: ID!
    title: String!
    imageUrl: String!
    Comments: [Comment]
    Credit: String! 
  }
  type Comment {
    _id: ID!
    commentText: String!
    createdAt: String!
    username: String!
  }
  type Gallery {
    _id: ID!
    title: String!
    caption: String!
    media: Image!
    Comments: [Comment]
  }
  type Search {
    _id: ID!
    title: String!
    caption: String!
    media: String!
    Comments: [Comment]
  }

  type Query {
    getTile: [Tile]
    getTileById(id: ID!): Tile
    getComment: [Comment]
    getCommentById(id: ID!): Comment
    getGallery: [Gallery]
    getGalleryById(id: ID!): Gallery
    getSearch: [Search]
    getSearchById(id: ID!): Search
  }

  type Mutation {
    addUser(Name: String!, Email: String!, Password: String! Gallery: [Gallery] ): User
    removeUser(id: ID!): User
    addTile(title: String!, imageUrl: String!): Tile
    updateTile(id: ID!, title: String, imageUrl: String): Tile
    deleteTile(id: ID!): Tile
    addComment(tileId: ID!, commentText: String!): Comment
    removeComment(tileId: ID!, commentId: ID!): Comment
    addGallery(title: String!, caption: String!, media: String!): Gallery
    updateGallery(id: ID!, title: String, caption: String, media: String): Gallery
    deleteGallery(id: ID!): Gallery
    addSearch(title: String!, caption: String!, media: String!): Search
    updateSearch(id: ID!, title: String, caption: String, media: String): Search
    deleteSearch(id: ID!): Search
  }
`;

module.exports = typeDefs;
