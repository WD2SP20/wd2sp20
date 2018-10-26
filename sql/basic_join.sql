/* Get products and their categories */
SELECT productName, categoryName
 FROM products
 JOIN categories
   ON products.categoryID = categories.categoryID

/* Get customers and their orders */
SELECT firstName,
       lastName,
       orderDate
FROM customers 
JOIN orders 
  ON customers.customerID = orders.customerID
ORDER BY orderDate

/* Get customers and their orders, table aliased */
SELECT c.firstName,
       c.lastName,
       o.orderDate
FROM customers c
JOIN orders o
  ON c.customerID = o.customerID
ORDER BY orderDate

/* Join 4 tables, Get customers, their orders, and what they ordered */
SELECT c.firstName,
       c.lastName,
       o.orderID,
       p.productName,
       p.listPrice,
       oi.itemPrice,
       oi.quantity
FROM customers c
JOIN orders o
  ON c.customerID = o.customerID
JOIN orderItems oi
  ON o.orderID = oi.orderID
JOIN products p
  ON oi.productID = p.productID
ORDER BY o.orderID