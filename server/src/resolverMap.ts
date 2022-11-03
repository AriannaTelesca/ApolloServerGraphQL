import { text } from 'stream/consumers';
import apiQuotes from './api';


const resolvers = {
    Query: {
        getQuotes: () => {
            return apiQuotes;
        },

        quote: (_: any, { author }:{ author: string }, context: any ) => {
            return apiQuotes.filter((quote) => quote.author === author );
        },

        search: (_: any, { text } : { text: string}, context: any) => {
            return apiQuotes.filter((quote) => quote.author.match(text)); 
        }
}
}

export default resolvers;