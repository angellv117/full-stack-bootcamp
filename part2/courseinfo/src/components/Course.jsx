import React from 'react'

const Header = ({name}) => {
    return (
        <h1>{name}</h1>
    )

}

const Content = ({parts}) => {
    
    return (
        <>
            <h3>Contenido del curso</h3>
            {
                parts.map(part => <Part key={part.id} part={part.name} exercises={part.exercises} num={part.id}></Part>)
            }
        </>
    )
}

const Part = (props) => {
    return (
        <p>{props.num}. {props.part} total de ejercicios: {props.exercises}</p>
    )

}


const Total = (props) => {
    const array = Object.values(props.total)
    const sum = array.reduce(
        (accumulator, currentValue) => accumulator + currentValue.exercises,
        0,
        )
    return (
        <p> Total de ejercicios: <strong>{sum}</strong> </p>
    )
}


function Course({course}) {
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total total={course.parts} />
        </div>
    )
}

export default Course