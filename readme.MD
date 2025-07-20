# JWT Authenticated REST API

This is a simple RESTful API built with **Node.js** and **Express.js**, which uses **JSON Web Tokens (JWT)** for authentication. It includes protected routes and secure token handling.

## 🚀 Features

- User login and JWT token generation
- Protected `/posts` route accessible only with valid token
- JWT token expires after 15 minutes
- Handles invalid and expired tokens gracefully

## 📁 Project Structure

├── index.js # Main server file
├── .env # Environment variables (keep secret)
├── .gitignore # Ignores node_modules and .env
├── package.json
└── README.md

## 📦 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2.Install dependencies:

3. Create a .env file in the root with:


ACCESS_TOKEN_SECRET=your_secret_key_here

4. Run node server.js
```
