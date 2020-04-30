/*  Execute this file from the command line by typing:
 *    mysql -u restaurants -p < schema.sql
 *  to create the database and the tables.*/
 DROP DATABASE IF EXISTS restaurants;

 CREATE DATABASE restaurants;

 USE restaurants;

 CREATE TABLE restaurants_info(
   restaurantId int AUTO_INCREMENT NOT NULL PRIMARY KEY,
   restaurantName VARCHAR(255)
 );

 CREATE TABLE users_info(
   userId int AUTO_INCREMENT NOT NULL PRIMARY KEY,
   userName VARCHAR(50),
   userReviews VARCHAR(255),
   userType VARCHAR(50),
   userIconImage BLOB
 );

 CREATE TABLE images_info(
   imageId int AUTO_INCREMENT NOT NULL PRIMARY KEY,
   imageTitle VARCHAR(50),
   itemImage BLOB,
   imageCategory VARCHAR(100),
   imageDescription VARCHAR(255),
   imageUploadDate DATE
 );

INSERT INTO restaurants_info(restaurantName) VALUES ("Bombay Garden");
INSERT INTO restaurants_info(restaurantName) VALUES ("India Kitchen");
INSERT INTO restaurants_info(restaurantName) VALUES ("Japenese Cuisine");

INSERT INTO users_info(userName, userReviews, userType, userIconImage) 
    VALUES ("priya", "this is an awesome place", "regular", LOAD_FILE("/Users/priyankakoneru/HR/yelp_images/images/icons/user1.jpg"));
INSERT INTO users_info(userName, userReviews, userType, userIconImage) 
    VALUES ("koneru", "this is an amazing place", "elite", LOAD_FILE("/Users/priyankakoneru/HR/yelp_images/images/icons/user2.jpg"));

INSERT INTO images_info(imageTitle, itemImage, imageCategory, imageDescription, imageUploadDate) 
      VALUES ("testImage", "food", LOAD_FILE("/Users/priyankakoneru/HR/yelp_images/images/food1.jpg"), "yummy dish", CURDATE());
INSERT INTO images_info(imageTitle, itemImage, imageCategory, imageDescription, imageUploadDate) 
      VALUES ("testImage1", "decor", LOAD_FILE("/Users/priyankakoneru/HR/yelp_images/images/food2.jpg"), "nice environment", CURDATE());