# Order API Documentation

This documentation describes the endpoints, data structures, and functionalities of the Order API. The API is used to manage orders with fields like price, quantity, type, target, stoploss, and more. It uses Express.js for routing, MongoDB for database management, and a service-repository pattern for data handling.

---

## Models

### Order Schema

```javascript
const orderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    symbol: { type: String, required: true },
    price: { type: Number, required: true },
    change: { type: Number, default: 0 },
    percentageChange: { type: Number, default: 0 },
    prevClose: { type: Number, required: true },
    quantity: { type: Number, required: true },
    type: { type: String, enum: ["buy", "sell"], required: true },
    target: { type: Number },
    stoploss: { type: Number },
    timeframe: { type: String, required: true },
    status: {
      type: String,
      enum: [
        "active",
        "exited",
        "target achieved",
        "stoploss hit",
        "validity over",
      ],
      default: "active",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);
```

---

## Endpoints

### Base URL

`/api/orders`

### Middleware

- **Authenticate**: Ensures the user is authenticated before accessing the endpoints.

### Routes

#### Create Order

- **POST** `/`
- **Description**: Creates a new order.
- **Request Body**:
  ```json
  {
    "name": "string",
    "symbol": "string",
    "price": "number",
    "prevClose": "number",
    "quantity": "number",
    "type": "buy | sell",
    "target": "number",
    "stoploss": "number",
    "timeframe": "string"
  }
  ```
- **Response**:
  - **201 Created**: Order created successfully.
  ```json
  {
    "_id": "string",
    "name": "string",
    "symbol": "string",
    "price": "number",
    "prevClose": "number",
    "quantity": "number",
    "type": "buy | sell",
    "status": "active",
    "userId": "string",
    "createdAt": "string",
    "updatedAt": "string"
  }
  ```

#### Get All Orders

- **GET** `/`
- **Description**: Retrieves all orders with optional query filters.
- **Query Parameters**:
  - Filters based on fields like `type`, `status`, `symbol`, etc.
- **Response**:
  - **200 OK**: List of orders.
  ```json
  [
    {
      "_id": "string",
      "name": "string",
      "symbol": "string",
      "price": "number",
      "status": "string",
      "quantity": "number",
      "type": "buy | sell",
      "createdAt": "string",
      "updatedAt": "string"
    }
  ]
  ```

#### Get Orders By User

- **GET** `/user`
- **Description**: Retrieves all orders for the authenticated user.
- **Response**:
  - **200 OK**: List of user's orders.
  ```json
  [
    {
      "_id": "string",
      "name": "string",
      "symbol": "string",
      "price": "number",
      "status": "string",
      "quantity": "number",
      "type": "buy | sell",
      "createdAt": "string",
      "updatedAt": "string"
    }
  ]
  ```

#### Get Order By ID

- **GET** `/:id`
- **Description**: Retrieves a single order by its ID.
- **Response**:
  - **200 OK**: Order details.
  ```json
  {
    "_id": "string",
    "name": "string",
    "symbol": "string",
    "price": "number",
    "status": "string",
    "quantity": "number",
    "type": "buy | sell",
    "createdAt": "string",
    "updatedAt": "string"
  }
  ```
  - **404 Not Found**: Order not found.

#### Update Order

- **PUT** `/:id`
- **Description**: Updates an order by its ID.
- **Request Body**: Fields to be updated.
- **Response**:
  - **200 OK**: Updated order.
  ```json
  {
    "_id": "string",
    "name": "string",
    "symbol": "string",
    "price": "number",
    "status": "string",
    "quantity": "number",
    "type": "buy | sell",
    "createdAt": "string",
    "updatedAt": "string"
  }
  ```
  - **400 Bad Request**: Invalid data.

#### Delete Order

- **DELETE** `/:id`
- **Description**: Deletes an order by its ID.
- **Response**:
  - **204 No Content**: Order deleted successfully.
  - **400 Bad Request**: Invalid ID or other issues.

---

## Error Handling

- **400 Bad Request**: Invalid request data.
- **404 Not Found**: Resource not found.
- **500 Internal Server Error**: Unexpected server error.

---

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for API development.
- **MongoDB**: Database for storing order data.
- **Mongoose**: ORM for MongoDB.
- **JWT Authentication**: Middleware for user authentication.

---

## Project Structure

```
project-root/
  |-- models/
  |     |-- order.js
  |
  |-- repositories/
  |     |-- orderRepository.js
  |
  |-- services/
  |     |-- orderService.js
  |
  |-- controllers/
  |     |-- orderController.js
  |
  |-- routes/
  |     |-- orderRoutes.js
  |
  |-- middlewares/
        |-- authenticate.js
```

---

## Testing

- Use tools like Postman or Swagger UI to test the endpoints.
- Ensure valid JWT tokens are included in the headers for all protected routes.

---

## Notes

- Ensure the `userId` field is properly extracted from the authenticated user token.
- Use proper validation for request payloads to avoid invalid data being stored in the database.
