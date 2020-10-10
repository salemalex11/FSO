import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => <h1> {props.text} </h1>
const Button = (props) => <button onClick={props.handleClick}> {props.text} </button>

const Statistic = (props) => {
  return(
    <tr> 
      <td>{props.text}</td> 
      <td>{props.value}</td> 
    </tr>
  )
}

const Statistics = (props) => {
  if (props.all > 0) {
    return( 
      <table>
        <tbody>
          <Statistic text="good" value={props.good} />
          <Statistic text="neutral" value={props.neutral} />
          <Statistic text="bad" value={props.bad} />
          <Statistic text="all" value={props.all} />
          <Statistic text="average" value={props.good - props.bad} />
          <Statistic text="positive" value={props.good / props.all + " %"} />
        </tbody>
      </table>
    )
  }
  return(<div>No feedback given</div>)
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => setGood(good + 1)
  const addNeutral = () => setNeutral(neutral + 1)
  const addBad = () => setBad(bad + 1)

  return (
    <div>
      <Header text="give feedback" />
      <Button handleClick={addGood} text="good" />
      <Button handleClick={addNeutral} text="neutral" />
      <Button handleClick={addBad} text="bad" />
      <Header text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} all={good + neutral + bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)