import { useState } from 'react'

const Button = (props) => {
  const {onHandleClick, children} = props;
  return (
    <button onClick={onHandleClick}>{children}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

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
        <Button onHandleClick={handleGood}>good</Button>
        <Button onHandleClick={handleNeutral}>neutral</Button>
        <Button onHandleClick={handleBad}>bad</Button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

const Statistics = (props) => {
  const {good, neutral, bad} = props;

  const totalReponse = good + neutral + bad;
  const average = (good + (bad * -1)) / totalReponse;
  const positiveAverage = ((good) / totalReponse) * 100;

  if (totalReponse == 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <>
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="total" value={totalReponse}/>
      <StatisticLine text="average" value={average}/>
      <StatisticLine text="positive" value={positiveAverage}/>
    </>
  )
}

const StatisticLine = (props)=> {
  const {text, value} = props;
  return (
    <>
      <p>{text} {value}</p>
    </>
  )
}

export default App