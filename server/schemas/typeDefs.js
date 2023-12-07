const { gql } = require('apollo-server-express');
const typeDefs = `
  type Category {
    _id: ID
    name: String
  }
  type Post {
    _id: ID
  }
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }
  type Query {
    Post(_id: ID!) : Post
  }
  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }
  type Comment {
    _id: ID
    text: String
    # Include other fields as needed
  }
  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }
  type Checkout {
    session: ID
  }
  type Auth {
    token: ID
    user: User
  }
  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    User(_id: ID!): User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }
  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
    addPost(title: String!, content: String!): Post
    addComment(postId: ID!, commentText: String!): Comment
    removePost(postId: ID!): Post
    removeComment(postId: ID!, commentId: ID!): Comment
    removeUser(userId: ID!): User
    updatePost(postId: ID!, name: String, description: String, image: String): Post
    updateComment(postId: ID!, commentId: ID!, commentText: String): Comment
  }
`;
module.exports = typeDefs;