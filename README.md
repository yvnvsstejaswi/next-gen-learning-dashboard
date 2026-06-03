# Next-Gen Learning Dashboard

A modern student dashboard built using Next.js, Supabase, Tailwind CSS, Framer Motion, and Lucide React.

## Features

* Dynamic course cards fetched from Supabase
* Animated progress bars
* Bento-style dashboard layout
* Dark mode user interface
* Responsive design
* Loading skeletons
* Error handling
* Lucide React icons
* Framer Motion animations

## Tech Stack

* Next.js (App Router)
* TypeScript
* Supabase
* Tailwind CSS
* Framer Motion
* Lucide React

## Environment Variables

Create a `.env.local` file:

NEXT_PUBLIC_SUPABASE_URL=

NEXT_PUBLIC_SUPABASE_ANON_KEY=

## Architecture

* Server Components fetch course data from Supabase.
* Client Components handle animations using Framer Motion.
* Tailwind CSS is used for styling and responsive layouts.

## Setup

npm install

npm run dev

## Deployment

The project can be deployed on Vercel by adding the required Supabase environment variables.
