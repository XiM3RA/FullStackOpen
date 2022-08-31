import { useState } from 'react'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
)

const Statistics = (props) => {
    return (
        <>
        <p>good {props.good}</p>
        <p>neutral {props.neutral}</p>
        <p>bad {props.bad}</p>
        <p>all {props.total}</p>
        <p>average {props.score / props.total}</p>
        <p>positive {props.good / props.total * 100}</p>
        </>
    )
}

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
          <Statistics good={good} neutral={neutral} bad={bad}
                      total={total} score={score} />
        </div>
    )
}

export default App
