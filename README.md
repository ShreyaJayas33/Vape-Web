# MYVAPESHOP
# Note: Please scroll down to check the final project deliverable section. A video walkthrough of my work has been added to this directory.
[![Watch the video](https://img.youtube.com/vi/AA8CFZpZ0a8/maxresdefault.jpg)](https://youtu.be/AA8CFZpZ0a8)

### [Watch this video on YouTube](https://youtu.be/AA8CFZpZ0a8)
---
## Before final project section!!
This is the backend service for the Vape Web full-stack project. It powers the product catalog, cart system, and admin dashboard functionality.

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

# Final-Project Deliverable 
## Taken steps according to project description. 

# 🌬️ Vape Web — A little Overview

This project is a multi-view rendering demo for a vape e-commerce platform. It covers:

- ✅ Client-Side Rendering (with `fetch()`)
- ✅ Server-Side Rendering using EJS
- ✅ Server-Side Rendering using Pug
- ✅ Client-Side Rendering using React + Axios

---

## ✅ Step 1: Client-Side Rendering with JavaScript (`fetch()`)

### 🔧 Features Implemented
- JS files: `products.js`, `details.js` added to public HTML.
- Data is dynamically loaded via `fetch("/api/products/json")`.
- DOM is populated via JavaScript on page load.
- Console debug logs confirm successful data fetch.

### 📄 HTML View
- `products.html` and `details.html` use vanilla JS to fetch and populate content.

### 🔍 How to Test
- Open `public/products.html` or `public/details.html` in browser.
- Check console: You should see "✅ Products from backend".

---

## ✅ Step 2: Server-Side Rendering with EJS

### 🔧 Features Implemented
- Views located in `/views`
- HTML files converted to `.ejs` (e.g., `products.ejs`, `details.ejs`)
- Controller uses `res.render("products", { products })` for SSR.
- Hardcoded HTML replaced with EJS syntax (`<%= product.name %>` etc.)

### 🔍 How to Test
- Visit: [http://localhost:5055/api/products](http://localhost:5055/api/products)
- Page renders with live database content.
- Inspect source: dynamic values embedded directly into the HTML.

---
## ✅ Step 3: Server-Side Rendering with Pug

### 🔧 Features Implemented
- Views located in `/views-pug`
- Pug templates created from scratch
- Express is configured with:
  ```js
  app.set("view engine", "pug");
  app.set("views", path.join(__dirname, "views-pug"));
- Controller passes both `products` and `galleryItems` into Pug view
- Fixed inline `const` syntax error in `.pug` by moving data to controller

### 🛠 Debug Fix Highlights
- ❌ Pug cannot define const inline — this caused `SyntaxError`.
- ✅ Moved `galleryItems` into the controller.
- ✅ Template now uses:
```
each item in galleryItems
  .gallery-item
    img(src="...", alt=item)
    p= item
```

### 🔍 How to Test
Visit: [http://localhost:5055/api/products/pug](http://localhost:5055/api/products/pug)
- Confirm Pug SSR layout and gallery grid.
---

## ✅ Step 4: Client-Side Rendering with React + Axios
### 🔧 Features Implemented
- React app located in `/myvapeshop-react`
- Uses axios to call `/api/products/json`
- Functional component with `useEffect() + useState()`

### 🛠 Fixes Done
- Backend cors() enabled in Express.
- Moved React app inside main project folder without submodule conflict.
- Added `.gitignore` to ignore `node_modules`.

### 🔍 How to Test
- Run backend: `node server.js`
- Start React: `npm start` inside myvapeshop-react
- Visit: [http://localhost:3000](http://localhost:3000)
- Products render as a list with dynamic DB data.

## Final Folder Structure 
```
├── MYVAPESHOP/               # Express + PostgreSQL backend
├── myvapeshop-react/         # React frontend (no longer a submodule)
├── views/                    # EJS templates
├── views-pug/                # Pug templates
├── public/                   # Static HTML & JS
├── routes/
├── controllers/
├── models/

```
