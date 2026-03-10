# 🚀 Product Launchpad

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?logo=typescript)
![NeonDB](https://img.shields.io/badge/NeonDB-PostgreSQL-blue?logo=postgresql)
![Drizzle ORM](https://img.shields.io/badge/Drizzle-ORM-green)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4-cyan?logo=tailwindcss)
![Clerk](https://img.shields.io/badge/Clerk-Auth-purple)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## 📌 Overview

**Product Launchpad** is a full-stack community platform built for creators to showcase their apps, AI tools, SaaS products, and creative projects. 

Built with the modern Next.js ecosystem, the application provides a secure, authenticated environment where builders can submit their work, gather genuine feedback, and discover what others are launching. It features a robust community voting system, comprehensive admin moderation tools, and SEO-optimized dynamic product pages.

---

## ✨ Features

### 🚀 Discovery & Engagement
- **Community Voting System:** Users can upvote their favorite tools.
- **Dynamic Featured Section:** Automatically highlights top-tier products (e.g., products with over 100 votes).
- **Tag-Based Categorization:** Easily filter and discover projects by tech stack or niche.
- **SEO-Friendly Product Pages:** Optimized for search engines to help creators gain visibility.

### 🛡️ Admin & Moderation Dashboard
- Dedicated admin panel to review, approve, and reject user-submitted products.
- Secure, protected routes ensuring only authorized admins can access moderation tools.
- Customized fallback pages for unauthorized access attempts.

### 🔐 Authentication & Security
- Secure authentication powered by **Clerk** (Passkeys, GitHub, and Google Sign-in).
- Protected API endpoints and server actions.
- Secure file handling and image processing for product uploads.

### 📝 Submission & Data Handling
- Seamless product submission forms using **React Hook Form**.
- Strict client and server-side schema validation with **Zod**.
- Real-time updates and Next.js path revalidation for instant UI reflections.

### 🎨 Modern, Interactive UI
- Fully responsive design for mobile and desktop viewing.
- Beautiful, accessible, and customizable components using **Shadcn UI**.
- Styled with **TailwindCSS 4**.
- Interactive toast notifications for submission statuses and error handling.

---

## 🛠 Tech Stack

### Frontend
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Shadcn UI
- React Hook Form
- Zod (Schema Validation)

### Backend
- Next.js Server Components & Server Actions
- Clerk (Authentication & Session Claims)
- TypeScript

### Database & ORM
- NeonDB (Serverless PostgreSQL)
- Drizzle ORM (Type-safe queries and migrations)

---

## 📂 Project Structure

```text
product-launchpad/
│
├── src/
│   ├── app/              # Next.js App Router pages and API routes
│   ├── components/       # Reusable UI components (Shadcn, etc.)
│   ├── db/               # Drizzle schema and database connection
│   ├── lib/              # Utility functions and Zod schemas
│  
├── public/               # Static assets
├── .env                  # Environment variables
└── README.md

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# NeonDB / PostgreSQL
DATABASE_URL=your_neon_postgres_connection_string


npm install
# or
yarn install
# or
pnpm install

npm run db:push
# or your specific drizzle migration script

npm run dev