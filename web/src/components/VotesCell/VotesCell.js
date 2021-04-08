import { Link, routes } from '@redwoodjs/router'

export const beforeQuery = (props) => {
  return {
    variables: props,
    fetchPolicy: 'no-cache',
    pollInterval: 1000,
  }
}

export const QUERY = gql`
  query VOTE($type: String) {
    count: voteCount(choice: $type)
    allCount: totalVotes
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No votes yet. '}
      <Link to={routes.newVote()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ count, allCount }) => {
  return (
    <p>
      {count} Votes! ({((count / allCount) * 100).toFixed(1)}%)
    </p>
  )
}
