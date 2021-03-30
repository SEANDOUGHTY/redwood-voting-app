import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/VotesCell'

const DELETE_VOTE_MUTATION = gql`
  mutation DeleteVoteMutation($id: Int!) {
    deleteVote(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const VotesList = ({ votes }) => {
  const [deleteVote] = useMutation(DELETE_VOTE_MUTATION, {
    onCompleted: () => {
      toast.success('Vote deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete vote ' + id + '?')) {
      deleteVote({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Choice</th>
            <th>Date time</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {votes.map((vote) => (
            <tr key={vote.id}>
              <td>{truncate(vote.id)}</td>
              <td>{truncate(vote.choice)}</td>
              <td>{timeTag(vote.dateTime)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.vote({ id: vote.id })}
                    title={'Show vote ' + vote.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editVote({ id: vote.id })}
                    title={'Edit vote ' + vote.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete vote ' + vote.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(vote.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default VotesList
