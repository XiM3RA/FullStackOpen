import { useState } from 'react'
import './App.css'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
)

const Statistics = (props) => {
    if (props.total === 0) {
        return (
            <p>No feedback given</p>
        )
    }
    return (
        <>
        <tr>
            <td>good</td>
            <td>{props.good}</td>
        </tr>
        <tr>
            <td>neutral</td>
            <td>{props.neutral}</td>
        </tr>
        <tr>
            <td>bad</td>
            <td>{props.bad}</td>
        </tr>
        <tr>
            <td>all</td>
            <td>{props.total}</td>
        </tr>
        <tr>
            <td>average </td>
            <td>{ props.score / props.total}</td>
        </tr>
        <tr>
            <td>positive </td>
            <td> {props.good / props.total * 100} %</td>
        </tr>
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
