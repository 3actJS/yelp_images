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
   userIconImage VARCHAR(255)
 );

 CREATE TABLE images_info(
   imageId int AUTO_INCREMENT NOT NULL PRIMARY KEY,
   imageTitle VARCHAR(50),
   itemImage VARCHAR(255),
   imageCategory VARCHAR(100),
   imageDescription VARCHAR(255),
   imageUploadDate DATE,
   userId int,
   restaurantId int,
   FOREIGN KEY (userId) REFERENCES users_info(userId),
   FOREIGN KEY (restaurantId) REFERENCES restaurants_info(restaurantId)
 );

INSERT INTO restaurants_info(restaurantName) VALUES ("Bombay Garden");
INSERT INTO restaurants_info(restaurantName) VALUES ("India Kitchen");
INSERT INTO restaurants_info(restaurantName) VALUES ("Vietnamese Cuisine");
INSERT INTO restaurants_info(restaurantName) VALUES ("Japenese Cuisine");
INSERT INTO restaurants_info(restaurantName) VALUES ("Kashmiri Cuisine");
INSERT INTO restaurants_info(restaurantName) VALUES ("Nepalese Cuisine");
INSERT INTO restaurants_info(restaurantName) VALUES ("Korean Cuisine");
INSERT INTO restaurants_info(restaurantName) VALUES ("American Cuisine");
INSERT INTO restaurants_info(restaurantName) VALUES ("Chinese Cuisine");


INSERT INTO users_info(userName, userReviews, userType, userIconImage) 
    VALUES ("priya", "this is an awesome place", "regular", "/Users/priyankakoneru/HR/yelp_images/images/icons/user1.jpg");
INSERT INTO users_info(userName, userReviews, userType, userIconImage) 
    VALUES ("koneru", "this is an amazing place", "elite", "/Users/priyankakoneru/HR/yelp_images/images/icons/user2.jpg");
INSERT INTO users_info(userName, userReviews, userType, userIconImage) 
    VALUES ("hello", "this is a good place", "elite", "/Users/priyankakoneru/HR/yelp_images/images/icons/user3.jpg");

INSERT INTO images_info(imageTitle, itemImage, imageCategory, imageDescription, imageUploadDate, userId, restaurantId) 
      VALUES ("testImage", "/Users/priyankakoneru/HR/yelp_images/images/food1.jpg", "food", "yummy dish", CURDATE(), 1, 2);
INSERT INTO images_info(imageTitle, itemImage, imageCategory, imageDescription, imageUploadDate, userId, restaurantId) 
      VALUES ("testImage1", "/Users/priyankakoneru/HR/yelp_images/images/food2.jpg", "decor", "nice environment", CURDATE(), 1, 2);
INSERT INTO images_info(imageTitle, itemImage, imageCategory, imageDescription, imageUploadDate, userId, restaurantId) 
      VALUES ("testImage2", "/Users/priyankakoneru/HR/yelp_images/images/food3.jpg", "food", "super good", CURDATE(), 1, 2);