import Garage from './Garage'

const Car = (props) => {
  const model = props.model
  return (
    <div>
      {props.model} who lives in my <Garage size={'small'} />
      garage
    </div>
  )
}

export default Car
