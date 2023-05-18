
import { useState } from 'react'
import { FaThumbsUp, FaThumbsDown, FaRegMeh } from 'react-icons/fa'

const VotingSession = ({ session, isAdmin, onUpdate, onDelete, onStop }) => {
  const [votes, setVotes] = useState({
    yes: 0,
    no: 0,
    abstain: 0,
  })

  const handleClick = (option) => {
    setVotes({
      ...votes,
      [option]: votes[option] + 1,
    })
  }

  const totalVotes = Object.values(votes).reduce((acc, curr) => acc + curr, 0)
  const percentages = {
    yes: (votes.yes / totalVotes) * 100 || 0,
    no: (votes.no / totalVotes) * 100 || 0,
    abstain: (votes.abstain / totalVotes) * 100 || 0,
  }

  const handleUpdate = () => {
    onUpdate({
      ...session,
      votes,
    })
  }

  const handleDelete = () => {
    onDelete(session.id)
  }

  const handleStop = () => {
    onStop(session.id)
  }

  return (
    <div className="max-w-md mx-auto">
      {/* <h1 className="text-2xl font-bold mb-4">{session.title}</h1> */}
      <div className="mb-4">
        <p className="text-lg font-bold mb-2">Voting process:</p>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <FaThumbsUp className="text-green-500" />
            <p>Yes: vote in favor of the proposal</p>
          </div>
          <div className="flex items-center gap-2">
            <FaThumbsDown className="text-red-500" />
            <p>No: vote against the proposal</p>
          </div>
          {!isAdmin && (
            <div className="flex items-center gap-2">
              <FaRegMeh className="text-gray-500" />
              <p>Abstain: choose not to vote</p>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {/* {session.status === 'active' && ( */}
           {session === 'active' && (
          <>
            <button
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
              onClick={() => handleClick('yes')}
            >
              <FaThumbsUp className="mr-2" />
              Yes
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
              onClick={() => handleClick('no')}
            >
              <FaThumbsDown className="mr-2" />
              No
            </button>
            {!isAdmin && (
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
                onClick={() => handleClick('abstain')}
              >
                <FaRegMeh className="mr-2" />
                Abstain
              </button>
            )}
          </>
        )}
        {isAdmin && (
          <>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              onClick={handleUpdate}
            >
              Update
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
              onClick={handleDelete}
            >
              Delete
            </button>
            {/* {session.status === 'active' && ( */}
               {session === 'active' && (
              <button
                className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded"
                onClick={handleStop}
              >
                Stop
              </button>
            )}
          </>
        )}
      </div>
      <div className="mt-4">
        <p className="text-lg font-bold mb-2">Results:</p>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <FaThumbsUp className="text-green-500" />
            <p className="text-lg font-bold">
              {percentages.yes.toFixed(1)}% ({votes.yes} votes)
            </p>
          </div>
          <div className="flex items-center gap-1">


<FaThumbsDown className="text-red-500" />
            <p className="text-lg font-bold">
              {percentages.no.toFixed(1)}% ({votes.no} votes)
            </p>
          </div>
          <div className="flex items-center gap-1">
            <FaRegMeh className="text-gray-500" />
            <p className="text-lg font-bold">
              {percentages.abstain.toFixed(1)}% ({votes.abstain} votes)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VotingSession