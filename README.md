# BookBuddy Backend API

This repository contains the backend code for the BookBuddy application, a simple RESTful API for managing books using Node.js, Express, and MongoDB.

## Features

- Create a new book
- Retrieve all books
- Retrieve a book by ID
- Update a book by ID
- Delete a book by ID

## Technologies Used

- Node.js
- Express.js
- MongoDB (using Mongoose)
- JSON for data exchange
- RESTful API design

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm.
- You have MongoDB set up. For this project, a MongoDB Atlas cluster is used.
- You have a basic understanding of Node.js and Express.js.

## Getting Started

Follow these instructions to set up and run the project locally.

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/bookbuddy-backend.git
    cd bookbuddy-backend
    ```

2. **Install the dependencies:**

    ```bash
    npm install
    ```

3. **Create a `.env` file:**

    Create a `.env` file in the root directory to store your MongoDB URI (optional but recommended for security reasons).

    ```bash
    MONGODB_URI=mongodb+srv://admin:Admin123@bookbuddybackenddb.szglj.mongodb.net/BookBuddy?retryWrites=true&w=majority&appName=bookbuddybackenddb
    ```

4. **Start the server:**

    ```bash
    npm start
    ```

    The server should be running on [http://localhost:3000](http://localhost:3000).

## API Endpoints

### Base URL

```bash
http://localhost:3000/api/books
```

### Endpoints

- **GET `/api/books/`** - Retrieves all books.
- **GET `/api/books/:id`** - Retrieves a specific book by ID.
- **POST `/api/books/`** - Creates a new book.
- **PUT `/api/books/:id`** - Updates a book by ID.
- **DELETE `/api/books/:id`** - Deletes a book by ID.

### Example API Request

To create a new book, you can send a POST request to `/api/books/` with a JSON payload:

```json
{
  "name": "Book Title",
  "Auther": "Author Name"
}
```
# Project Structure

- **index.js**: Entry point of the application where the Express server is initialized and connected to the MongoDB database.
- **models/book.model.js**: Mongoose schema for the Book model.
- **routes/book.route.js**: Express router for defining the book-related API routes.
- **controllers/book.controller.js**: Controller functions to handle the logic for each API endpoint.

# Error Handling

The API provides proper error handling with appropriate HTTP status codes:

- `200 OK` for successful requests.
- `404 Not Found` for resources that are not found.
- `500 Internal Server Error` for server-related issues.

# Future Enhancements

- Implement user authentication and authorization.
- Add pagination and sorting to the list of books.
- Implement data validation and sanitization.




