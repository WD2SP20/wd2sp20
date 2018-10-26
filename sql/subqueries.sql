/* The subquery to get the average price */
SELECT AVG(listPrice)
FROM products;

/* Use the subquery to get products that cost more than the average */
SELECT productName, listPrice
FROM products
WHERE listPrice > (SELECT AVG(listPrice) FROM products)
ORDER BY listPrice DESC

/* Get customers who have orders */
SELECT customer_id
FROM orders;

/* Get customers who don't have any orders */
SELECT customerID,
       firstName,
       lastName
FROM customers
WHERE customerID NOT IN (SELECT customerID
                         FROM orders);

/* 
 * Can use subqueries in the UPDATE
 * Here we'll update orders for customer 'Sherwood'
 *
 * First: SELECT *
 *        FROM orders;
 */
UPDATE orders
SET shipAmount = 0
WHERE customerID IN
   (SELECT customerID
    FROM customers
    WHERE lastName = 'Sherwood');


/*
 * Can use a subquery for DELETE
 * Delete cutomer #1's ordered items
 */
DELETE FROM orderItems
WHERE orderID IN
    (SELECT orderID FROM orders
     WHERE customerID = 1)