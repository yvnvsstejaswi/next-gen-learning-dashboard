# Next-Gen Learning Dashboard

A modern learning dashboard built using Next.js, Supabase, Tailwind CSS, Framer Motion, and Lucide React. The application provides an interactive learning experience with dynamic course tracking, animated UI components, and a responsive design optimized for desktop and mobile devices.

---

## Live Demo

https://next-gen-learning-dashboard-clwx008za.vercel.app

---

## GitHub Repository

https://github.com/yvnvsstejaswi/next-gen-learning-dashboard

---

## Screenshots

### Desktop View

![Desktop Dashboard](./screenshots/dashboard-desktop.png)

### Mobile View

![Mobile Dashboard](./screenshots/dashboard-mobile.png)

---

## Features

- Dynamic course data fetched from Supabase
- Animated progress bars using Framer Motion
- Responsive Bento-style dashboard layout
- Modern dark-themed user interface
- Dynamic Lucide React icons
- Weekly activity visualization
- Loading skeletons for improved user experience
- Error handling with a custom error page
- TypeScript support for type safety
- Mobile-responsive design

---

## Tech Stack

### Frontend

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

### Backend & Database

- Supabase

### Deployment

- Vercel

---

## Architecture

- Server Components fetch course data directly from Supabase.
- Client Components manage animations and interactive UI elements.
- Tailwind CSS handles styling and responsive layouts.
- Framer Motion powers smooth transitions and animations.
- Supabase stores and serves course information dynamically.

---

## Database Schema

### Courses Table

| Column | Type |
|----------|----------|
| id | UUID |
| title | Text |
| progress | Integer |
| icon_name | Text |
| created_at | Timestamp |

---

## Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

---

## Installation and Setup

Clone the repository:

```bash
git clone https://github.com/yvnvsstejaswi/next-gen-learning-dashboard.git
```

Navigate to the project folder:

```bash
cd next-gen-learning-dashboard
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Responsive Design

The dashboard is optimized for:

- Desktop devices
- Tablet devices
- Mobile devices

---

## Assignment Requirements Covered

- Next.js App Router
- Supabase Integration
- Tailwind CSS Styling
- Framer Motion Animations
- Lucide React Icons
- Dynamic Data Fetching
- Responsive Dashboard Layout
- Loading State
- Error Handling
- TypeScript Interfaces
- Vercel Deployment

---

## Author

Yarasuri V N V Sai Sri Tejaswi

MCA Student | Frontend Developer | AI and Data Enthusiast

GitHub: https://github.com/yvnvsstejaswi

LinkedIn: Add your LinkedIn profile link here

https://www.linkedin.com/in/yarasuri-v-n-v-sai-sri-tejaswi

## License

This project was developed as part of a Frontend Intern Technical Challenge.