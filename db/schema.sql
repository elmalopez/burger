-- Drops the animals_db if it exists currently --
DROP DATABASE IF EXISTS burgers_db;

-- Creates the "burger_db" database --
CREATE DATABASE burgers_db;

-- Makes it so all of the following code will affect burger_db --
USE burger_db;

-- Creates the table "burger" within animals_db --
CREATE TABLE burgers
(
	id INTEGER NOT NULL AUTO_INCREMENT,
    -- Makes a sting column called "burger_name" --
	burger_name VARCHAR(255) NOT NULL,
    -- Makes a boolean column called "devoured" which will automatically fill --
  -- with true when a new row is made and the value isn't otherwise defined. --
    devoured BOOLEAN DEFAULT false,
    -- Sets id as this table's primary key which means all data contained within it will be unique --
	PRIMARY KEY (id)
);