# Bookstall API

Welcome to the **Bookstall API** – your gateway to exploring and managing books. This simple Express-based API allows you to view, add, search, and delete books. The API is designed with clear endpoints, input validation, and helpful console logging to assist during development.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Features

- **Welcome Routes:** Get started with a welcome message.
- **CRUD Operations:** 
  - Fetch all books.
  - Add a new book with data validation.
  - Retrieve a book by its title.
  - Delete a book by its title.
- **Input Validation:** Middleware ensures that book data (title, author, price) meets required conditions before processing.
- **Logging:** Console logs provide insight into API operations and potential issues.

## Project Structure

```plaintext
.
├── controllers
│   └── userController.js       // Handles business logic for book operations
├── middlewares
│   └── userMiddlewares.js      // Middleware for validating book data
├── routes
│   └── userRoutes.js           // Defines API endpoints for the Bookstall
├── server.js                   // Main server file initializing the Express app
└── README.md                   // Project documentation

## Prerequisites

- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/)

Installation

    Clone the repository:

    git clone https://github.com/your-username/bookstall-api.git

    Navigate to the project directory:

    cd bookstall-api

    Install dependencies:

    npm install


## Usage

1. **Start the Server:**

The server runs on port `4677` by default. Start it with:

node server.js


2. **Access the API:**

- Open your browser or API tool (like Postman) and navigate to: `http://localhost:4677`
- You should see a welcome message indicating the API is up and running.

## API Endpoints

- **GET `/`**

- **Description:** Returns a welcome message for the Bookstall API.
- **Example Response:**
 ```
 "Welcome to the Bookstall API. Your gateway to exploring and managing books is up and running!"
 ```

- **GET `/bookstall`**

- **Description:** Displays a welcome message for the Bookstall section.
- **Example Response:**
 ```
 "Welcome to the Bookstall section! Browse and manage books here."
 ```

- **GET `/bookstall/getAllBooks`**

- **Description:** Retrieves all books in the collection.
- **Example Response:**
 ```
 [
   { "id": 1, "title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "price": 1925 },
   { "id": 2, "title": "1984", "author": "George Orwell", "price": 1949 },
   { "id": 3, "title": "To Killprice Mockingbird", "author": "Harper Lee", "price": 1960 }
 ]
 ```

- **POST `/bookstall/addbook`**

- **Description:** Adds a new book to the collection.
- **Request Body:** JSON containing `title`, `author`, and `price`.
 ```
 {
   "title": "New Book Title",
   "author": "Author Name",
   "price": 25
 }
 ```
- **Response:** Returns the newly added book object.

- **GET `/bookstall/getBookByTile/:title`**

- **Description:** Retrieves a book by its title.
- **Example:** `/bookstall/getBookByTile/1984`
- **Response:** Returns the book object if found.

- **DELETE `/bookstall/deleteBookByTitle/:title`**

- **Description:** Deletes a book from the collection by its title.
- **Example:** `/bookstall/deleteBookByTitle/1984`
- **Response:** Confirmation message and updated book list.

## License

This project is licensed under the [MIT License](LICENSE).

---
