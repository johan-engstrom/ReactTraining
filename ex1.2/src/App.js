
  const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
    
    return (
      <div>
      <Header course={course}/>
      <Content part={[part1,part2,part3]} exercises={[exercises1,exercises2,exercises3]}/>
      <Total exercises={[exercises1,exercises2,exercises3]}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  const content=[]

  for (let index = 0; index < props.part.length; index++) {
    const part_description = props.part[index]
    const exercises_number = props.exercises[index]
    
    content.push(<Part key={index} part_description={part_description} exercises_number={exercises_number} />)
  }

  return (
    <div>
      {content}
    </div>
  )
}

const Total = (props) => {
  let arr = props.exercises
  const sum = arr.reduce((result,number)=> result+number)
  
  return (
    <><p>Number of exercises {sum}</p></>    
  )
}

const Part = ({part_description, exercises_number}) => {
  console.log(part_description, exercises_number)
  return (
    <>
      <p>{part_description} {exercises_number}</p>
    </>
  )
}

export default App;
