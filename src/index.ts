import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// Data
import db from './db.js';

// TypeDefs
import  { typeDefs } from './schema.js';


// Resolvers
const resolvers = {
    Query:  {
        Games: () => db.games,
        Game: (_: any, args: { id: string; }) => {
            return db.games.find(game => game.id === Number(args.id));
        },
        Authors: () => db.authors,
        Reviews: () => db.reviews,
        Review: (_: any, args: { id: string; }) => {
            return db.reviews.find(review => review.id === Number(args.id));
        }
    }
}
// Apollo Server 
const server = new ApolloServer({
    typeDefs,
    resolvers
});
 
const { url } = await startStandaloneServer( server, {
    listen: {
        port: 4000,
    }
});

console.log(`Server ready at ${url}`);