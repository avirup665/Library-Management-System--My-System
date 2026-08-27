# 📚 Library Management System

A complete **MERN Stack Library Management System** designed for academic learning, beginner full-stack development, project demonstrations, and interviews.

The application allows a librarian to manage books, members, and book issue/return transactions through a simple and responsive web interface.

---

## 🚀 Project Overview

The **Library Management System** is a full-stack web application built using:

- **MongoDB** – Database
- **Express.js** – Backend framework
- **React.js** – Frontend user interface
- **Node.js** – Backend runtime
- **Mongoose** – MongoDB object modeling
- **Axios** – Frontend API communication
- **React Router** – Frontend navigation
- **Vite** – React development/build tool

The system demonstrates the complete working flow of a MERN application:

```text
React Frontend
      ↓
Express REST API
      ↓
Controllers
      ↓
Mongoose Models
      ↓
MongoDB Database
```

---

# ✨ Features

## 📊 Dashboard

The dashboard displays important library statistics such as:

- Total book copies
- Total members
- Currently issued books
- Returned books
- Recent transactions

---

## 📖 Book Management

The librarian can:

- Add new books
- View all books
- Edit book details
- Delete books
- View total quantity
- View available quantity

Book information includes:

- Title
- Author
- Category
- ISBN
- Quantity
- Available Quantity

The system also prevents deletion of a book while a copy is currently issued.

---

## 👥 Member Management

The librarian can:

- Add members
- View all members
- Edit member information
- Delete members

Member information includes:

- Name
- Email
- Phone Number
- Membership Date

The system prevents deletion of a member who currently has an issued book.

---

## 📤 Issue Book

The librarian can:

- Select an available book
- Select a registered member
- Choose an issue date
- Issue the book

When a book is issued:

```text
Available Quantity = Available Quantity - 1
```

A book cannot be issued when its available quantity is `0`.

---

## 📥 Return Book

The librarian can return an issued book from the Transactions page.

When a book is returned:

```text
Status = Returned
Return Date = Current Date
Available Quantity = Available Quantity + 1
```

The system also prevents the same transaction from being returned twice.

---

## 📜 Transaction History

The Transactions page displays:

- Book name
- Member name
- Issue date
- Return date
- Transaction status
- Return action

Transaction statuses are:

```text
Issued
Returned
```

---

# 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend user interface |
| Vite | React development server and build tool |
| Node.js | Backend runtime |
| Express.js | REST API development |
| MongoDB | Database |
| Mongoose | MongoDB object modeling |
| Axios | API communication |
| React Router | Frontend page navigation |
| HTML | Page structure |
| CSS | Styling and responsive layout |
| JavaScript | Application logic |
| Git & GitHub | Version control |

---

# 📁 Project Structure

