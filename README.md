# Employee Management System

This project implements a simple employee management system using Node.js, Express.js and MongoDB for data storage. Users can perform CRUD operations (Create, Read, Updte and Delete) on employee data.

## File Structure

```txt
 employee-management-system
├── 📂config
│   └──📜 db.js
├── 📂controllers
│   └── 📜employeeController.js
├── 📂models
│   └── 📜employee.js
├── 📂routes
│   └── 📜employeeRoutes.js
├── .env
├── 📜app.js
└── package.json

```

## Setup Instructions

- Clone the repository to your local machine.
- Navigate to the project directory.
- Install dependencies by running `npm install`.
- Start the server with `node app.js`.

## Usage
- Access the API endpoints using HTTP requests (e.g., POSTman, cURL).
- The base URL for API requests is `http://localhost:5000`.

## API Endpoints
- `POST /employees`: Create employee. 
- `GET /employees`: Get all employees.
- `GET /employees/:id`: Get employee by id.
- `PUT /employees/:id`: Update employee data by id.
- `DELETE /employees/:id`: Delete employee data by id.
- `GET /employees/filter/:filter`: Get employees by using filters.

## Project Dependencies
- `express`: Web framework for Node.js used for handling HTTP requests and routes.
- `body-parser`: A body-parser is a Node.js library used to extract information from an incoming HTTP request.
- `mongoose`: Mongoose is a JavaScript object-oriented programming library that creates a connection between MongoDB and the Node.js JavaScript runtime environment.
