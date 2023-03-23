SHOW DATABASES;

CREATE DATABASE IF NOT EXISTS moviender_db;

SHOW DATABASES;

USE moviender_db;

CREATE TABLE user(
id INT NOT NULL AUTO_INCREMENT,
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

-- ALTER TABLE user ADD ROW schedule array

INSERT INTO user (userName, myMovies) VALUES 
('LauritaLinda', 
'{
"id": "12345", 
"name": "shrek 1"
}'
);

INSERT INTO user (userName, myMovies) VALUES 
('Miler peludito',  
'[
{
"id": "55555", 
"name": "mosters inc"
},
{
"id": "88888",
"name": "jhon week"
}
]'
);

CREATE TABLE myMovies (
	id INT NOT NULL,
    poster_path VARCHAR(255) DEFAULT NULL,
	title VARCHAR(45)
);

SHOW TABLES;

DESCRIBE mymovies;

ALTER TABLE mymovies MODIFY COLUMN id INT NOT NULL PRIMARY KEY;

INSERT INTO mymovies (id, poster_path, title) VALUES (550, "https://image.tmdb.org/t/p/original/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg", "Finding Nemo");

INSERT INTO mymovies (id, poster_path, title) VALUES
(1500, "https://image.tmdb.org/t/p/original/SKJDBKJBSCKL.jpg", "Shrek"),
(45654, "https://image.tmdb.org/t/p/original/564165asasas.jpg", "batman"),
(56245, "https://image.tmdb.org/t/p/original/asljhcjkhbasdcvlknkkf.jpg", "robin hood"),
(3265, "https://image.tmdb.org/t/p/original/mamamamsndhdfhnksj.jpg", "drakula");

SELECT * FROM mymovies;

UPDATE mymovies SET title = "Goku" WHERE id= 56245;

DELETE FROM mymovies WHERE id = 550;