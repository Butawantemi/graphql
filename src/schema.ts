export const typeDefs = `#graphql
    type Games {
        id: ID!
        title: String!
        platform: [String!]!
    }
    type Reviews {
        id: ID!
        rating: Int!
        content: String!
    }
    type Authors {
        id: ID!
        name: String!
        verified: Boolean!
    }

    type Query {
        reviews: [Reviews]
        Games: [Games]
        Authors: [Authors]
    }
`