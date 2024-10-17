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
        reviews: [Review]
        review(id: ID!): Review
        games: [Game]
        game(id: ID!): Game
        authors: [Author]
        author(id: ID!): Author
    }
    type Mutation {
        addGame(game: GameInput!): Game
        deleteGame(id: ID!): [Game]
        updateGame(id: ID!, game: EditGameInput!): Game
    }

    input GameInput {
        title: String!
        platform: [String!]!
    }

    input EditGameInput {
        title: String
        platform: [String!]
    }
`