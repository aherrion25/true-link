
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
-- Table for each person in family tree
CREATE TABLE "person" (
	"id" SERIAL PRIMARY KEY,
	"firstname" VARCHAR (255) NOT NULL,
	"lastname" VARCHAR (255) NOT NULL,
	"lastname_birth" VARCHAR (255),
	"gender" VARCHAR (80) NOT NULL,
	"birth" DATE,
	"death" DATE,
	"birthplace" VARCHAR(1000),
	"user_id" INT REFERENCES "user" 
);

-- Table for the pairings for each person
CREATE TABLE "pairing" (
    "id" SERIAL PRIMARY KEY,
    "person_id" INT REFERENCES "person", 
    "connection_id" INT REFERENCES "person",
    "connection_type_id" INT REFERENCES "connection_type"  
);

-- Table for connection for each person (father, mother, child, spouse)
CREATE TABLE "connection_type" (
    "id" SERIAL PRIMARY KEY,
    "type" VARCHAR (50)
);

------------------[ DATA ]----------------

-- Values for each connection type
INSERT INTO "connection_type"("type")
VALUES('Father'),('Mother'),('Child'),('Spouse');

-- Starter data for person table
INSERT INTO "person" ( "firstname", "lastname", "lastname_birth", "gender", "birth", "death", "birthplace", "user_id")
VALUES('Aubree', 'Herrion', 'Herrion', 'Male', '02/12/1992',NULL ,'Norfolk,VA',2),
('Melissa', 'Staupe', 'Staupe', 'Female', '02/17/1985',NULL ,'Burnsville,MN',2),
('Knox', 'Staupe', 'Staupe', 'Male', '10/12/2019',NULL , 'Burnsville,MN',2);

