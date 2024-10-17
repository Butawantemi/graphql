export const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platform: [String!]!
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
    }

    type Query {
        Reviews: [Review]
        Review(id: ID!): Review
        Games: [Game]
        Game(id: ID!): Game
        Authors: [Author]
        Author(id: ID!): Author
    }
`