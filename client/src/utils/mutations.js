import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
    `;

export const ADD_USER = gql`
        mutation addUser($username: String!, $email: String!, $password: String!) {
            addUser(username: $username, email: $email, password: $password) {
                token
                user {
                    _id
                    username
                    email
                }
            }
        }
        `;

export const SAVE_BOOK = gql`
    mutation SaveBook($bookToSave: bookInput) {
        saveBook(bookToSave: $bookToSave) {
          _id
          bookCount
          email
          savedBooks {
            authors
            bookId
            description
            image
            link
            title
          }
        }
      }
        `;

export const REMOVE_BOOK = gql`
mutation RemoveBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      bookCount
      email
      savedBooks {
        authors
        bookId
        description
        image
        link
        title
      }
    }
  }
        `;