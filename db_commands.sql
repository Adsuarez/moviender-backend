SHOW DATABASES;

USE moviender_db;

CREATE TABLE IF NOT EXISTS `user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(32) DEFAULT NULL,
  `email` VARCHAR(50) NOT NULL UNIQUE,
  `myMovies` JSON DEFAULT NULL,
  `schedule` JSON DEFAULT NULL,
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
  
  -- DROP table user;