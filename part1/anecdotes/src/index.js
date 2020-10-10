import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => <h1> {props.text} </h1>
const Button = (props) => <button onClick={props.handleClick}> {props.text} </button>
const Anecdote = (props) => {
  return(
    <div> 
      <div> {props.text} </div>
      <div> has {props.votes} votes </div>
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(6).fill(0))
  const [mostVotes, setMostVotes] = useState(0)

  const vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)

    const mostVotesIndex = copy.findIndex(k => k === Math.max(...copy))
    setMostVotes(mostVotesIndex)
  }

  const next = () => setSelected(Math.floor(Math.random() * 6))

  return (
    <div>
      <Header text="Anecdote of the day" />
      <Anecdote text={anecdotes[selected]} votes={votes[selected]} />
      <Button handleClick={vote} text="vote" />
      <Button handleClick={next} text="next anecdote" />
      <Header text="Anecdote with most votes" />
      <Anecdote text={anecdotes[mostVotes]} votes={votes[mostVotes]} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)