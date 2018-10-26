/* Delete product #1 */
DELETE FROM products
WHERE productID = 1

/* Delete ALL Drums */
DELETE FROM products
WHERE categoryID = 3

/* DELETE everything whose category is > 3 */
DELETE FROM categories
WHERE categoryID > 3

/*
 * Can use a subquery
 * Delete cutomer #1's ordered items
 */
DELETE FROM orderItems
WHERE orderID IN
    (SELECT orderID FROM orders
     WHERE customerID = 1)
