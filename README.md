# E-commerce Back End

Express.js API with Sequelize and MySQL

This is a functional Express.js API that uses Sequelize as an ORM (Object-Relational Mapping) tool to connect to a MySQL database.

## Prerequisites

Before running the API, make sure you have the following:

- Node.js installed on your machine
- MySQL installed on your machine
- Postman (or any other API testing tool) for testing the routes

## Installation 
1. Clone this repository to your local machine
2. Navigate to the project directory.
3. Install the dependencies by running the following command:
`npm install`

## Configuration
1. Create a new file name ".env" in the project root directory
2. Add the following environment variables to the .env file:
`DB_NAME=your_database_name
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password`

Replace 'your_database_name', 'your_mysql_username', and 'your_mysql_password' with your actual database name, MySQL username, and password respectively.

## Database Setup 
1.  Run the following command to create the development database and seed it with test data:
`npm run seed`
This will create the necessary tables and populate them with sample data.

## Usage
1. To start the server and sync the Sequelize models with the MySQL database, run the following command:
`npm run start`
2. Once the server is running, you can use Insomnia Core (or any other API testing tool) to test the following routes:
- GET '/categories' : Fetches all categories and their associated products.
- GET '/products' : Fetches all products and their associated categories and tags.
- GET '/tags' : Fetches all tags and their associated products.
The data for each route will be displayed in a formatted JSON response.

[Video Tutorial](https://drive.google.com/file/d/1Wf2mSW08YPZsGzu2VN2QQRIpRJJ5cLI2/view)

## Contributing
Start code provided by UC Berkeley Extension program
Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request

## License 
This project is licensed under the MIT License. Feel free to use and modify the code as per the license terms.

Copyright 2023

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
