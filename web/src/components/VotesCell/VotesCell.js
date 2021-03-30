import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query VOTES {
    votes {
      choice
    }
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

export const Success = ({ votes }) => {
  return JSON.stringify(votes)
}
