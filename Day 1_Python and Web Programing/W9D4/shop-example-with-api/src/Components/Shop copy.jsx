import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'


const Shop = (props) =>{
  const [products, setProducts] = useState([])
  const [formData, setFormData] = useState({
    product_name: '',
    price:'',
    description:''
  })
  useEffect(()=>{
    getAll()
  }, [])

  const handleSubmit = async(event) =>{
    event.preventDefault()
    const getAll = async() =>{
    try{
      const res = await fetch('http://localhost:3001/api/inventory')
      const data = await res.json()
      console.log(data);
      setProducts(data)
    }catch(error){
      console.log(error);

    }
  }
    
  }
//  const handleSubmit = async (event) => {
//     event.preventDefault();

//     const formData = new FormData(event.target);
//     const itemsData = {    
//       product_name: formData.get('product_name'),
//       price: formData.get('price'),
//       description: formData.get('description')
//     };

//     try {
//       await addProduct(itemsData);
//       // Refresh product list after adding
//       getAll();
//     } catch (error) {
//       console.error('Error adding product:', error);
//       // Handle error
//     }
//   };
  const getAll = async() =>{
    try{
      const res = await fetch('http://localhost:3001/api/inventory')
      const data = await res.json()
      console.log(data);
      setProducts(data)
    }catch(error){
      console.log(error);

    }
  }


const addProduct = async (itemsData) => {
  const url = 'http://localhost:3001/api/inventory';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ itemsData })
  };

  try {
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
  return(
    <>
    <h2>Shop</h2>
    <h4>Add Product</h4>
    <form onSubmit={handleSubmit}>
      <input onChange={(event)=> (event.target.value)}name='product_name' placeholder='Product name...' />
      <br />
      <input  onChange={(event)=> (event.target.value)}name='price' placeholder='Product price...' />
      <br />
      <input name='description' placeholder='Description...' />
      <br />
      <input  onChange={(event)=> (event.target.value)}type="submit" value='Add Product' />
    </form>
    <div>
      <h1>Products</h1>
      {
        products.map(item=>{
          return(
            <div key={item.id} style={{border: "1px solid black"}}>
              {item.product_name}
              <Link to={`/${item.id}`}> Buy!</Link>
            </div>
          )
        })
      }

      </div>

    </>
  )
}

export default Shop