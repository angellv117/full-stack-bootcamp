const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )

}

const Content = (props) => {
  return (
    <>
      <h3>Contenido del curso</h3>
      <Part part={props.parts[0].name} ejercicios={props.parts[0].exercises} num={1}></Part>
      <Part part={props.parts[1].name} ejercicios={props.parts[1].exercises} num={2}></Part>
      <Part part={props.parts[2].name} ejercicios={props.parts[2].exercises} num={3}></Part>

    </>
  )
}

const Part = (props) => {
  return (
    <p>{props.num}. {props.part} total de ejercicios: {props.exercises}</p>
  )

}


const Total = (props) => {
  return (
    <p> Total de ejercicios: <strong>{props.total}</strong></p>
  )
}

const App = () => {
  const course = {
    course: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  }

  return (
    <div>
      <Header course={course.course} />
      <Content parts={course.parts} />
      <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

export default App
