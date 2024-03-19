const { User, Book } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent) => {

        }
    },
    Mutation: {
        loginUser: async (parent, { email, password }) => {
            // Find profile based on email
            const profile = await Profile.findOne({ email });

            if (!profile) {
                throw AuthenticationError;
            }

            // Fail to log in if incorrect password is given
            const correctPw = await profile.isCorrectPassword(password);
            if (!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(profile);
            return { token, profile };
        },

        addUser: async (parent, args) => {
            //Create new user with given arguments
            const user = await User.create(args);
            const token = signToken(user);

            return { user, token };
        },

        saveBook: async (parent) => {
            
        },

        removeBook: async (parent) => {
            
        }
    }
}