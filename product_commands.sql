create table products (
	id int not null auto_increment,
	name varchar(50) not null,
    created_by int not null,
    brand varchar(50) not null,
    primary key(id),
    foreign key(created_by) references user(id)
);

describe products;

rename table products to product;

describe product;

INSERT INTO product (name, created_by, brand)
VALUES
	('ipad', 101, 'apple'),
    ('iphone', 101, 'apple'),
    ('iwatch', 102, 'apple'),
    ('ipad mini', 103, 'apple'),
    ('galaxy A12', 104,'samsung'),
    ('redmi note 15', 104,'redmi'),
    ('lenoscreen', 107,'lenovo');
    
SELECT * FROM product;

SELECT u.id, u.userName, p.name FROM user u LEFT JOIN product p ON u.id = p.created_by; /*Todos los registros de la izquierda y los que en la derecha coincidan*/

SELECT u.id, u.userName, p.name FROM user u RIGHT JOIN product p ON u.id = p.created_by; /*Todos los registros de la derecha y los que en la izquierda coincidan*/

SELECT u.id, u.userName, p.name FROM user u INNER JOIN product p ON u.id = p.created_by; /*Solo los registros de la intersección*/

SELECT u.id, u.userName, p.id, p.name FROM user u CROSS JOIN product p; /*cada registro de la izquierda relacionado a cada registro de la derecha*/

SELECT COUNT(id) AS total, brand FROM product GROUP BY brand;

SELECT COUNT(p.id) AS total, u.userName FROM product p LEFT JOIN user u ON u.id = p.created_by GROUP BY p.created_by;

SELECT COUNT(p.id) AS total, u.userName FROM product p LEFT JOIN user u 
ON u.id = p.created_by GROUP BY p.created_by 
HAVING COUNT(p.id) > 1;

DROP TABLE product;

DESCRIBE product;

DROP TABLE mymovies;

DROP TABLE user;

SHOW TABLES;
