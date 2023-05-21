import Course from './components/Course';

const App = () => {
  const course = {
    name: 'Half Stack application development',
  parts : [
    {
    name: 'Fundamentals of React',
    exercises : 10,
    id: 1
  },
   {
    name: 'Using props to pass data',
    exercises : 7,
    id: 2
  },
   {
    name: 'State of a component',
    exercises : 14,
    id: 3
  }]
}


  return (
    <div>
      <Course course={course} />
    </div>
  )
}

const Total = ({parts: [part1, part2, part3]}) => {
      const sum = part1.exercises + part2.exercises + part3.exercises;
      return <p>Number of exercises {sum}</p>
}
export default App
