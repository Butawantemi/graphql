import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
// Data
import db from './db.js';
// TypeDefs
import { typeDefs } from './schema.js';
// Resolvers
const resolvers = {
    Query: {
        games: () => db.games,
        game: (_, args) => {
            return db.games.find(game => game.id === Number(args.id));
        },
        authors: () => db.authors,
        author: (_, args) => {
            return db.authors.find(author => author.id === Number(args.id));
        },
        reviews: () => db.reviews,
        review: (_, args) => {
            return db.reviews.find(review => review.id === Number(args.id));
        },
    },
    Game: {
        Reviews: (parent) => {
            return db.reviews.filter((r) => r.game_id === parent.id);
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
