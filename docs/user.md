# API Documentation for User

### Base URL

```
http://localhost:5000
```

### Endpoints

#### 1. **Register User**

- **URL**: `/api/user/register`
- **Method**: `POST`
- **Description**: Registers a new user.
- **Request Body**:
  ```json
  {
    "username": "testuser",
    "password": "password123",
    "email": "testuser@example.com"
  }
  ```
- **Response**:
  - **Success (201)**:
    ```json
    {
      "message": "User registered successfully",
      "data": {
        "user": {
          "_id": "641f77f8e28b8c1e88e33",
          "username": "testuser",
          "email": "testuser@example.com",
          "createdAt": "2024-12-22T10:00:00Z"
        }
      }
    }
    ```
  - **Failure (400)**:
    ```json
    {
      "message": "Registration failed",
      "error": "Username already exists"
    }
    ```

#### 2. **Login User**

- **URL**: `/api/user/login`
- **Method**: `POST`
- **Description**: Logs in an existing user.
- **Request Body**:
  ```json
  {
    "username": "testuser",
    "password": "password123"
  }
  ```
- **Response**:
  - **Success (200)**:
    ```json
    {
      "message": "Login successful",
      "data": {
        "user": {
          "_id": "641f77f8e28b8c1e88e33",
          "username": "testuser",
          "email": "testuser@example.com"
        },
        "token": "jwt_token_here"
      }
    }
    ```
  - **Failure (400)**:
    ```json
    {
      "message": "Login failed",
      "error": "Invalid credentials"
    }
    ```

#### 3. **Get User by ID**

- **URL**: `/api/user/:id`
- **Method**: `GET`
- **Description**: Retrieves a user by their ID.
- **Parameters**:
  - `id` (path): MongoDB Object ID of the user.
- **Response**:
  - **Success (200)**:
    ```json
    {
      "message": "User retrieved successfully",
      "data": {
        "user": {
          "_id": "641f77f8e28b8c1e88e33",
          "username": "testuser",
          "email": "testuser@example.com"
        }
      }
    }
    ```
  - **Failure (404)**:
    ```json
    {
      "message": "User not found"
    }
    ```
  - **Failure (400)**:
    ```json
    {
      "message": "Error retrieving user",
      "error": "Invalid user ID"
    }
    ```

---

Let me know if additional endpoints or features need documentation.
