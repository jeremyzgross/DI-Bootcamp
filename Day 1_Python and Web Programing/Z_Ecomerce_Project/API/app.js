//REGISTER LOGIN
/**
 * REGISTER BUTTON => POST /register ✅
 * LOGIN BUTTON => POST/login ✅
 * after above action redirect to PRODUCTS PAGE ✅
 * adds userId to session ✅
 */

//PRODUCTS PAGE
/**
 * on pageload GET/nonshippedorders ✅
 * CREATE ORDER BUTTON => POST /orders ✅
 * only show button if result from GET/nonshippedorders was an empty array
 * CREATE VIEW ORDERS BUTTON => redirects to orders page
 * only show VIEW ORDERS BUTTON if there was orders returned from GET/nonshippedorders

 * save order id to variable
 * GET /products to show all products
 * create a button under each product that adds product to ORDER_INVETORY
 * if/else if there is an error because no order, alert the user to create order
 * else add item to ORDER_INVETORY use product_id, order_id from variable, save user_id from session
 */

//ORDERS PAGE
/**
 * on pageload GET/nonshippedorders
 * display the products in the order 
 * create checkoutbutton => PUT /orders
 * 
 * 

 */
