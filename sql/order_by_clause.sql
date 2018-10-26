/* Order By productName, Ascending */
SELECT productName, listPrice, discountPercent
FROM products
WHERE listPrice < 500
ORDER BY productName

/* Order by listPrice, Descending */
SELECT productName, listPrice, discountPercent
FROM products
WHERE listPrice < 500
ORDER BY listPrice DESC

/* Order by listPrice, Descending, using Column Number */
SELECT productName, listPrice, discountPercent
FROM products
WHERE listPrice < 500
ORDER BY 2 DESC

/* Order by discountPercent ASC, then order by listPrice DESC */
SELECT productName, listPrice, discountPercent
FROM products
ORDER BY discountPercent, listPrice DESC