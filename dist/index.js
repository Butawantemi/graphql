import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
// Data
import db from './db';
// TypeDefs
import { typeDefs } from './schema';
// Resolvers
const resolvers = {
    Query: {
        Games() {
            return db.games;
        },
        Authors() {
            return db.authors;
        },
        Reviews() {
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
