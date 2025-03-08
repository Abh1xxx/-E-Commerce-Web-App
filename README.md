# Bookstall API 📚

A RESTful API for managing book data with Express.js. Explore and manage books with CRUD operations, validation, and detailed logging.

## Features ✨
- Get all books
- Add new books with validation
- Search books by title
- Delete books by title
- Detailed console logging for all operations
- Error handling with meaningful status codes
- Request validation middleware

## Installation & Setup ⚙️

1. **Clone the repository**  
```bash
git clone [your-repo-url]
cd bookstall-api

    Install dependencies

bash
Copy

npm install express

    Start the server

bash
Copy

node server.js

Server will run on http://localhost:4677
API Endpoints 🌐
Endpoint	Method	Description	Parameters
/	GET	Main API gateway message	-
/bookstall	GET	Bookstall section welcome message	-
/bookstall/getAllBooks	GET	Get all books in collection	-
/bookstall/addbook	POST	Add new book	JSON body
/bookstall/getBookByTile/:title	GET	Get book by title	URL parameter
/bookstall/deleteBookByTitle/:title	DELETE	Delete book by title	URL parameter
Usage Examples 💻
Get Welcome Message
bash
Copy

curl http://localhost:4677/

Get All Books
bash
Copy

curl http://localhost:4677/bookstall/getAllBooks

Add New Book
bash
Copy

curl -X POST -H "Content-Type: application/json" \
-d '{"title":"The Hobbit","author":"J.R.R. Tolkien","price":1937}' \
http://localhost:4677/bookstall/addbook

Get Book by Title
bash
Copy

curl http://localhost:4677/bookstall/getBookByTile/1984

Delete Book by Title
bash
Copy

curl -X DELETE http://localhost:4677/bookstall/deleteBookByTitle/1984

Request Validation 🔍

Required fields when adding books:

    title (string)

    author (string)
    Price validation:

    Must be positive number (> 0)

    Optional field

Example Error Response:
json
Copy

{
  "error": "Title is required"
}

Error Handling ⚠️
Status Code	Description
400	Invalid input data
404	Book not found
500	Internal server error
Logging 📝

Detailed console logging for:

    Route access tracking

    Validation processes

    CRUD operation status

    Success/failure notifications

    Error stack traces

    Visual separators for better readability

Sample Data 📖

Initial books collection:
json
Copy

[
  { "id": 1, "title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "price": 1925 },
  { "id": 2, "title": "1984", "author": "George Orwell", "price": 1949 },
  { "id": 3, "title": "To Killprice Mockingbird", "author": "Harper Lee", "price": 1960 }
]

License 📄

MIT License - Feel free to use and modify!
Copy


This single-file markdown contains:
- Proper GitHub-flavored markdown formatting
- Clear section hierarchy
- Code blocks with syntax highlighting
- Responsive tables
- Emoji-enhanced headings
- Consistent spacing and indentation
- All necessary documentation elements in one place

Just copy-paste this entire content into a new file named `README.md` in your project root, and GitHub will render it properly formatted.
