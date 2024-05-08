import { useState, useEffect } from 'react'
import {useParams, Link, useNavigate} from 'react-router-dom'
const Product = (props) =>{
  const [product, setProduct] = useState([])
  const params = useParams()
  const [navigate] = useNavigate()
  
  useEffect(()=>{
    info()

  },[])

  const back = ()=>{
    navigate('/') //will happen automatically
  }
  const info = async()=>{
    try{
      const res = await fetch(`'http://localhost:3001/api/inventory/${params.id}`) //need to make route to get individual invetory in API
      const data = await res.json()
      setProduct(data)

    }catch(error){
      console.log(error);
      navigate('/')
    }
  }
  return(
    <>
    <h2>Product</h2>
    {
      product.map((item)=>{
        return(
        <div>
          <h2>
            {item.product_name}
            {item.price}
          </h2>
          <Link to={'/'}>continue shopping</Link>
        </div>)
      })
    }
    <button onClick={()=> back()}>Back to Home</button>
    </>
  )
}

export default Product