```text
library-management-system/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Alert.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── StatCard.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Books.jsx
│   │   │   ├── Members.jsx
│   │   │   ├── IssueBook.jsx
│   │   │   └── Transactions.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│   │
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── bookController.js
│   │   ├── memberController.js
│   │   └── transactionController.js
│   │
│   ├── models/
│   │   ├── Book.js
│   │   ├── Member.js
│   │   └── Transaction.js
│   │
│   ├── routes/
│   │   ├── bookRoutes.js
│   │   ├── memberRoutes.js
│   │   └── transactionRoutes.js
│   │
│   ├── .env.example
│   ├── seed.js
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

---

# ✅ Prerequisites

Before running the project, install the following software.

## 1. Node.js

Install the **LTS version** of Node.js.

After installation, verify it in the VS Code terminal:

```powershell
node -v
npm -v
```

Both commands should display version numbers.

---

## 2. MongoDB

You can use either:

### Option A — MongoDB Community Server

Install MongoDB locally on your computer.

### Option B — MongoDB Atlas

Use MongoDB Atlas as an online cloud database.

For beginners, MongoDB Atlas is often easier if you do not want to manage a local MongoDB service.

---

## 3. Visual Studio Code

Open the complete project folder in VS Code:

```text
library-management-system
```

Do not open only a single file.

---

# 🔌 Recommended VS Code Extensions

These extensions are optional but useful:

- MongoDB for VS Code
- Prettier - Code Formatter
- Thunder Client
- ES7+ React/Redux/React-Native Snippets
- GitLens

---

# ⚙️ Installation and Setup

## Step 1 — Download or Clone the Project

If downloaded as a ZIP:

1. Extract the ZIP file.
2. Open the extracted `library-management-system` folder in VS Code.

If using Git:

```bash
git clone <your-repository-url>
cd library-management-system
```

---

# 🗄️ Backend Setup

Open a VS Code terminal.

Move into the backend folder:

```powershell
cd server
```

Install backend dependencies:

```powershell
npm install
```

---

## Create the Environment File

Inside the `server` folder you will find:

```text
.env.example
```

Create a copy and rename it to:

```text
.env
```

In PowerShell you can use:

```powershell
Copy-Item .env.example .env
```

---

## Local MongoDB Configuration

If you are using MongoDB locally, your `.env` file can contain:

```env
MONGO_URI=mongodb://127.0.0.1:27017/library_management_system
PORT=5000
```

---

## MongoDB Atlas Configuration

If you are using MongoDB Atlas:

1. Create a MongoDB Atlas account.
2. Create a cluster.
3. Create a database user.
4. Add your IP address to Network Access.
5. Copy the connection string.
6. Paste it into `server/.env`.

Example:

```env
MONGO_URI=mongodb+srv://USERNAME:PASSWORD@cluster.mongodb.net/library_management_system
PORT=5000
```

Replace:

```text
USERNAME
PASSWORD
```

with your actual MongoDB Atlas credentials.

> Never upload your real `.env` file to GitHub.

---

# ▶️ Start the Backend

From the `server` folder run:

```powershell
npm run dev
```

If everything is configured correctly, you should see output similar to:

```text
MongoDB connected
Server running on http://localhost:5000
```

The backend API will run at:

```text
http://localhost:5000
```

---

# 🎨 Frontend Setup

Open a **second VS Code terminal**.

Move into the frontend folder:

```powershell
cd client
```

If your terminal starts from inside `server`, first run:

```powershell
cd ..
cd client
```

Install frontend dependencies:

```powershell
npm install
```

Start the React development server:

```powershell
npm run dev
```

Vite should display something similar to:

```text
Local: http://localhost:5173/
```

Open this address in your browser:

```text
http://localhost:5173
```

---

# 🧪 Add Sample Data

The project includes a seed script for sample books and members.

Make sure:

- MongoDB is connected
- The backend configuration is correct

Then run:

```powershell
cd server
npm run seed
```

The seed script adds sample books and members to the database.

After seeding, start the server again if required:

```powershell
npm run dev
```

---

# 🌐 REST API Endpoints

## Books API

### Get All Books

```http
GET /api/books
```

### Add a Book

```http
POST /api/books
```

Example request body:

```json
{
  "title": "Python Programming",
  "author": "John Smith",
  "category": "Programming",
  "isbn": "9781234567890",
  "quantity": 5
}
```

### Update a Book

```http
PUT /api/books/:id
```

### Delete a Book

```http
DELETE /api/books/:id
```

---

# 👥 Members API

### Get All Members

```http
GET /api/members
```

### Add a Member

```http
POST /api/members
```

Example request body:

```json
{
  "name": "Rahul Sharma",
  "email": "rahul@example.com",
  "phone": "9876543210"
}
```

### Update a Member

```http
PUT /api/members/:id
```

### Delete a Member

```http
DELETE /api/members/:id
```

---

# 🔄 Transactions API

## Get All Transactions

```http
GET /api/transactions
```

## Issue a Book

```http
POST /api/transactions/issue
```

Example request body:

```json
{
  "bookId": "BOOK_OBJECT_ID",
  "memberId": "MEMBER_OBJECT_ID",
  "issueDate": "2026-08-28"
}
```

## Return a Book

```http
PUT /api/transactions/:id/return
```

---

# 🗃️ Database Design

The project uses three main MongoDB collections.

## Books Collection

```text
_id
title
author
category
isbn
quantity
availableQuantity
createdAt
updatedAt
```

---

## Members Collection

```text
_id
name
email
phone
membershipDate
createdAt
updatedAt
```

---

## Transactions Collection

```text
_id
bookId
memberId
issueDate
returnDate
status
createdAt
updatedAt
```

---

# 🔁 Application Working Flow

When a user performs an action on the React frontend:

```text
User
 ↓
