const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    course: 'Fundamentals of React',
    exercises : 10
  }
  const part2 = {
    course: 'Using props to pass data',
    exercises : 7
  }
  const part3 = {
    course: 'State of a component',
    exercises : 14
  }

  const sum = part1.exercises + part2.exercises + part3.exercises;

  return (
    <div>
      <Header course={course}/>
      <Content parts={[part1, part2, part3]}/>
      <Total sum={sum}/>
    </div>
  )
}

const Header = ({course}) => (
      <h1>{course}</h1>
)

const Content = ({parts: [first, part2, part3]}) => {
    return (<>
      <Part part={first}/>
      <Part part={part2}/>
      <Part part={part3}/>
    </>
    )
}

const Part = ({part}) => {
      return (<p>
        {part.course} {part.exercises}
      </p>)
}
const Total = ({sum}) => (
      <p>Number of exercises {sum}</p>
)
export default App