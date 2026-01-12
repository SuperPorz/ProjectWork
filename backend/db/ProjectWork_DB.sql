########################################### DATABASE
CREATE DATABASE ProjectWork;
USE ProjectWork;
SET SQL_SAFE_UPDATES = 1;

# CREATE USER IF NOT EXISTS 'userphp'@'localhost' IDENTIFIED BY 'admin';
# GRANT ALL PRIVILEGES ON `database`.* TO 'userphp'@'localhost';
# FLUSH PRIVILEGES;

########################################### TABELLE
-- Creazione tabella articolo da zero con tutti i vincoli
CREATE TABLE orders ( 
    id INT AUTO_INCREMENT PRIMARY KEY, 
    customer VARCHAR(255) NOT NULL, 
    product VARCHAR(255) NOT NULL, 
    quantity INT NOT NULL, 
    order_date DATE NOT NULL
);


########################################### POPOLAMENTO DATABASE
INSERT INTO orders (customer, product, quantity, order_date) 
VALUES ('John Smith', 'Laptop', 1, '2026-01-01');

INSERT INTO orders (customer, product, quantity, order_date) 
VALUES ('Emily Johnson', 'Smartphone', 2, '2026-01-02');

INSERT INTO orders (customer, product, quantity, order_date) 
VALUES ('Michael Brown', 'Headphones', 1, '2026-01-03');

INSERT INTO orders (customer, product, quantity, order_date) 
VALUES ('Sarah White', 'Keyboard', 1, '2026-01-04');

INSERT INTO orders (customer, product, quantity, order_date) 
VALUES ('David Wilson', 'Mouse', 3, '2026-01-05');

INSERT INTO orders (customer, product, quantity, order_date) 
VALUES ('Laura Taylor', 'Monitor', 1, '2026-01-06');

INSERT INTO orders (customer, product, quantity, order_date) 
VALUES ('James Harris', 'Smartwatch', 2, '2026-01-07');

INSERT INTO orders (customer, product, quantity, order_date) 
VALUES ('Olivia Clark', 'Tablet', 1, '2026-01-08');

INSERT INTO orders (customer, product, quantity, order_date) 
VALUES ('Daniel Lewis', 'Camera', 1, '2026-01-09');

INSERT INTO orders (customer, product, quantity, order_date) 
VALUES ('Sophia Walker', 'Printer', 1, '2026-01-10');


########################################### TEST QUERY
SELECT * FROM orders;

TRUNCATE TABLE orders;