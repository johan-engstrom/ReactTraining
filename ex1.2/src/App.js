
const App = () => {
  const course = {
    name: 'Half Stack application development',
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
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

const Header = (props) => {
  console.log("Header ")
  console.log(props)
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  console.log("Content ")
  console.log(props)

  let i = 0
  const content=[]

  props.parts.forEach(part => {
    content.push(<Part key={i++} {...part}/>)
  });

  return (
    <div>
      {content}
    </div>
  )
}

const Total = (props) => {
  console.log("Total ")
  console.log(props)
  let sum = 0
  props.parts.forEach(part => {
    sum += part.exercises
  });
  return (
    <>
      <p>Number of exercises {sum}</p>
    </>    
  )
}

const Part = ({name, exercises}) => {
  console.log("Part")
  console.log(name, exercises)
  return (
    <>
      <p>{name} {exercises}</p>
    </>
  )
}

export default App;
