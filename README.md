# Vape Web Backend

This is the backend service for the Vape Web full stack project. It powers the product catalog, cart system, and admin dashboard functionality.

## 🛠️ Technologies Used

- Node.js + Express.js
- PostgreSQL (via DBeaver for local dev)
- MVC Architecture (Models, Controllers, Routes)
- ThunderClient / Postman for testing
- Git for version control

---

## 🚀 Project Structure

```
MYVAPESHOP/
│
├── controllers/     # Logic for handling API requests
├── models/          # Database interaction (SQL queries)
├── routes/          # API endpoints definition
├── public/          # Frontend static files (HTML, CSS, JS)
├── .env             # Local database config
├── .gitignore       # Excludes node_modules from repo
├── package.json     # Project metadata and dependencies
└── server.js        # Main Express app entry point
```

---

## 🧪 How to Run This Project

### 1. Clone the repository

```bash
git clone https://github.com/ShreyaJayas33/vape-web-backend.git
cd vape-web-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup your `.env` file

Create a `.env` file in the root with the following content:

```
DB_HOST=localhost
DB_PORT=5432
DB_NAME=vapeweb
DB_USER=your_postgres_user
DB_PASSWORD=your_postgres_password
PORT=5055
```

> 💡 Replace values with your local PostgreSQL setup

---

### 4. Start the server

```bash
node server.js
```

Server will start on:
```
http://localhost:5055
```

---

## 🔌 API Endpoints

### 📜 Products
- `GET /api/products`
- `GET /api/products/:id`
- `GET /api/products/search?query=ice`
- `GET /api/products/category/:category_id`

### 🛒 Cart
- `GET /api/cart`
- `POST /api/cart`
- `DELETE /api/cart/:cart_id`
- `POST /api/cart/checkout`

### 🔐 Admin
- `POST /api/admin/products`
- `PUT /api/admin/products/:id`
- `POST /api/admin/products/bulk`

---

## 📄 License

This project is part of the UNCG Full Stack Web Development coursework. Created by **Shreya Jayas**.
