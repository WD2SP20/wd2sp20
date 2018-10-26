/*
 * Get products with a categoryID of 2
 * i.e. Basses
 */
SELECT productName, listPrice
FROM products
WHERE categoryID = 2;

/* Get products whose name is 'Gibson Les Paul' */
SELECT productName, listPrice
FROM products
WHERE productName = 'Gibson Les Paul';

/* Get products whose list price is greater than 549.99 */
SELECT productName, listPrice
FROM products
WHERE listPrice > 549.99;

/* Get products whose price is greater than or equal to 549.99 */
SELECT productName, listPrice
FROM products
WHERE listPrice >= 549.99;

/* Get products that start with the letters A - F */
SELECT productName, listPrice
FROM products
WHERE productName < 'G';

/* Get products added before '2010-01-30' */
SELECT productName, listPrice, dateAdded
FROM products
WHERE dateAdded < '2010-01-30';

/* Get products added before '2010-01-30' */
SELECT productName, listPrice, dateAdded
FROM products
WHERE dateAdded <= '2010-01-30';

/* Get products whose discount is not 30% */
SELECT productName, listPrice, discountPercent
FROM products
WHERE discountPercent != 30;
