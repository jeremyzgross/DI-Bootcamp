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

// window.addEventListener('load', async (event) => {
//   event.preventDefault()
//   try {
//     const data = await displayNonShipped(userToDisplay)
//     console.log(data)
//     let newDiv = document.createElement('div')
//     newDiv.className = 'order-info-div'
//     if (Array.isArray(data) && data.length > 0) {
//       data.forEach((order) => {
//         let orderInfo = document.createElement('p')
//         orderInfo.innerHTML = `Order ID: <strong>${order.id}</strong>,<br> Product Name: <strong>${order.product_name}</strong>, <br> Product Description: <strong>${order.description}</strong>`
//         newDiv.appendChild(orderInfo)
//       })
//       orderDivContainer.appendChild(newDiv)
//       displayShowOrdersButton() // Display the "Show Orders" button if there are orders
//       displayCheckoutButton()
//     } else {
//       hideShowOrdersButton() // Hide the "Show Orders" button if there are no orders
//     }
//   } catch (error) {
//     console.error('Error getting orders.', error)
//   }
// })

// Display the "Show Orders" button
async function loadOrders() {
  try {
    const data = await displayNonShipped(userToDisplay)
    console.log(data)
    orderDivContainer.innerHTML = ''
    let newDiv = document.createElement('div')
    newDiv.className = 'order-info-div'
    if (Array.isArray(data) && data.length > 0) {
      data.forEach((order) => {
        let orderInfo = document.createElement('p')
        orderInfo.innerHTML = `Inventory ID: <strong>${order.id}</strong>,<br> Product Name: <strong>${order.product_name}</strong>, <br> Product Description: <strong>${order.description}</strong>`
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
}

window.addEventListener('load', async (event) => {
  event.preventDefault()
  await loadOrders()
})
let ordersVisible = false

showOrderBtn.addEventListener('click', async (event) => {
  event.preventDefault()

  if (!ordersVisible) {
    await loadOrders()
    orderDivContainer.style.display = 'block'
    showOrderBtn.textContent = 'Hide Orders'
    ordersVisible = true
  } else {
    showOrderBtn.textContent = 'Show Orders'
    orderDivContainer.style.display = 'none'
    ordersVisible = false
  }
})
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
  addItemToNewOrderBtn.id = product.id
  addItemToNewOrderBtn.textContent = 'Make Order'

  productDiv.appendChild(productName)
  productDiv.appendChild(price)
  productDiv.appendChild(description)
  productDiv.appendChild(addItemToNewOrderBtn)

  return { productDiv, addItemToNewOrderBtn }
}
// Event listener for "New Order" button click
let inventoryVisible = false
newOrderBtn.addEventListener('click', async (event) => {
  event.preventDefault()

  if (!inventoryVisible) {
    try {
      // Make new order and make new id
      orderId = await postNeworder(userToDisplay)

      // Display inventory
      const inventoryData = await displayInventory()
      console.log('Inventory =>', inventoryData)

      inventoryDiv.innerHTML = ''
      inventoryData.forEach((product) => {
        const { productDiv, addItemToNewOrderBtn } =
          createProductElement(product)
        inventoryDiv.appendChild(productDiv)

        addItemToNewOrderBtn.addEventListener('click', async (event) => {
          event.preventDefault()
          const inventoryId = event.target.id
          console.log('order id =>', orderId.id)
          console.log('inventory item id =>', inventoryId)
          await addItemsToOrder(orderId.id, inventoryId)
          await displayNonShipped(userToDisplay)
          await loadOrders()
        })
      })
    } catch (error) {
      console.error('Error getting inventory.', error)
    }

    inventoryDiv.style.display = 'block'
    inventoryVisible = true
  } else {
    inventoryDiv.style.display = 'none'
    inventoryVisible = false
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

//makes new order POST orders
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

//add inventory item to orders_invetory.  POST ordersinventory

async function addItemsToOrder(orderId, inventoryId) {
  const url = 'http://localhost:3001/api/ordersinventory'
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      order_id: orderId,
      product_id: inventoryId,
    }),
  }
  try {
    const res = await fetch(url, options)
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
