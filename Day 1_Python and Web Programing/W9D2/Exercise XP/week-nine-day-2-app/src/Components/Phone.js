import React, { useState } from 'react'

const Phone = (props) => {
  const [brand, setBrand] = useState('Samsung')
  const [model, setModel] = useState('Galaxy S20')
  const [phoneColor, setPhoneColor] = useState('black')
  const [year, setYear] = useState('2020')

  const changeColor = () => {
    setPhoneColor('blue')
  }

  return (
    <React.Fragment>
      <h1> My Phone is a {brand}</h1>
      <p>
        It is a {phoneColor} {model} from {year}
      </p>
      <button onClick={changeColor}>Change Color</button>
    </React.Fragment>
  )
}

export default Phone
