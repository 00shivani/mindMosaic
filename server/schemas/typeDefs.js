const { gql } = require('apollo-server-express');
const typeDefs = `
  type Tile {
    _id: ID
  }
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }
  type Comment {
    _id: ID
    commentText: String
    createdAt: String
    username: String
  }
  type Gallery {
    _id: ID
    title: String
    caption: String
    media: String
    comments: [Comment]
  }
  type Search {
    _id: ID
    title: String
    caption: String
    media: String
    comments: [Comment]
  }
}
type Auth {
  token: ID
  user: User
}
  type Query {
    Tile(_id: ID!) : Tile
    User(_id: ID!): User
    Comment(_id: ID!): Comment
    Gallery(_id: ID!): Gallery
    Search(_id: ID!): Search
  }
  type Mutation {
    addUser(name: String!, email: String!, password: String! gallery: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    addTile(title: String!, content: String!): Tile
    addComment(tileId: ID!, commentText: String!): Comment
    removeTile(tileId: ID!): Tile
    removeComment(tileId: ID!, commentId: ID!): Comment
    removeUser(userId: ID!): User
    updateTile(tileId: ID!, name: String, description: String, image: String): Tile
    updateComment(tileId: ID!, commentId: ID!, commentText: String): Comment
  }
`;
module.exports = typeDefs;