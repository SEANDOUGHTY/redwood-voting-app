import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/VotesCell'

const DELETE_VOTE_MUTATION = gql`
  mutation DeleteVoteMutation($id: Int!) {
    deleteVote(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Vote = ({ vote }) => {
  const [deleteVote] = useMutation(DELETE_VOTE_MUTATION, {
    onCompleted: () => {
      toast.success('Vote deleted')
      navigate(routes.votes())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete vote ' + id + '?')) {
      deleteVote({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Vote {vote.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{vote.id}</td>
            </tr>
            <tr>
              <th>Choice</th>
              <td>{vote.choice}</td>
            </tr>
            <tr>
              <th>Date time</th>
              <td>{timeTag(vote.dateTime)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editVote({ id: vote.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(vote.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Vote
