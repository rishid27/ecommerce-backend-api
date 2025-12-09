# E-commerce Backend API (Assignment)

Tech stack: **Node.js + Express.js + MongoDB + Mongoose + JWT + bcrypt + express-validator**

This project implements:

- Authentication & Authorization
  - Register (customer/admin)
  - Login with JWT
  - Access + Refresh tokens
  - Role-based access (admin, customer)
  - Password reset flow (email simulation)
- Product Management
  - CRUD for products (admin)
  - Get all products with pagination, filtering, sorting, search
  - Product reviews/ratings
- Security
  - Input validation & sanitization
  - Rate limiting
  - CORS
  - Helmet

---

## 1. Setup

```bash
git clone <your-repo-url>
cd ecommerce-backend-task2
npm install
cp .env.example .env   # then edit env values
npm run dev            # start in dev mode
```

Make sure MongoDB is running locally or update `MONGO_URI` in `.env`.

---

## 2. Main Endpoints

### Auth

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/refresh-token`
- `GET  /api/auth/me`
- `POST /api/auth/forgot-password`
- `POST /api/auth/reset-password/:token`

### Products

- `GET    /api/products` – list with pagination/filter/sort/search
- `GET    /api/products/:id`
- `POST   /api/products` – admin only
- `PUT    /api/products/:id` – admin only
- `DELETE /api/products/:id` – admin only
- `POST   /api/products/:id/reviews` – customer (logged in)

You can import the Postman collection `postman_collection.json` inside the project root.

---

## 3. Notes

- Password reset is simulated using a mock email sender (logs reset link to the console).
- Role-based authorization is handled via middleware.
- Validation is done with `express-validator`.

You can extend this with Orders, file upload (Cloudinary), Swagger docs, etc.
