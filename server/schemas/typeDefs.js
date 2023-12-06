const typeDefs = `
    type Post {
        _id: ID!
        name: String!
        description: String!
        image: String!
        createdAt: String!
        username: String!
        comments: [Comment]!
    }
    type Comment {
        _id: ID!
        commentText: String!
        createdAt: String!
        username: String!
    }
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        posts: [Post]
        comments: [Comment]
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        getPosts: [Post]
        getPostById(_id: ID!): Post
        getComments: [Comment]
        getUsers: [User]
        getUserById(_id: ID!): User
        me: User
    }
    type Mutation {
        addPost(name: String!, description: String!, image: String!, username: String!): Post
        addComment(postId: ID!, commentText: String!, username: String!): Post
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        removePost(postId: ID!): Post
        removeComment(postId: ID!, commentId: ID!): Post
        updatePost(postId: ID!, name: String!, description: String!, image: String!): Post
        updateComment(postId: ID!, commentId: ID!, commentText: String!): Post
    }
`;

module.exports = typeDefs;
