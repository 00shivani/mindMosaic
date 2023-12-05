// Inside server/models/graphql.js

const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Post {
    _id: ID!
    title: String!
    imageUrl: String!
    # add more data here 
  }

  type Query {
    getPosts: [Post]
    getPostById(id: ID!): Post
     # add more data here
  }

  type Mutation {
    createPost(title: String!, imageUrl: String!): Post
    updatePost(id: ID!, title: String, imageUrl: String): Post
    deletePost(id: ID!): Post
    # Add more data here .
  }
`;

module.exports = typeDefs;
