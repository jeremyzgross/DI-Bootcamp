import React, { useEffect } from 'react'

const SecondComponent = (props) => {
  const [data, setData] = React.useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const url = props.url
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
      try {
        const response = await fetch(url, options)
        const data = await response.json()
        console.log(data)
        setData(data)
      } catch (error) {
        throw new Error('Failed to get orders')
      }
    }
    fetchProducts()
  })
  return <code>{JSON.stringify(data, null, 2)}</code>
}

export default SecondComponent

// async function displayInventory() {
//   const url = 'http://localhost:3001/api/inventory'
//   const options = {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   }
//   try {
//     const response = await fetch(url, options)
//     const data = await response.json()
//     return data
//   } catch (error) {
//     throw new Error('Failed to get orders')
//   }
// }
