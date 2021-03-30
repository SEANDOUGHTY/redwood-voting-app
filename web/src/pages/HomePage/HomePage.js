import { useMutation } from '@redwoodjs/web'
import VotesCell from 'src/components/VotesCell'

const CREATE_VOTE_MUTATION = gql`
  mutation CreateVoteMutation($input: CreateVoteInput!) {
    createVote(input: $input) {
      id
    }
  }
`

const HomePage = () => {
  const [createVote] = useMutation(CREATE_VOTE_MUTATION, {
    onCompleted: () => {
      location.reload()
    },
  })

  const onSave = (choice) => {
    const input = {
      choice: choice,
      dateTime: new Date(),
    }
    createVote({ variables: { input } })
  }

  return (
    <>
      <h1>Sample Voting App</h1>

      <div className="voteBox voteLeft">
        <h3>Dogs</h3>
        <VotesCell type="Dog" />
        <button
          onClick={() => {
            onSave('Dog')
          }}
        >
          Vote!
        </button>
      </div>
      <div className="voteBox voteRight">
        <h3>Cats</h3>
        <VotesCell type="Cat" />
        <button
          onClick={() => {
            onSave('Cat')
          }}
        >
          Vote!
        </button>
      </div>
    </>
  )
}

export default HomePage
