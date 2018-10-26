/* Get ALL Values from the products table */
SELECT *
FROM products;

/* 
 * Get three columns from the products table
 * Also sort the prices from lowest to highest
 */
SELECT productID, productName, listPrice
FROM products
ORDER BY listPrice;

/*
 * Get three columns from the products table
 * Only get products that cost less than $450
 * Order the results by price from lowest to highest
 */
SELECT productID, productName, listPrice
FROM products
WHERE listPrice < 450
ORDER BY listPrice;

/*
 * Get three columns from the products table
 * Only get products that cost less than $10
 * NOTE: This query returns and empty result
 *       i.e. there are no products that cost less than $10
 */
SELECT productID, productName, listPrice
FROM products
WHERE listPrice < 10;