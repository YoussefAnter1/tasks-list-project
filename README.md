# Tasks List Project

![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![Prisma](https://img.shields.io/badge/Prisma-7.8-2D3748?style=for-the-badge&logo=prisma)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-8.21-336791?style=for-the-badge&logo=postgresql)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)

## 📝 Description

A robust and modern Task Management application built with Next.js and Prisma. It provides a seamless user experience for managing daily tasks, utilizing a PostgreSQL database for reliable data storage. The project is designed with best practices, including strong typing with TypeScript and data validation using Zod.

## 🚀 Technologies Used

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **UI Library**: [React](https://reactjs.org/)
- **Database ORM**: [Prisma](https://www.prisma.io/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Validation**: [Zod](https://zod.dev/)
- **Notifications**: [React Toastify](https://fkhadra.github.io/react-toastify/)

## ✨ Features

- **Task Management**: Create, read, update, and delete tasks (CRUD operations).
- **Database Integration**: Reliable and type-safe database queries with Prisma ORM and PostgreSQL.
- **Form Validation**: Strict schema validation using Zod for robust data handling.
- **Toast Notifications**: Interactive user feedback with React Toastify.
- **Responsive Design**: Mobile-first styling powered by Tailwind CSS.

## 🛠️ Installation

Follow these steps to set up the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YoussefAnter1/tasks-list-project.git
   cd tasks-list-project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add your PostgreSQL database connection string:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/tasks_db"
   ```

4. **Initialize the database:**
   Push the schema to your database (Prisma Client generates automatically via `postinstall`):
   ```bash
   npx prisma db push
   ```

## 💻 Run Locally

To start the development server, run:

```bash
npm run dev
```

Open [http://localhost:4000](http://localhost:4000) in your browser to view the application.

## 📜 Scripts

Here are the available npm scripts for this project:

- `npm run dev`: Starts the development server on port 4000.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server on port 4000.
- `npm run lint`: Runs ESLint to check for code issues.
- `npm run postinstall`: Automatically generates the Prisma client.

## 📂 Project Structure

```text
tasks-list-project/
├── app/               # Next.js App Router pages, layouts, and API routes
├── components/        # Reusable React UI components
├── prisma/            # Prisma schema, migrations, and database configuration
├── public/            # Static assets like images and icons
├── utils/             # Helper functions and utilities
├── .env               # Environment variables
├── package.json       # Project metadata and dependencies
└── tsconfig.json      # TypeScript configuration
```

## 🔮 Future Improvements

- [ ] Add user authentication (e.g., NextAuth.js / Auth.js).
- [ ] Implement task categorization and labeling.
- [ ] Add search and filtering capabilities.
- [ ] Support drag-and-drop task reordering.
- [ ] Add dark mode toggle support.

---

*Developed by [Youssef Anter](https://github.com/YoussefAnter1).*
