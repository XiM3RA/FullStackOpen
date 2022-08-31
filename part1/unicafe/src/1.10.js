import { useState } from 'react'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
)

const StatisticLine = (props) => {
    if (props.text === "all" && props.value === 0) {
        return (
            <p>No feedback given</p>
        )
    }
    if (props.text === "average" && props.value === 0) {
        return (
            null
        )
    }
    else if (props.text === "average") {
        return (
            <p>average {props.value / props.total}</p>
        )
    }
    if (props.text === "positive" && props.value === 0) {
        return (
            null
        )
    }
    else if (props.text === "positive") {
        return (
            <p>positive {props.value / props.total * 100}</p>
        )
    }

    return (
        <p>{props.text} {props.value}</p>
    )
}

const Statistics = (props) => {
    if (props.total === 0) {
        return (
            <p>No feedback given</p>
        )
    }
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
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={score} total={total} />
        <StatisticLine text="positive" value={good} total={total} />
        </div>
    )
}

export default App
