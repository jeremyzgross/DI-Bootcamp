//if they have an order, show "view existing order button" and make an order
//if no order show make an order

window.sessionStorage.getItem('user')
const userData = JSON.parse(sessionStorage.getItem('user'))
const userToDisplay = userData.id
console.log(userToDisplay)

//DOM elements
const orderDivContainer = document.querySelector('.orders-div-container')
const showOrderContainer = document.querySelector('.show-order-container')
const showOrderBtn = document.querySelector('.show-order-btn')
const checkoutBtn = document.querySelector('.checkout-btn')
const newOrderBtn = document.querySelector('.make-order-btn')
const inventoryDiv = document.querySelector('.inventory-div')

window.addEventListener('load', async (event) => {
  event.preventDefault()
  try {
    const data = await displayNonShipped(userToDisplay)
    console.log(data)
    let newDiv = document.createElement('div')
    newDiv.className = 'order-info-div'
    if (Array.isArray(data) && data.length > 0) {
      data.forEach((order) => {
        let orderInfo = document.createElement('p')
        orderInfo.innerHTML = `Order ID: <strong>${order.id}</strong>,<br> Product Name: <strong>${order.product_name}</strong>, <br> Product Description: <strong>${order.description}</strong>`
        newDiv.appendChild(orderInfo)
      })
      orderDivContainer.appendChild(newDiv)
      displayShowOrdersButton() // Display the "Show Orders" button if there are orders
      displayCheckoutButton()
    } else {
      hideShowOrdersButton() // Hide the "Show Orders" button if there are no orders
    }
  } catch (error) {
    console.error('Error getting orders.', error)
  }
})

// Display the "Show Orders" button
const displayShowOrdersButton = () => {
  showOrderContainer.style.display = 'block'
}

// Hide the "Show Orders" button
const hideShowOrdersButton = () => {
  showOrderContainer.style.display = 'none'
}
const displayCheckoutButton = () => {
  let checkoutBtn = document.createElement('button')
  checkoutBtn.textContent = 'Checkout'
  checkoutBtn.className = 'checkout-btn'
  orderDivContainer.appendChild(checkoutBtn)
}

//show exisiting orders
showOrderBtn.addEventListener('click', (event) => {
  event.preventDefault(event)
  orderDivContainer.style.display = 'block'
})

//make a new order
// newOrderBtn.addEventListener('click', async (event) => {
//   event.preventDefault(event)
//   try {
//     const inventoryData = await displayInventory()
//     console.log('Inventory =>', inventoryData)

//     inventoryDiv.innerHTML = ''
//     inventoryData.forEach((product) => {
//       const productDiv = document.createElement('div')
//       productDiv.classList.add('product')

//       const productName = document.createElement('h3')
//       productName.textContent = product.product_name

//       const price = document.createElement('p')
//       price.textContent = 'Price: $' + product.price

//       const description = document.createElement('p')
//       description.textContent = 'Description: ' + product.description

//       const addItemToNewOrderBtn = document.createElement('button')
//       addItemToNewOrderBtn.classList.add('make-order-btn')
//       addItemToNewOrderBtn.textContent = 'Make Order'

//       productDiv.appendChild(productName)
//       productDiv.appendChild(price)
//       productDiv.appendChild(description)
//       productDiv.appendChild(addItemToNewOrderBtn)
//       inventoryDiv.appendChild(productDiv)

//       addItemToNewOrderBtn.addEventListener('click', async (event) => {
//         event.preventDefault(event)
//         try {
//           const data = await postNeworder(userToDisplay)
//           console.log('Order_id=>', data)
//         } catch (error) {
//           console.error('Error adding orders.', error)
//         }
//       })
//     })
//   } catch (error) {
//     console.error('Error getting inventory.', error)
//   }
// })

// Function to create product elements
const createProductElement = (product) => {
  const productDiv = document.createElement('div')
  productDiv.classList.add('product')

  const productName = document.createElement('h3')
  productName.textContent = product.product_name

  const price = document.createElement('p')
  price.textContent = 'Price: $' + product.price

  const description = document.createElement('p')
  description.textContent = 'Description: ' + product.description

  const addItemToNewOrderBtn = document.createElement('button')
  addItemToNewOrderBtn.classList.add('make-order-btn')
  addItemToNewOrderBtn.textContent = 'Make Order'

  productDiv.appendChild(productName)
  productDiv.appendChild(price)
  productDiv.appendChild(description)
  productDiv.appendChild(addItemToNewOrderBtn)

  return { productDiv, addItemToNewOrderBtn }
}

// Function to handle "Make Order" button click
const handleMakeOrderClick = async (userToDisplay) => {
  try {
    const data = await postNeworder(userToDisplay)
    console.log('Order_id=>', data)
  } catch (error) {
    console.error('Error adding orders.', error)
  }
}

// Event listener for "New Order" button click
newOrderBtn.addEventListener('click', async (event) => {
  event.preventDefault()
  try {
    const inventoryData = await displayInventory()
    console.log('Inventory =>', inventoryData)

    inventoryDiv.innerHTML = ''
    inventoryData.forEach((product) => {
      const { productDiv, addItemToNewOrderBtn } = createProductElement(product)
      inventoryDiv.appendChild(productDiv)

      addItemToNewOrderBtn.addEventListener('click', async (event) => {
        event.preventDefault()
        await handleMakeOrderClick(userToDisplay)
      })
    })
  } catch (error) {
    console.error('Error getting inventory.', error)
  }
})

//API Calls
//GET nonshipped order
async function displayNonShipped(userToDisplay) {
  const url = `http://localhost:3001/api/orders/${userToDisplay}`
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }
  try {
    const response = await fetch(url, options)
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error('Failed to get orders')
  }
}

//GET inventory

async function displayInventory() {
  const url = 'http://localhost:3001/api/inventory'
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }
  try {
    const response = await fetch(url, options)
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error('Failed to get orders')
  }
}

//makes new order
async function postNeworder(userToDisplay) {
  const url = `http://localhost:3001/api/orders/${userToDisplay}`
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  }
  try {
    const response = await fetch(url, options)
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error('Failed to post new order')
  }
}

//add inventory item to orders_invetory

// async function addToOrderInvetory()
