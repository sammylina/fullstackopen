
const Total = ({parts}) => {
      const sum = parts.reduce((s, {exercises}) => s + exercises , 0);
      return <p>Number of exercises {sum}</p>
}

export default Total;
