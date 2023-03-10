const { gql } = require("apollo-server");
const typeDefs = gql`
  type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
    tracksForHomeFetch: [Track!]!
    track(id: ID!): Track
  }
  type Mutation {
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse
  }
  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "The track's title"
    title: String!
    "The track's main author"
    author: Author!
    "The track's main illustration to display in track card or track page detail"
    thumbnail: String
    "The track's full duration, in seconds"
    durationInSeconds: Int
    "The number of modules this track contains"
    modulesCount: Int
    description: String
    numberOfViews: Int
    "The track's complete array of Modules"
    modules: [Module!]!
  }

  "A Module is a single unit of teaching. Multiple Modules compose a Track"
  type Module {
    id: ID!
    "The Module's title"
    title: String!
    "The module's video duration, in seconds"
    durationInSeconds: Int
  }

  "Author of a complete Track"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture url"
    photo: String
  }

  type IncrementTrackViewsResponse {
    "Similar to HTTP status code, represents the status of the mutation"
    code: Int!
    "Indicates whether the mutation was successful"
    success: Boolean!
    "Human-readable message for the UI"
    message: String!
    "Newly updated track after a successful mutation"
    track: Track
  }
`;

module.exports = typeDefs;
