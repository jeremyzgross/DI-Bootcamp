//DOM elements

const returnToProducts = document.querySelector('.return-to-products')
//Returns to previous product page to maek a new order for User 
returnToProducts.addEventListener('click', (event) => {
  event.preventDefault(event)
  window.location.href = '../products.html'
})
