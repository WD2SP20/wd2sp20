/* View the rows in the Orders Table */
SELECT orderID, orderDate, shipDate
FROM orders;

/* Get all rows where the shipDate is NULL */
SELECT orderID, orderDate, shipDate
FROM orders 
WHERE shipDate IS NULL;

/* Get all rows where the shipDate isn't NULL */
SELECT orderID, orderDate, shipDate
FROM orders 
WHERE shipDate IS NOT NULL;