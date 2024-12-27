# Documentation for `order/` Endpoint

The `/api/order/` endpoint provides CRUD operations for managing orders in the application. The routes require user authentication and allow users to create, retrieve, update, and delete orders.

---

## Base URL

```
/api/order
```

---

## Middleware

- **`authenticate`**: Ensures that only authenticated users can access these routes.

---

## Endpoints

### 1. **Create Order**

**URL**: `/`  
**Method**: `POST`  
**Authentication**: Required

#### Request Body

Send a JSON object containing the following fields:

| Field       | Type     | Required | Description                                 |
| ----------- | -------- | -------- | ------------------------------------------- |
| `name`      | `String` | Yes      | Name of the stock.                          |
| `symbol`    | `String` | Yes      | Stock symbol (e.g., AAPL).                  |
| `price`     | `Number` | Yes      | Price of the stock at the time of purchase. |
| `quantity`  | `Number` | Yes      | Quantity of stocks.                         |
| `prevClose` | `Number` | Yes      | Previous day's closing price of the stock.  |
| `type`      | `String` | Yes      | Type of order (`buy` or `sell`).            |
| `timeframe` | `String` | Yes      | Timeframe for the order (e.g., daily).      |
| `target`    | `Number` | No       | Target price to achieve.                    |
| `stoploss`  | `Number` | No       | Stop-loss price.                            |

#### Example Request

```json
{
  "name": "Apple",
  "symbol": "AAPL",
  "price": 150,
  "quantity": 10,
  "prevClose": 145,
  "type": "buy",
  "timeframe": "daily",
  "target": 160,
  "stoploss": 140
}
```

#### Example Response

**Status Code**: `201 Created`

```json
{
  "id": "60b6f9f9f9f9f9f9f9f9f9f9",
  "name": "Apple",
  "symbol": "AAPL",
  "price": 150,
  "quantity": 10,
  "prevClose": 145,
  "type": "buy",
  "timeframe": "daily",
  "target": 160,
  "stoploss": 140,
  "status": "active",
  "userId": "60b6f9f9f9f9f9f9f9f9f9f9",
  "createdAt": "2024-12-26T12:00:00Z",
  "updatedAt": "2024-12-26T12:00:00Z"
}
```

---

### 2. **Get All Orders**

**URL**: `/`  
**Method**: `GET`  
**Authentication**: Required

#### Query Parameters

| Parameter | Type     | Required | Description                                        |
| --------- | -------- | -------- | -------------------------------------------------- |
| `status`  | `String` | No       | Filter by order status (`active`, `exited`, etc.). |
| `type`    | `String` | No       | Filter by order type (`buy` or `sell`).            |

#### Example Request

```
GET /order?status=active&type=buy
```

#### Example Response

**Status Code**: `200 OK`

```json
[
  {
    "id": "60b6f9f9f9f9f9f9f9f9f9f9",
    "name": "Apple",
    "symbol": "AAPL",
    "price": 150,
    "quantity": 10,
    "prevClose": 145,
    "type": "buy",
    "timeframe": "daily",
    "target": 160,
    "stoploss": 140,
    "status": "active",
    "userId": "60b6f9f9f9f9f9f9f9f9f9f9",
    "createdAt": "2024-12-26T12:00:00Z",
    "updatedAt": "2024-12-26T12:00:00Z"
  }
]
```

---

### 3. **Get Orders by User ID**

**URL**: `/user`  
**Method**: `GET`  
**Authentication**: Required

#### Query Parameters

| Parameter | Type     | Required | Description             |
| --------- | -------- | -------- | ----------------------- |
| `status`  | `String` | No       | Filter by order status. |
| `type`    | `String` | No       | Filter by order type.   |

#### Example Request

```
GET /order/user?status=active
```

#### Example Response

**Status Code**: `200 OK`

```json
[
  {
    "id": "60b6f9f9f9f9f9f9f9f9f9f9",
    "name": "Apple",
    "symbol": "AAPL",
    "price": 150,
    "quantity": 10,
    "prevClose": 145,
    "type": "buy",
    "timeframe": "daily",
    "target": 160,
    "stoploss": 140,
    "status": "active",
    "userId": "60b6f9f9f9f9f9f9f9f9f9f9",
    "createdAt": "2024-12-26T12:00:00Z",
    "updatedAt": "2024-12-26T12:00:00Z"
  }
]
```

---

### 4. **Get Order by ID**

**URL**: `/:id`  
**Method**: `GET`  
**Authentication**: Required

#### Example Request

```
GET /order/60b6f9f9f9f9f9f9f9f9f9f9
```

#### Example Response

**Status Code**: `200 OK`

```json
{
  "id": "60b6f9f9f9f9f9f9f9f9f9f9",
  "name": "Apple",
  "symbol": "AAPL",
  "price": 150,
  "quantity": 10,
  "prevClose": 145,
  "type": "buy",
  "timeframe": "daily",
  "target": 160,
  "stoploss": 140,
  "status": "active",
  "userId": "60b6f9f9f9f9f9f9f9f9f9f9",
  "createdAt": "2024-12-26T12:00:00Z",
  "updatedAt": "2024-12-26T12:00:00Z"
}
```

---

### 5. **Update Order**

**URL**: `/:id`  
**Method**: `PUT`  
**Authentication**: Required

#### Request Body

Send a JSON object with the fields to update:

| Field      | Type     | Required | Description                  |
| ---------- | -------- | -------- | ---------------------------- |
| `price`    | `Number` | No       | Updated price.               |
| `quantity` | `Number` | No       | Updated quantity.            |
| `target`   | `Number` | No       | Updated target price.        |
| `stoploss` | `Number` | No       | Updated stop-loss price.     |
| `status`   | `String` | No       | Updated status of the order. |

#### Example Request

```json
{
  "price": 155,
  "quantity": 12
}
```

#### Example Response

**Status Code**: `200 OK`

```json
{
  "id": "60b6f9f9f9f9f9f9f9f9f9f9",
  "name": "Apple",
  "symbol": "AAPL",
  "price": 155,
  "quantity": 12,
  "prevClose": 145,
  "type": "buy",
  "timeframe": "daily",
  "target": 160,
  "stoploss": 140,
  "status": "active",
  "userId": "60b6f9f9f9f9f9f9f9f9f9f9",
  "createdAt": "2024-12-26T12:00:00Z",
  "updatedAt": "2024-12-26T12:10:00Z"
}
```

---
