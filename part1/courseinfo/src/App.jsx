const App = () => {
  const course = {
    name: 'Half Stack application development',
  parts : [
    {
    title: 'Fundamentals of React',
    exercises : 10
  },
   {
    title: 'Using props to pass data',
    exercises : 7
  },
   {
    title: 'State of a component',
    exercises : 14
  }]
}


  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

const Header = ({course}) => (
      <h1>{course}</h1>
)

const Content = ({parts: [part1, part2, part3]}) => {
    return (<>
      <Part part={part1}/>
      <Part part={part2}/>
      <Part part={part3}/>
    </>
    )
}

const Part = ({part}) => {
      return (<p>
        {part.title} {part.exercises}
      </p>)
}
const Total = ({parts: [part1, part2, part3]}) => {
      const sum = part1.exercises + part2.exercises + part3.exercises;
      return <p>Number of exercises {sum}</p>
}
export default App