/* Count the rows in the products table */
SELECT COUNT(*) productCount
FROM products;

/* Count the rows and number of shipped orders */
SELECT COUNT(*) totalCount, 
       COUNT(shipDate) shippedCount 
FROM orders;

/* Get the lowest, highest and average price of a product */
SELECT MIN(listPrice) lowestPrice, 
       MAX(listPrice) highestPrice, 
       AVG(listPrice) averagePrice 
FROM products;

/* Use arithmetic with a column to get the order total for all orders*/
SELECT SUM((itemPrice * quantity) - discountAmount) ordersTotal 
FROM orderItems;
