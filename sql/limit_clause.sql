/* Retrieve the first three rows */
SELECT productID, productName
FROM products
LIMIT 3;

/* Same as above, get the first three rows */
SELECT productID, productName
FROM products
LIMIT 0, 3;

/* Get three rows, starting with the second row */
SELECT productID, productName
FROM products
LIMIT 1, 3;
