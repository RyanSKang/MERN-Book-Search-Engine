const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User{
        _id: ID
        username: String!
        email: String!
        bookCount: Int
        savedBooks: [Book]
    }
    type Book{
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }
    type Mutation{
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(bookToSave: bookInput): User
        removeBook(bookId: ID!): User
    }
    type Auth{
        token: ID!
        user: User
    }
    type Query {
        me: User
        users: [User]
        user(username: String!): User
      }
    input bookInput{
        bookId: String
        image: String
        link: String
        title: String
        authors: [String]
        description: String
    }
`;

module.exports = typeDefs