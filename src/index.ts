import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// Data
import db from './db.js';

// TypeDefs
import  { typeDefs } from './schema.js';


// Resolvers
const resolvers = {
    Query:  {
        games: () => db.games,
        game: (_: any, args: { id: string; }) => {
            return db.games.find(game => game.id === Number(args.id));
        },
        authors: () => db.authors,
        author: (_: any, args: { id: string; }) => {
            return db.authors.find(author => author.id === Number(args.id));
        },
        reviews: () => db.reviews,
        review: (_: any, args: { id: string; }) => {
            return db.reviews.find(review => review.id === Number(args.id));
        },
    },
    Game: {
        Reviews: (parent: any) => {
            return db.reviews.filter((r) => r.game_id === parent.id)
        }
    },
    Author: {
        Reviews: (parent: any) => {
            return db.reviews.filter((r) => r.author_id === parent.id)
        }
    },
    Review: {
        author: (parent: any) => {
            return db.authors.find((a) => a.id === parent.author_id)
        },
        game: (parent: any) => {
            return db.games.find((g) => g.id === parent.game_id) 
        }
    },
    Mutation: {
        deleteGame: (_: any, args: { id: number } ) => {
           db.games = db.games.filter((t) => t.id !== args.id);
           return db.games
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