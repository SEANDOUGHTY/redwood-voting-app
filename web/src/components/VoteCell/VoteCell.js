export const beforeQuery = (props) => {
  console.log(props)
  return { variables: props, fetchPolicy: 'network-only' }
}

export const QUERY = gql`
  query VoteQuery {
    votes{filter: {vote: dog}} {
      vote
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ votes }) => {
  console.log(votes.length)

  const dogVotes = votes.filter(function (el) {
    return el.vote == 'Dog'
  })
  console.log(dogVotes.length)

  return (
    <p>
      {dogVotes.length} Votes ({(dogVotes.length / votes.length) * 100}%)
    </p>
  )
}
