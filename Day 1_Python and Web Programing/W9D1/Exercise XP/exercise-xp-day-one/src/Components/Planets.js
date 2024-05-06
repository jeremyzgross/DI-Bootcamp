const Planets = (props) => {
  const myPlanets = props.myPlanets //the planets list will be pasted into 'props' and then getting list from the props
  return myPlanets.map((planet, i) => <li key={i}>{planet}</li>)
}

export default Planets
