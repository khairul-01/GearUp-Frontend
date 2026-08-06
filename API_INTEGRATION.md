# API Integration Documentation

This document provides an overview of how the frontend integrates with the backend REST API.

---

# Base URL

Development

```text
http://localhost:5000/api
```

Production

```text
https://your-backend.vercel.app/api
```

---

# Authentication

| Frontend | Method | Endpoint | Description |
|----------|--------|----------|-------------|
| Register Page | POST | `/auth/register` | Register new user |
| Login Page | POST | `/auth/login` | Authenticate user |
| Navbar | GET | `/auth/me` | Get logged in user |
| Middleware | JWT Cookie | Protected Routes | Verify authenticated user |

---

# Public Pages

## Home Page

| Component | Method | Endpoint |
|----------|--------|----------|
| FeaturedGear | GET | `/gear?limit=6` |
| BrowseByCategory | GET | `/categories` |

---

## Gear Listing

| Component | Method | Endpoint |
|----------|--------|----------|
| Gear Page | GET | `/gear` |
| Search | GET | `/gear?search=keyword` |
| Category Filter | GET | `/gear?categoryId=id` |
| Pagination | GET | `/gear?page=1&limit=12` |

---

## Gear Details

| Component | Method | Endpoint |
|----------|--------|----------|
| Gear Details Page | GET | `/gear/:id` |

---

# Customer Module

## Customer Dashboard

| Component | Method | Endpoint |
|----------|--------|----------|
| Stats Cards | GET | `/rentals` |
| Recent Orders | GET | `/rentals` |

---

## Rental

| Component | Method | Endpoint |
|----------|--------|----------|
| Rent Button | POST | `/rentals` |
| Rental Details | GET | `/rentals/:id` |
| My Orders | GET | `/rentals` |

---

## Payment

| Component | Method | Endpoint |
|----------|--------|----------|
| Payment Button | POST | `/payments/create` |
| Stripe Webhook | POST | `/payments/confirm` |
| Payment Success | Redirect | Stripe Success URL |
| Payment Cancel | Redirect | Stripe Cancel URL |

---

## Review

| Component | Method | Endpoint |
|----------|--------|----------|
| Create Review Form | POST | `/reviews` |

---

# Provider Module

## Dashboard

| Component | Method | Endpoint |
|----------|--------|----------|
| Provider Stats | GET | `/provider/gear` |
| Provider Orders | GET | `/provider/orders` |

---

## Gear Management

| Component | Method | Endpoint |
|----------|--------|----------|
| Add Gear | POST | `/provider/gear` |
| Edit Gear | PATCH | `/provider/gear/:id` |
| Delete Gear | DELETE | `/provider/gear/:id` |
| Gear List | GET | `/provider/gear` |

---

## Order Management

| Component | Method | Endpoint |
|----------|--------|----------|
| Orders Table | GET | `/provider/orders` |
| Update Status | PATCH | `/provider/orders/:id` |

---

# Admin Module

## Dashboard

| Component | Method | Endpoint |
|----------|--------|----------|
| Users Table | GET | `/admin/users` |
| Rentals Table | GET | `/admin/rentals` |
| Categories Table | GET | `/categories` |

---

## User Management

| Component | Method | Endpoint |
|----------|--------|----------|
| Update User Status | PATCH | `/admin/users/:id` |

---

## Category Management

| Component | Method | Endpoint |
|----------|--------|----------|
| Create Category | POST | `/admin/categories` |
| Category List | GET | `/categories` |

---

# Authentication Flow

```text
Login
   │
   ▼
JWT Generated
   │
   ▼
Stored in HTTP Only Cookie
   │
   ▼
Protected API Request
   │
   ▼
Authorization Middleware
```

---

# Payment Flow

```text
Customer
   │
   ▼
Create Rental
   │
   ▼
Provider Confirms
   │
   ▼
Stripe Checkout
   │
   ▼
Stripe Webhook
   │
   ▼
Payment Completed
   │
   ▼
Rental Status Updated
```

---

# Error Handling

The frontend provides consistent user-friendly error handling across the application.

- Toast notifications for API responses
- Inline form validation errors
- Loading indicators
- Empty state components
- Error boundaries for unexpected failures
- Friendly fallback messages for network errors

---

# Data Fetching Strategy

| Feature | Strategy |
|----------|----------|
| Public Pages | Server Components |
| Dashboard Pages | Server Components |
| Forms | Server Actions |
| CRUD Operations | Server Actions + Revalidation |
| Authentication | HTTP Only Cookies |
| Protected Routes | Next.js Middleware |

---

# Technologies Used

## Frontend

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS
- Shadcn UI

## Backend

- Express.js
- Prisma ORM
- PostgreSQL
- JWT
- Stripe
- Zod

---

This document maps all major frontend pages and components to their corresponding backend API endpoints, ensuring clear traceability between the user interface and backend services.