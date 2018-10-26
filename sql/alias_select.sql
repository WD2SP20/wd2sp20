/*
 * Use the AS keyword to specify an alias
 */
SELECT productID
      ,productName AS name
      ,listPrice AS price
FROM products
WHERE listPrice < 450
ORDER BY listPrice;

/*
 * Omit the AS keyword in MySQL
 */
SELECT productID
      ,productName name
      ,listPrice price
FROM products
WHERE listPrice < 450
ORDER BY listPrice;

/*
 * Use quotes in include spaces in an alias
 */
SELECT productID AS "ID"
      ,productName AS "Product Name"
      ,listPrice AS "Price"
FROM products
WHERE listPrice < 450
ORDER BY listPrice;