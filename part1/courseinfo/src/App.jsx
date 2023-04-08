const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const sum = exercises1 + exercises2 + exercises3;

  return (
    <div>
      <Header course={course}/>
      <Content part_arr={[part1, part2, part3]} exercises_arr={[exercises1, exercises2, exercises3]}/>
      <Total sum={sum}/>
    </div>
  )
}

const Header = ({course}) => (
      <h1>{course}</h1>
)

const Content = ({part_arr, exercises_arr}) => (
    <>
      <Part part={part_arr[0]} exercises={exercises_arr[0]}/>
      <Part part={part_arr[1]} exercises={exercises_arr[1]}/>
      <Part part={part_arr[2]} exercises={exercises_arr[2]}/>
    </>
)

const Part = ({part, exercises}) => (
      <p>
        {part} {exercises}
      </p>
)
const Total = ({sum}) => (
      <p>Number of exercises {sum}</p>
)
export default App