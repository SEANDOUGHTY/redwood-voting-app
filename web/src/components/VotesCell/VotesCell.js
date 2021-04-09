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

export const Success = ({ count, allCount }) => {
  console.log(count)
  console.log(allCount)
  return (
    <div>
      <h2 className="temp-h2">
        {allCount > 0 ? Math.round((count / allCount) * 100) : 50}%
      </h2>
      <div className="temp-p">{count} Votes</div>
    </div>
  )
}
