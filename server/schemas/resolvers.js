const { User, Book } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async () => {

        }
    },
    Mutation: {
        loginUser: async () => {
            
        },
        addUser: async () => {
            
        },
        saveBook: async () => {
            
        },
        removeBook: async () => {
            
        }
    }
}