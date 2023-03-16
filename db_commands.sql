SHOW DATABASES;

CREATE DATABASE IF NOT EXISTS moviender_db;

SHOW DATABASES;

USE moviender_db;

CREATE TABLE user(
id INT(11) NOT NULL AUTO_INCREMENT,
userName VARCHAR(45) DEFAULT NULL,
myMovies JSON DEFAULT NULL,
PRIMARY KEY (id)
);

SHOW TABLES;

DESCRIBE user;

INSERT INTO user VALUES 
(100, 'maxMi', NULL),
(101, 'philipB', NULL),
(102, 'lauraCL', NULL);

SELECT * FROM user;

['shrek 1', 'batman']
['flash', 'superman', 'drakula']
['sabrina', 'wednesday']