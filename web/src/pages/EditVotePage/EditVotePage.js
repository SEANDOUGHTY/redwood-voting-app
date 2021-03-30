import VotesLayout from 'src/layouts/VotesLayout'
import EditVoteCell from 'src/components/EditVoteCell'

const EditVotePage = ({ id }) => {
  return (
    <VotesLayout>
      <EditVoteCell id={id} />
    </VotesLayout>
  )
}

export default EditVotePage
