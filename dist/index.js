import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
// Data
import db from './db.js';
// TypeDefs
import { typeDefs } from './schema.js';
// Resolvers
const resolvers = {
    Query: {
        Game() {
            return db.games;
        },
        Author() {
            return db.authors;
        },
        Review() {
            return db.reviews;
        }
    }
};
// Apollo Server 
const server = new ApolloServer({
    typeDefs,
    resolvers
});
const { url } = await startStandaloneServer(server, {
    listen: {
        port: 4000,
    }
});
console.log(`Server ready at ${url}`);
