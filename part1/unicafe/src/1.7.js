import { useState } from 'react'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
)

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [total, setTotal] = useState(0)
    const [score, setScore] = useState(0)
    
    const handleGoodClick = () => {
        setGood(good+1)
        setTotal(total+1)
        setScore(score+1)
    }
    const handleNeutralClick = () => {
        setNeutral(neutral+1)
        setTotal(total+1)
    }
    const handleBadClick = () => {
        setBad(bad+1)
        setTotal(total+1)
        setScore(score-1)
    }

    return (
        <div>
          <h1>give feedback</h1>
          <Button handleClick={handleGoodClick} text="good" />
          <Button handleClick={handleNeutralClick} text="neutral" />
          <Button handleClick={handleBadClick} text="bad" />
          <h1>statistics</h1>
          <p>good {good}</p>
          <p>neutral {neutral}</p>
          <p>bad {bad}</p>
          <p>all {total}</p>
          <p>average {score / total}</p>
          <p>positive {good / total * 100}</p>
        </div>
    )
}

export default App
