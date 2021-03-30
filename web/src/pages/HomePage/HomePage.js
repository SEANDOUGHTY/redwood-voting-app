import VoteCell from 'src/components/VoteCell'

const HomePage = () => {
  return (
    <>
      <h1>Sample Voting App</h1>

      <div className="voteBox voteLeft">
        <h3>Dogs</h3>
        <VoteCell type="Dog" />
        <button>Vote!</button>
      </div>
      <div className="voteBox voteRight">
        <h3>Cats</h3>
        <p>0 Votes (50%)</p>
        <button>Vote!</button>
      </div>
    </>
  )
}

export default HomePage
