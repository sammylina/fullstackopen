
const Total = ({parts}) => {
      const sum = parts.reduce((s, {exercises}) => s + exercises , 0);
      return <p><b>total of {sum} exercises</b></p>
}

export default Total;
