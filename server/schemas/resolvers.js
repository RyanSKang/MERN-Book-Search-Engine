const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User } = require('../models');
const { sign } = require('crypto');

const resolvers= {
    Query: {
        me: async(parent, args, context) => {
            if(context.user){
                const userData = await User.findOne({_id: context.user._id})
                .select("-__v -password")
                .populate("book");
                return userData;
            }
            throw new AuthenticationError('Error: Not Logged in!');
        },
        users: async () => {
            return User.find().select("-__v -passowrd").populate('book');
        },
        user: async ({ username }) => {
            return User.findOne({ username })
            .select('-__v -password')
            .populate('book');
        },
    },
    Mutation: {
        addUser: async (parents, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        login: async (parents, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user){
                throw new AuthenticationError("Incorrect Username or Password");
            }
            const correctPw= await user.isCorrectPassword(password);
            if(!correctPw){
                throw new AuthenticationError("Incorrect Username or Password");
            }
            const token = await signToken(user);
            return { token,user };
        },
        saveBook: async (parent, { newBook }, context) => {
            console.log(newBook);
            console.log(context.user);
            if(context.user){
                const savedBook = User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { savedBooks: newBook }},
                    { new: true }
                );
                return savedBook;
            }
            throw new AuthenticationError('Must sign up or Log in!');
        },
    },
};