React Component
 ↓
Axios Request
 ↓
Express Route
 ↓
Controller
 ↓
Mongoose Model
 ↓
MongoDB
```

MongoDB sends the result back through the same layers:

```text
MongoDB
 ↓
Mongoose
 ↓
Controller
 ↓
Express JSON Response
 ↓
Axios
 ↓
React
 ↓
Updated User Interface
```

---

# 📖 Example Book Issue Flow

Suppose a book has:

```text
Quantity: 5
Available Quantity: 5
```

The librarian issues one copy.

The system creates a transaction:

```text
Status: Issued
```

and changes:

```text
Available Quantity
5 → 4
```

When the librarian returns the book:

```text
Status
Issued → Returned
```

and:

```text
Available Quantity
4 → 5
```

---

# 🧭 Main Application Pages

The project contains the following main pages:

## Dashboard

Shows library statistics and recent transactions.

## Books

Used to:

- Add books
- Edit books
- Delete books
- View availability

## Members

Used to:

- Add members
- Edit members
- Delete members

## Issue Book

Used to issue an available book to a member.

## Transactions

Used to:

- View all transactions
- Check issue/return dates
- Return issued books

---

# ✅ Validation Included

The project includes basic validation such as:

- Book title is required
- Book author is required
- Quantity cannot be negative
- Member name is required
- Member email is required
- Member phone number is required
- Email must be valid
- Duplicate member emails are rejected
- Books cannot be issued when no copy is available
- A returned transaction cannot be returned again
- Books with active issued copies cannot be deleted
- Members with active issued books cannot be deleted

---

# 🧪 Testing Checklist

Use the following steps to test the project.

- [ ] Backend starts successfully
- [ ] MongoDB connects successfully
- [ ] React frontend starts successfully
- [ ] Dashboard loads
- [ ] Book can be added
- [ ] Book can be edited
- [ ] Book can be deleted
- [ ] Member can be added
- [ ] Member can be edited
- [ ] Member can be deleted
- [ ] Book can be issued
- [ ] Available quantity decreases after issuing
- [ ] Transaction appears on the Transactions page
- [ ] Issued book can be returned
- [ ] Available quantity increases after returning
- [ ] Dashboard statistics update correctly
- [ ] Invalid form data is rejected
- [ ] Unavailable books cannot be issued

---

# 🎯 Recommended Project Demonstration

A simple project demo can follow this sequence:

1. Start the backend.
2. Start the frontend.
3. Open the Dashboard.
4. Add a new book.
5. Add a new member.
6. Issue the book to the member.
7. Check that available quantity decreases.
8. Open Transactions.
9. Return the book.
10. Check that available quantity increases.
11. Return to Dashboard and verify the updated statistics.

---

# 🛑 Common Errors and Solutions

## `node is not recognized`

Example:

```text
node : The term 'node' is not recognized
```

### Solution

Install Node.js LTS.

After installation:

1. Close VS Code completely.
2. Reopen VS Code.
3. Open a new terminal.
4. Run:

```powershell
node -v
npm -v
```

---

## `npm is not recognized`

This normally means Node.js is not installed correctly or is not available in Windows PATH.

Check:

```text
C:\Program Files\nodejs
```

Then restart VS Code.

---

## MongoDB Connection Failed

If you see a MongoDB connection error:

### For Local MongoDB

Make sure the MongoDB service is running.

Your `.env` should contain:

```env
MONGO_URI=mongodb://127.0.0.1:27017/library_management_system
```

### For MongoDB Atlas

Check:

- Username
- Password
- Database connection string
- Network Access IP settings
- Internet connection

---

## `Cannot find path 'server'`

Make sure you opened the correct project folder.

The terminal should be inside:

```text
library-management-system
```

Run:

```powershell
dir
```

You should see:

```text
client
server
README.md
```

Then:

```powershell
cd server
```

---

## Frontend Loads but Data Does Not Appear

Check that the backend is running:

```text
http://localhost:5000
```

You should receive a message similar to:

```json
{
  "message": "Library Management System API is running"
}
```

Then make sure the frontend is also running:

```text
http://localhost:5173
```

---

# 📦 Important npm Commands

## Backend

Install dependencies:

```powershell
cd server
npm install
```

Run development server:

```powershell
npm run dev
```

Run normal server:

```powershell
npm start
```

Insert sample data:

```powershell
npm run seed
```

---

## Frontend

Install dependencies:

```powershell
cd client
npm install
```

Run development server:

```powershell
npm run dev
```

Create production build:

```powershell
npm run build
```

Preview production build:

```powershell
npm run preview
```

---

# 🔐 Security Notes

- Do not upload `.env` to GitHub.
- Do not expose MongoDB passwords publicly.
- Use MongoDB Atlas environment variables when deploying.
- Validate user input before saving data.
- Use authentication before deploying the system for real-world use.

---

# 📤 GitHub Upload

The following files/folders should be uploaded:

```text
client/
server/
README.md
.gitignore
```

Do **not** upload:

```text
node_modules/
server/.env
client/dist/
```

The included `.gitignore` helps prevent these files from being uploaded.

---

# 🔮 Future Enhancements

The project can later be improved with:

- Admin login and authentication
- Role-based access
- Book search
- Category filters
- Fine calculation for late returns
- Due dates
- Email notifications
- Book cover images
- Pagination
- Reports
- Charts and analytics
- Member borrowing history
- ISBN search
- Cloud deployment
- Responsive mobile navigation
- Dark mode

---

# 🎓 Learning Outcomes

This project demonstrates:

- React frontend development
- React Router navigation
- Component-based UI design
- REST API development
- Express routing
- Controller-based backend structure
- MongoDB CRUD operations
- Mongoose schemas and models
- Axios API integration
- Full-stack validation
- Frontend/backend communication
- Database relationships
- Git and GitHub project organization

---

# 💡 Viva / Interview Explanation

If asked to explain the project briefly:

> The Library Management System is a MERN stack web application used to manage books, members, and issue/return transactions. React is used for the frontend, Node.js and Express.js provide REST APIs, MongoDB stores the application data, and Mongoose is used to interact with MongoDB. When a librarian issues a book, the system creates a transaction and decreases the available quantity. When the book is returned, the transaction status changes to Returned and the available quantity increases.

---

# 📌 Project Type

```text
Academic Project
Beginner Full-Stack Project
MERN Stack Project
CRUD Application
```

---

# 👨‍💻 Author

**Avirup Ghosh**

Data Science / Computer Science Student

---

# 📄 License

This project is intended primarily for educational and academic use.

You may modify and extend it for learning, portfolio, academic demonstrations, and personal projects.

---

# ⭐ Final Note

This project demonstrates a complete beginner-friendly MERN application containing:

```text
Frontend
+
Backend
+
REST API
+
Database
+
CRUD Operations
+
Issue / Return Logic
```

To run the project successfully, make sure both servers are running:

```text
Backend  → http://localhost:5000
Frontend → http://localhost:5173
```

Happy Coding! 🚀
