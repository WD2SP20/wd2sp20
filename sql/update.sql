/* Change the discount for the Fender Telecaster */
UPDATE products
SET discountPercent = '10.00'
WHERE productName = 'Fender Telecaster'

/* Change the discount and description for the Fender Telecaster */
UPDATE products
SET discountPercent = '25.00', 
    description = 'This guitar has great tone and smooth playability.'
WHERE productName = 'Fender Telecaster'

/* Change the discount percentage of ALL basses */
UPDATE products
SET discountPercent = '15.00'
WHERE categoryID = 2

/* W/o a WHERE it updates ALL rows in the table */
UPDATE products
SET discountPercent = '15.00'

/* 
 * Can use subqueries in the UPDATE
 * Here we'll update orders for customer 'Sherwood'
 */
UPDATE orders
SET shipAmount = 0
WHERE customerID IN
   (SELECT customerID
    FROM customers
    WHERE lastName = 'Sherwood')
