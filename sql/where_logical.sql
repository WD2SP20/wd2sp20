/* AND - Both Conditions must be TRUE for the row to display */
SELECT productName, listPrice, discountPercent, categoryID
FROM products
WHERE categoryID = 1
AND discountPercent = 30;

/* OR - Either Condition must be TRUE for the row to display */
SELECT productName, listPrice, discountPercent, categoryID
FROM products
WHERE categoryID = 1
OR discountPercent = 30;

/* Reads dateAdded > '2010-07-01' OR
 *       (listPrice < 500 AND discountPercent > 9)
 */
SELECT productName, listPrice, discountPercent, dateAdded
FROM products
WHERE dateAdded > '2010-07-01' 
OR listPrice < 500
AND discountPercent > 9

/*
 * Parentheses to change precedence
 */
SELECT productName, listPrice, discountPercent, dateAdded
FROM products
WHERE (dateAdded > '2010-07-01' 
       OR listPrice < 500)
AND discountPercent > 9