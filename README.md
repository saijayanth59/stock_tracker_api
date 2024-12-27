# Project: Node.js Express MongoDB API

## Project Overview

This project is a RESTful API built using Node.js, Express, and MongoDB. It includes functionality for user management, order tracking, and managing watchlists. The API supports operations such as adding, retrieving, updating, and deleting resources. It is deployed on **[Deployment Platform](https://render.com/)** for easy accessibility.

---

## Deployment Details

- **URL:** [API Base URL](https://stock-tracker-api.onrender.com/)
- **Deployed Environment:** [render](https://render.com/)

---

## Setup Instructions

### Prerequisites

Ensure you have the following installed on your system:

- Node.js (v14 or above)
- MongoDB (or use a MongoDB Atlas instance)

### Clone the Repository

```bash
git clone https://github.com/saijayanth59/stock_tracker_api
cd stock_tracker_api
```

### Install Dependencies

Install the required Node.js packages:

```bash
npm install
```

If you encounter any errors, use:

```bash
npm install --force
```

### Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
PORT=3002
mongoURI=...
JWT_SECRET_KEY="whatever you like"
```

### Start the Server

To start the development server:

```bash
npm start
```

The server will run at `http://localhost:3002`.

---

## API Documentation

All endpoints are prefixed with `/api`. Below are the available routes and their descriptions.

### Base URL

`http://https://stock-tracker-api.onrender.com/api`

### User Routes

| Method | Endpoint         | Description          |
| ------ | ---------------- | -------------------- |
| POST   | `/user/register` | Register a new user. |
| POST   | `/user/login`    | User login.          |
| GET    | `/user/profile`  | Get user profile.    |

Full documentation available at [docs/user](./docs/user.md).

### Order Routes

| Method | Endpoint     | Description            |
| ------ | ------------ | ---------------------- |
| POST   | `/order`     | Create a new order.    |
| GET    | `/order`     | Get all orders.        |
| GET    | `/order/:id` | Get order by ID.       |
| PUT    | `/order/:id` | Update an order by ID. |
| DELETE | `/order/:id` | Delete an order by ID. |

Full documentation available at [docs/order](./docs/order.md).

### Watchlist Routes

| Method | Endpoint              | Description                        |
| ------ | --------------------- | ---------------------------------- |
| POST   | `/watchlist`          | Add a stock to the watchlist.      |
| GET    | `/watchlist`          | Retrieve the user’s watchlist.     |
| DELETE | `/watchlist/:stockId` | Remove a stock from the watchlist. |

Full documentation available at [docs/watchlist](./docs/watchlist.md).

---

## Project Structure

```
├── config
│   ├── database.js       # MongoDB connection setup
│   ├── serverConfig.js   # Server configuration
├── controllers           # Route handlers
├── models                # Mongoose schemas
├── repositories          # Data access layer
├── routes                # API route definitions
├── services              # Business logic
├── middlewares           # Authentication and other middleware
├── docs                  # API documentation for each module
├── index.js              # Application entry point
└── package.json          # Project metadata and dependencies
```

---

## Key Highlights

- **CORS Enabled:** Allows cross-origin requests with custom headers.
- **Error Handling:** Comprehensive error handling at the middleware and service levels.
- **JWT Authentication:** Secures routes with user-specific access.
- **Scalable Architecture:** Clean separation of concerns using MVC.

---

For detailed endpoint usage, visit the `docs/<route-name>` folder within the project.
