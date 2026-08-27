# Library Management System (MERN)

A complete beginner-friendly MERN project for managing books, members, and issue/return transactions.

## Features
- Dashboard: total book copies, members, currently issued, returned
- Books: add, view, edit, delete
- Members: add, view, edit, delete
- Issue books only when a copy is available
- Return issued books
- Transaction history
- MongoDB + Mongoose persistence
- Responsive React UI
- Validation and helpful error messages

## Requirements
- Node.js 18+
- MongoDB Community Server or MongoDB Atlas
- VS Code

## Run in VS Code

### 1) Configure MongoDB
Copy `server/.env.example` to `server/.env`.
For local MongoDB, keep:
```env
MONGO_URI=mongodb://127.0.0.1:27017/library_management_system
PORT=5000
```
For MongoDB Atlas, replace `MONGO_URI` with your Atlas connection string.

### 2) Backend
```bash
cd server
npm install
npm run dev
```

### 3) Frontend
Open a second terminal:
```bash
cd client
npm install
npm run dev
```
Open `http://localhost:5173`.

### Optional sample data
```bash
cd server
npm run seed
```

## API
- GET/POST `/api/books`
- PUT/DELETE `/api/books/:id`
- GET/POST `/api/members`
- PUT/DELETE `/api/members/:id`
- GET `/api/transactions`
- POST `/api/transactions/issue`
- PUT `/api/transactions/:id/return`

## Demo flow
1. Add a book with quantity 5.
2. Add a member.
3. Issue the book.
4. Available quantity changes 5 -> 4.
5. Return the book.
6. Available quantity changes 4 -> 5.

Do not upload your real `.env` file to GitHub.
