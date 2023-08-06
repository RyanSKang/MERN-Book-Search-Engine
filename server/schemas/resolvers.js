const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User } = require('../models');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select("-__v -password")
                    .populate("book");
                return userData;
            }
            throw new AuthenticationError('Error: Not Logged in!');
        }
    },
    Mutation: {
        addUser: async (parents, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        login: async (parents, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError("Incorrect Username or Password");
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError("Incorrect Username or Password");
            }
            const token = await signToken(user);
            return { token, user };
        },
        saveBook: async (parent, { newBook }, context) => {
            console.log(newBook);
            console.log(context.user);
            if (context.user) {
                const savedBook = User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { savedBooks: newBook } },
                    { new: true }
                );
                return savedBook;
            }
            throw new AuthenticationError('Must sign up or Log in!');
        },
        removeBook: async (parent, args, context) => {
            if (context.user) {
                const removedBook = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBooks: args } },
                    { new: true }
                );
                return removedBook;
            }
            throw new AuthenticationError('Must sign up or Log in!');
        },
        removeBook: async (parent, args, context) => {
            if (context.user) {
                const updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBooks: { bookId: args.bookId } } },
                    { new: true }
                );
                return updatedUser;
            }
            throw new AuthenticationError('Must sign up or Log in!');
        }
    },
};

module.exports =resolvers;