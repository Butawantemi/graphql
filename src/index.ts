import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { title } from 'process';


const typeDefs = `#graphql
    type Book {
        title: String,
        author: String
    }

    type Query {
        books: [Book]}
`;

// Data Set
const books = [
    {
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling'
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton'
    },
    {
        title: 'The Da Vinci Code',
        author: 'Dan Brown'
    }
];


// Resolvers
const resolvers = {
    Query:  {
        books: () => books,
    }
}

// Apollo Server 
const server = new ApolloServer({
    typeDefs,
    resolvers
});