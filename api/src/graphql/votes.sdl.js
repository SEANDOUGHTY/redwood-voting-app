export const schema = gql`
  type Vote {
    id: Int!
    vote: String!
    dateTime: DateTime!
  }

  type Query {
    votes: [Vote!]!
  }

  input CreateVoteInput {
    vote: String!
    dateTime: DateTime!
  }

  input UpdateVoteInput {
    vote: String
    dateTime: DateTime
  }
`
