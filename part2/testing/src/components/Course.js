import React from 'react'

const Header = ({ course, key }) => {
    return (
        <h2>{course.name}</h2>
    )
}

const Total = ({ course }) => {
    const sum = course.parts.reduce((partialSum, a) => partialSum + a.exercises, 0)

    return (
        <p><strong>total of {sum} exercises</strong></p>
    )
}

const Line = ( props ) => {
    return (
        <p>
        {props.part.name} {props.part.exercises}
        </p>    
    )
}

const Body = ({ course }) => {
    return (
        <>
        {course.parts.map((part) => 
            <Line part={part} key={part.id} />
        )
        }
        </>
    )
}


const Course = ({ course }) => {
    return (
        <>
        <Header course={course} />
        <Body course={course} />
        <Total course={course} />
        </>
    )
}

export default Course
