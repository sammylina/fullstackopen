import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const noFeedback = (good == 0 )&& (neutral == 0) && (bad == 0);

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  
  const handleBad = () => {
    setBad(bad + 1)
  }
  return (
    <div>
      <div>
        <button onClick={handleGood}>good</button>
        <button onClick={handleNeutral}>neutral</button>
        <button onClick={handleBad}>bad</button>
      </div>
      <h3>Statistics</h3>
      {noFeedback ? 
        <p>No feedback given</p> :
        <Statistics good={good} neutral={neutral} bad={bad}/>
      }
    </div>
  )
}

const Statistics = (props) => {
  const {good, neutral, bad} = props;

  const totalReponse = good + neutral + bad;
  const average = (good + (bad * -1)) / totalReponse;
  const positiveAverage = ((good) / totalReponse) * 100;

  return (
    <>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {totalReponse}</p>
      <p>average {average}</p>
      <p>positive {positiveAverage} %</p>
    </>
  )
}

export default App