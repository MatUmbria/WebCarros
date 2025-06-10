# WebCarros

**WebCarros** is a web platform for car advertisements. It allows users to post, browse, and manage car listings with a modern and responsive interface.

---

## 🚀 Features

- 🔍 Filtering and sorting of car listings  
- 🔐 Firebase authentication  
- ✅ Form validation with Zod  
- 🖼️ Image gallery using Swiper  
- ⚛️ Built with React, Vite, and TypeScript  
- 📱 Fully responsive with Tailwind CSS

---

## 🧰 Tech Stack

- **React 19** – UI library  
- **TypeScript** – Static typing  
- **Vite** – Frontend build tool  
- **Tailwind CSS** – Utility-first CSS framework  
- **Firebase** – Backend services (auth, DB)  
- **React Hook Form + Zod** – Form management and validation  
- **React Router DOM** – SPA routing  
- **Swiper** – Image slider

---

## 📦 Dependencies

### Core Libraries
- `react`, `react-dom` – UI rendering
- `react-router-dom` – Routing system
- `typescript` – Type checking

### Styling
- `tailwindcss`, `@tailwindcss/vite` – CSS styling with Vite integration

### Forms & Validation
- `react-hook-form` – Handle form state
- `zod` – Schema validation
- `@hookform/resolvers` – Integration between form and Zod

### Firebase
- `firebase` – Authentication and Firestore database

### Utilities
- `uuid` – Unique ID generation
- `localforage` – Offline local storage
- `sort-by`, `match-sorter` – Sorting and searching
- `rod` – Small utility library

### UI
- `swiper` – Carousels
- `react-hot-toast` – Toast notifications
- `react-icons` – Icon components

---

## 📁 Project Structure

```
src/
├── components/        # Reusable UI elements
├── hooks/             # Custom hooks
├── pages/             # Route-based pages
├── styles/            # Tailwind config & base styles
├── utils/             # Helper functions
├── firebase.ts        # Firebase config
└── main.tsx           # App entry point
```

---

## 📥 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/MatUmbria/webcarros.git
cd webcarros
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run in development mode

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

### 5. Preview the production build

```bash
npm run preview
```

---

## 📑 Available Scripts

- `npm run dev` – Start development server  
- `npm run build` – Build project for production  
- `npm run preview` – Preview production build  
- `npm run lint` – Lint the project with ESLint  

---

## 📝 License

This project was created for educational purposes and is not intended for commercial use.

---

## 📬 Contact

- 📧 Email: [mateusumbria@gmail.com](mailto:mateusumbria@gmail.com)  
- 🧑‍💻 GitHub: [MatUmbria](https://github.com/MatUmbria)
