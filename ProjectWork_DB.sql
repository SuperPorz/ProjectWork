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



########################################### TEST QUERY
SELECT * FROM orders;