# Finite Automata & Regular Languages Learning Platform

A full-stack web application for learning finite automata, regular languages, and grammar-based problem solving. It combines a secure Node.js/Express API with a modern React frontend to deliver interactive modules, instructor content, student progress tracking, and automata exercises.

## Overview

This project is designed for students and instructors studying formal languages and automata theory. Users can:

- create an account and sign in securely
- browse and enroll in learning modules
- complete module content and track progress
- view instructor profiles and learning resources
- solve grammar and automata exercises
- check whether generated words are accepted by a grammar
- generate possible words from a grammar
- use a playground for finite automata experimentation

## Tech Stack

### Frontend

- React 18
- Vite
- Tailwind CSS
- React Router
- Axios
- Chart.js / react-chartjs-2
- reactflow for automata visualization and interactions

### Backend

- Node.js
- Express.js
- MongoDB via Mongoose
- JWT authentication
- BCrypt password hashing
- CORS and dotenv configuration

## Project Structure

```text
finite-automata/
├── backend/
│   ├── configs/
│   ├── controllers/
│   ├── data/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
├── .env
├── package.json
├── render.yaml
└── README.md
```

## Key Features

### Student Experience

- Sign up and login with role-based access
- View dashboard statistics and progress
- Browse available learning modules
- Enroll in and complete modules
- See exercise results and performance metrics

### Instructor Experience

- Upload and manage learning modules
- View instructor directory and course materials
- Track student activity and module completion

### Automata & Grammar Tools

- Generate grammar-based exercises
- Check whether user-entered words are valid for a grammar
- Generate possible word strings from a grammar
- Explore automata logic in a playground environment

## Environment Variables

Create a `.env` file in the project root with the following variables:

```env
PORT=3000
MONGO_URL=mongodb://localhost:27017/finite_automata
SECRET_KEY=your_super_secret_key
```

### Notes

- `MONGO_URL` can point to a local MongoDB instance or a MongoDB Atlas cluster.
- `SECRET_KEY` is used to sign JWT tokens for user authentication.
- `PORT` controls the backend server listen port.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Washington-Kimani/finite-automata.git
cd finite-automata
```

2. Install root dependencies:

```bash
npm install
```

3. Install frontend dependencies:

```bash
npm install --prefix frontend
```

## Running the App

### Development mode

This runs both the backend and frontend concurrently:

```bash
npm run dev
```

This project is configured so the backend starts with:

```bash
npm run server
```

And the frontend starts with:

```bash
npm run client
```

### Production mode

To start the backend server only:

```bash
npm start
```

To build the frontend for production:

```bash
npm run build
```

## Scripts

From the root `package.json`:

- `npm run dev` — start both backend and frontend together
- `npm run server` — run the Express API with nodemon
- `npm run client` — run the Vite frontend
- `npm start` — run the production backend server
- `npm run build` — install dependencies and build the frontend bundle

## Deployment

This repository includes a `render.yaml` file for deployment on Render.

It defines:

- a Node.js backend service
- a static frontend service
- production environment variables
- build and start commands for each service

## Backend API Overview

The Express app exposes routes for authentication, modules, users, instructor data, progress tracking, grammar generation, and exercise results. Some of the main routes include:

- `/register` — user registration
- `/login` — authentication
- `/users` — user data access
- `/modules` — module management and listing
- `/enroll` — enroll students in modules
- `/enrolled` — fetch enrolled modules
- `/instructors` — instructor information
- `/generate` — generate grammar examples
- `/check` — validate grammar answers
- `/generateWords` — generate possible word outputs
- `/results` — store and retrieve exercise results
- `/playground` — finite automata interaction endpoint

## Notes

This project is intended as an educational platform for automata theory and regular language learning. It is designed for local development and can be deployed to cloud hosting with the included Render configuration.

## License

This project currently does not declare a specific open-source license. If you plan to distribute it publicly, add an appropriate license file and update this section.
