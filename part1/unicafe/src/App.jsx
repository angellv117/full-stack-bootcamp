

import { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = ({ good, neutral, bad, total }) => {
  if (total == 0) {
    return (
      <div>
        <hr></hr>
        <h3>No feedback given</h3>
        <hr></hr>
      </div>
    )
  }
  return (
    <div>
      <hr></hr>
      <table>
        <tr>
          <td><h3>Statistics</h3></td>
          <td><h3>Value</h3></td>
        </tr>
        <tr>
          <td><StatisticLine text="Good" /></td>
          <td><StatisticLine value={good} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="Neutral" /></td>
          <td><StatisticLine value={neutral} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="Bad" /></td>
          <td><StatisticLine value={bad} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="Total" /></td>
          <td><StatisticLine value={total} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="Avarage" /></td>
          <td><StatisticLine value={(good - bad) / total} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="Postive" /></td>
          <td><StatisticLine value={(good * 100) / total} /></td>
        </tr>
      </table>



      <hr></hr>



    </div>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <p>{text} <strong>{value}</strong> </p>
  )

}


const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleClickGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(updatedGood + bad + neutral)

  }
  const handleClickNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotal(updatedNeutral + good + neutral)
  }
  const handleClickBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setTotal(updatedBad + good + neutral)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="Good :)" handleClick={handleClickGood}></Button>
      <Button text="Neutral :|" handleClick={handleClickNeutral}></Button>
      <Button text="Bad :(" handleClick={handleClickBad}></Button>
      <Statistics good={good} neutral={neutral} bad={bad} total={total}></Statistics>
    </div>
  )
}

export default App