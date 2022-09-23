
# LAB - Class 04

## Project: API Server

## Author: Kris Dunning

## Problem Domain

Build a REST API using Express, by creating a proper series of endpoints that perform CRUD operations on a Postgres SQL Database, using the REST standard

Data Models

Create 2 SQL data models using Sequelize, exported as Node Modules
Create a Collection Class that accepts a Sequelize Model into the constructor and assigns it as this.

This class should have the following methods defined, to perform CRUD Operations
Each method should in turn call the appropriate Sequelize method for the model
create()
get() or read()
update()
delete()

For the data models, you are free to choose your own data types and describe their fields … For Example: person, animal, car, instrument, game

Routes

In your express server, create a router module for each data model that you’ve created. Within the router module, create REST route handlers for each of the REST Methods that properly calls the correct CRUD method from the matching data model.

For these examples, we’ll use ‘food`

Add a Record

CRUD Operation: Create
REST Method: POST
Path: /food
Input: JSON Object in the Request Body
Returns: The record that was added to the database.
You must generate an ID and attach it to the object.
You should verify that only the fields you define get saved as a record.

Get All Records

CRUD Operation: Read
REST Method: GET
Path: /food
Returns: An array of objects, each object being one entry from your database.

Get One Record

CRUD Operation: Read
REST Method: GET
Path: /food/1
Returns: The object from the database, which has the id matching that which is in the path.

Update A Record

CRUD Operation: Update
REST Method: PUT
Path: /food/1
Input: JSON Object in the Request Body
Returns: The object from the database, which has the id matching that which is in the path, with the updated/changed data.
You should verify that only the fields you define get saved as a record.

Delete A Record

CRUD Operation: Destroy
REST Method: DELETE
Path: /food/1
Returns: The record from the database as it exists after you delete it (i.e. null).

## Links and Resources

Github Repo Link:

Github Pull Request:

Heroku Deployment:

## Tests

Testing Requirements

Be sure to specify NODE_ENV=test in your package.json test script.

Assert the following

404 on a bad route

The correct status codes and returned data for each REST route
Create a record using POST
Read a list of records using GET
Read a record using GET
Update a record using PUT
Destroy a record using DELETE

## UML
