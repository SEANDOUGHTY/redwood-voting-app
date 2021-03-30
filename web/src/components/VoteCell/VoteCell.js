import Vote from 'src/components/Vote'

export const QUERY = gql`
  query FIND_VOTE_BY_ID($id: Int!) {
    vote: vote(id: $id) {
      id
      choice
      dateTime
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Vote not found</div>

export const Success = ({ vote }) => {
  return <Vote vote={vote} />
}
