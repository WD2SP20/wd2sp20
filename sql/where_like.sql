/* Get Products whose name starts with 'Fender' */
SELECT productName FROM products
WHERE productName LIKE 'Fender%';

/* 
 * Get Products whose name contain 'cast'
 * -including ones that start or end with 'cast'
 */
SELECT productName FROM products
WHERE productName LIKE '%cast%';

/*
 * Get Addresses who have zip codes that
 * -Start with 076
 * -Ends with ANY 2 characters
 */
SELECT zipCode FROM addresses
WHERE zipCode LIKE '076__';

/*
 * Get all orders whose orderDate is in June, 2010 
 */
SELECT orderDate FROM orders
WHERE orderDate LIKE '2010-06-__%';
