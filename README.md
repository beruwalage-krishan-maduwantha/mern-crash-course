# 🛒 MERN Product Store

A full-stack product management web application built with the MERN stack. Built as part of a MERN crash course to learn full-stack development with React, Node.js, Express, and MongoDB.

![MERN](https://img.shields.io/badge/MERN-Stack-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb)

---

## ✨ Features

- View all products in a responsive grid
- Add new products with name, price, and image
- Edit existing products with a modal popup
- Delete products
- Light / Dark mode toggle
- Toast notifications for all actions

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite, Chakra UI v2, React Router |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas, Mongoose |

---

## 📁 Project Structure

```
mern-crash-course/
├── backend/
│   ├── config/         # MongoDB connection
│   ├── controllers/    # Product logic
│   ├── models/         # Mongoose schema
│   ├── routes/         # API routes
│   └── server.js
└── frontend/
    └── src/
        ├── components/ # Navbar, ProductCard
        └── pages/      # HomePage, CreatePage
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js
- MongoDB Atlas account

### 1. Clone the repo
```bash
git clone https://github.com/beruwalage-krishan-maduwantha/mern-crash-course.git
cd mern-crash-course
```

### 2. Setup Backend
```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

```bash
npm run dev
```

### 3. Setup Frontend
```bash
cd ../frontend
npm install
npm run dev
```

### 4. Open in browser
| URL | Description |
|-----|-------------|
| `http://localhost:5173` | Product Store UI |
| `http://localhost:5000/api/products` | REST API |

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| POST | `/api/products` | Create a product |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |

---

## 👨‍🎓 About

Built as a learning project by **Krishan Maduwantha Beruwlage**  
Higher Diploma in Computing & Software Engineering  
ICBT Campus, Galle (Cardiff Metropolitan University, UK)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).