SHOW DATABASES;

USE moviender_db;

CREATE TABLE IF NOT EXISTS `user` (
  `id` VARCHAR(255) NOT NULL UNIQUE,
  `email` VARCHAR(50) NOT NULL UNIQUE,
  `userName` VARCHAR(32) DEFAULT NULL,
  `password` VARCHAR(255) NOT NULL,
  `myMovies` JSON DEFAULT NULL,
  `schedule` JSON DEFAULT NULL,
  `friends` JSON DEFAULT NULL,
  PRIMARY KEY (`id`)
  );
  
  DESCRIBE user;
  
  SELECT * FROM user;
  
  INSERT INTO user (userName, email, myMovies, schedule) VALUES 
  ("ads", "ads@hotmail.com", '[{"like": [45654, 200, 654, 2154]},{"dislike": [456545, 212321]},{"desire": []}]', '[{"id": 12345, "date": "mar-31-2023"}, {"id": 54654, "date": "apr-05-2023"}]'); 
  
  /*
  JSON Schema
  
  "userName": "loquesea",
  "email": "loquesea@hotmail.com",
  "myMovies": '[{"like": [45654, 200, 654, 2154]},{"dislike": [456545, 212321]},{"desire": []}]',
  "schedule": '[{"id": 12345, "date": "mar-31-2023"}, {"id": 54654, "date": "apr-05-2023"}]'
  */
  UPDATE user SET userName = IFNULL("ads", userName) WHERE id = 1;
  
  SELECT * FROM user WHERE email = "testasas@test.com";
  
  DROP table user;