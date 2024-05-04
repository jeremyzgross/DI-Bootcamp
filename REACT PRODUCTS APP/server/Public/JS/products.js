window.sessionStorage.getItem('user')
const userData = JSON.parse(sessionStorage.getItem('user'))
const userToDisplay = userData.id
console.log(userToDisplay)

//DOM elements
const orderDivContainer = document.querySelector('.orders-div-container') //Space for orders to display
const newOrderBtn = document.querySelector('.make-order-btn')
const inventoryDiv = document.querySelector('.inventory-div') //Space to show current inventory after "new order"

// Displays unshipped orders if there are any
async function loadOrders() {
  try {
    const data = await displayNonShipped(userToDisplay) //GETs unshipped orders
    console.log(data)
    orderDivContainer.innerHTML = '' //ensures that the div is empty before displaying
    let newDiv = document.createElement('div') //creates subdiv for orders
    newDiv.className = 'order-info-div'
    if (Array.isArray(data) && data.length > 0) {
      //if the GET unshipped orders returns order:
      let heading = document.createElement('h2') //creates heading for current orders
      heading.textContent = 'Your Current Order'
      newDiv.appendChild(heading) //adds to subdiv
      data.forEach((order) => {
        //array method to loop through each item
        let orderInfo = document.createElement('p') //Unshipped orders creates DOM elements
        orderInfo.innerHTML = `Inventory ID: <strong>${order.id}</strong>,<br> Product Name: <strong>${order.product_name}</strong>, <br> Product Description: <strong>${order.description}</strong>`
        newDiv.appendChild(orderInfo) //appends to a new div
      })
      orderDivContainer.appendChild(newDiv) //heading appends to order div
      hideNewOrdersButton() //if there is an unshipped order, prevents user from making additional order
      displayCheckoutButton() //checkout button to ship order
    }
  } catch (error) {
    console.error('Error getting orders.', error)
  }
}

//on page load, this will initiate a GET on existing orders that have not been shipped
window.addEventListener('load', async (event) => {
  event.preventDefault()
  await loadOrders()
})

//Handler function for loadOrders if an unshipped order is found preventing user from making new order if they have an existing one
const hideNewOrdersButton = () => {
  newOrderBtn.style.display = 'none'
}
//When called display checkout button and event handler if clicked
const displayCheckoutButton = () => {
  let checkoutBtn = document.createElement('button')
  checkoutBtn.textContent = 'Checkout'
  checkoutBtn.className = 'checkout-btn'
  orderDivContainer.appendChild(checkoutBtn)
  //checkout function active once btn is there
  checkoutBtn.addEventListener('click', async (event) => {
    //clicked will PUT request and change order to ship leaded to checkout page
    await shipOrder(userToDisplay)
    window.location.href = '../checkout.html'
  })
}

//DOM invetory
const createProductElement = (product) => {
  //'product' is each item in invetory array
  const productDiv = document.createElement('div')
  productDiv.classList.add('product')

  const productName = document.createElement('h3')
  productName.textContent = product.product_name

  const price = document.createElement('p')
  price.textContent = 'Price: $' + product.price

  const description = document.createElement('p')
  description.textContent = 'Description: ' + product.description

  const addItemToNewOrderBtn = document.createElement('button') //make order button
  addItemToNewOrderBtn.classList.add('make-order-btn')
  addItemToNewOrderBtn.id = product.id //invetory id item will be added each make order button
  addItemToNewOrderBtn.textContent = 'Make Order'

  //appends each to the product Div
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

      //sets div to empty first
      inventoryDiv.innerHTML = ''
      //create a product element for each item in invetory from display invetory
      inventoryData.forEach((product) => {
        const { productDiv, addItemToNewOrderBtn } =
          createProductElement(product)
        inventoryDiv.appendChild(productDiv)

        //if new order btn is clicked the invetory id is added to order
        addItemToNewOrderBtn.addEventListener('click', async (event) => {
          event.preventDefault()
          const inventoryId = event.target.id
          console.log('order id =>', orderId.id)
          console.log('inventory item id =>', inventoryId)
          await addItemsToOrder(orderId.id, inventoryId)
          //display the item added
          await displayNonShipped(userToDisplay)
          //loads the order
          await loadOrders()
        })
      })
    } catch (error) {
      console.error('Error getting inventory.', error)
    }
    //show the invetory on the btn click
    inventoryDiv.style.display = 'block'
    inventoryVisible = true
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

//PUT order users order to shipped
async function shipOrder(userToDisplay) {
  const url = 'http://localhost:3001/api/orders'
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_id: userToDisplay,
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
