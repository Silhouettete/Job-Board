# AI-Powered Recruitment Platform

A full-stack recruitment platform where companies post jobs and candidates apply — with AI-assisted workflows running in the background via background jobs.

**Live:** [job-board-blond-three.vercel.app](https://job-board-blond-three.vercel.app)

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=flat-square&logo=postgresql&logoColor=white)
![Clerk](https://img.shields.io/badge/Clerk-Auth-6C47FF?style=flat-square)
![Inngest](https://img.shields.io/badge/Inngest-Background_Jobs-000?style=flat-square)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)

---

## Features

- **Job listings** — companies can post, edit, and manage job openings
- **Candidate applications** — apply to roles with application tracking
- **Authentication** — secure sign-up/sign-in via Clerk (OAuth + email)
- **Background job processing** — async workflows handled by Inngest (e.g. application notifications, AI-triggered events)
- **Role-based access** — separate flows for employers and candidates
- **Fully deployed** — live on Vercel with a managed PostgreSQL database

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Database | PostgreSQL |
| ORM | Drizzle ORM |
| Auth | Clerk |
| Background Jobs | Inngest |
| Styling | Tailwind CSS + shadcn/ui |
| Containerisation | Docker / docker-compose |
| Deployment | Vercel |

---

## Project Structure

```
src/
├── app/                  # Next.js App Router pages and API routes
│   ├── api/inngest/      # Inngest function handler
│   └── (routes)/         # Application pages
├── components/           # Shared UI components
├── db/                   # Drizzle schema and database client
└── inngest/              # Background job definitions
```

---

## Deployment

The app is deployed on **Vercel**. Environment variables are configured via the Vercel dashboard.

For the Inngest background jobs to work in production, add your `/api/inngest` endpoint as a webhook in the Inngest dashboard.

---


