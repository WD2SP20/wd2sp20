/* Add a new product */
INSERT INTO products
VALUES (0, 1, 'tele', 'Fender Telecaster', 'NA', 
        '949.99', DEFAULT, NOW());

/* Add a new product, omitting auto_increment and default fields */
INSERT INTO products
    (categoryID, productCode, productName, description, 
     listPrice, dateAdded)
VALUES
    (1, 'tele', 'Fender Telecaster', 'NA', 
     '949.99', NOW());

/* Add multiple values into a table */
INSERT INTO categories (categoryID, categoryName)
VALUES
  (4, 'Keyboards'),
  (5, 'Brass'),
  (6, 'Woodwind');
