import VotesLayout from 'src/layouts/VotesLayout'
import VoteCell from 'src/components/VoteCell'

const VotePage = ({ id }) => {
  return (
    <VotesLayout>
      <VoteCell id={id} />
    </VotesLayout>
  )
}

export default VotePage
