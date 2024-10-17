export const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platform: [String!]!
        Reviews: [Review!]
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
        game: Game!
        author: Author!
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        Reviews: [Review!]
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