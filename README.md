# Collab Task Manager

## 📌 Overview
**Collab Task Manager** is a collaborative task management application designed to help teams efficiently create, assign, and track tasks within projects. Built with **React, TypeScript, Supabase, Express, and Tailwind CSS**, this app offers a seamless workflow for project management with user authentication, real-time updates, and a modern UI.

## 🚀 Features
- ✅ **Create, Read, Update, Delete (CRUD) Tasks**
- ✅ **Assign Tasks to Team Members**
- ✅ **Project-Based Task Organization**
- ✅ **Real-time Sync with Supabase**
- ✅ **Modern UI with Tailwind CSS**
- ✅ **API Built with Express & TypeScript**

## 🛠️ Tech Stack
### **Frontend (Client)**
- ⚛ **React** with **TypeScript**
- 🎨 **Tailwind CSS** for styling
- 🔄 **React Router** for navigation

### **Backend (API)**
- 🚀 **Express.js** with **TypeScript**
- 🛢️ **Supabase** (PostgreSQL) as the database

## 📂 Project Structure
```bash
collab-task-manager/
├── client/                # React Frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components (Dashboard, Login, etc.)
│   │   ├── hooks/         # Custom React hooks
│   │   ├── types/         # TypeScript type definitions
│   │   ├── api/           # API functions
│   │   ├── styles/        # Tailwind CSS styles
│   │   ├── App.tsx        # Main App component
│   │   ├── main.tsx       # Entry point
│   ├── public/            # Static assets
│   ├── package.json       # Dependencies
│   ├── vite.config.ts     # Vite configuration
│
├── server/                # Express API
│   ├── src/
│   │   ├── routes/        # API routes
│   │   ├── controllers/   # Business logic
│   │   ├── middlewares/   # Express middlewares
│   │   ├── types/         # TypeScript type definitions
│   │   ├── index.ts       # Entry point
│   ├── package.json       # Dependencies
│
├── README.md              # Documentation
├── .gitignore             # Ignore files for Git
```

## 🎯 Getting Started
### 1️⃣ **Clone the Repository**
```bash
git clone https://github.com/aamorimsimoes/collab-task-manager.git
cd collab-task-manager
```

### 2️⃣ **Setup the Backend (API)**
```bash
cd server
npm install
cp .env.example .env  # Set up environment variables
npm run dev  # Start the server
```

### 3️⃣ **Setup the Frontend (Client)**
```bash
cd ../client
npm install
npm run dev  # Start the frontend
```

### 4️⃣ **Open the App**
Visit `http://localhost:5173/` in your browser.

## 🔐 Environment Variables
Create a `.env` file in both the **server** and **client** directories with the following variables:

### **Backend (`server/.env`)**
```
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_api_key
```

### **Frontend (`client/.env`)**
```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_KEY=your_supabase_api_key
```

## 🧪 Running Tests
- **Backend Tests** (with Vitest)
  ```bash
  cd server
  npm run test
  ```
- **Frontend Tests** (with React Testing Library & Vitest)
  ```bash
  cd client
  npm run test
  ```

---

**Enjoy Collab Task Manager!** 🚀

