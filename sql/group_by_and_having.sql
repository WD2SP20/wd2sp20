/* Get the average list price and # of items by category */
SELECT categoryID,
       COUNT(categoryID), 
       AVG(listPrice)
FROM products
GROUP BY categoryID
ORDER BY 2 DESC;

/* 
 * Same query, but this time we join in the category name
 * Also: Only selecting categories with an average price > 700
 */
SELECT c.categoryName,
       COUNT(*) numOfProducts,
       AVG(listPrice) averageListPrice
FROM products p
JOIN categories c
  ON p.categoryID = c.categoryID 
GROUP BY c.categoryName
HAVING averageListPrice > 700;

/* Same query, but this time we only include items that cost > 700 */
SELECT c.categoryName,
       COUNT(*) numOfProducts,
       AVG(listPrice) averageListPrice
FROM products p
JOIN categories c
  ON p.categoryID = c.categoryID 
WHERE p.listPrice > 700
GROUP BY c.categoryName;
