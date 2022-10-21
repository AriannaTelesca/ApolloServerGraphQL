import apiQuotes from './api';

const quotes = apiQuotes;

const resolvers = {
    Query: {
        getQuotes: (_root:void, _args:void, _context:void, _info:void) => {
            return quotes;
        }
    }
};

export default resolvers;