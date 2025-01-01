# API Documentation

## User Registration Endpoint

### POST /api/v1/users/register

This endpoint allows a new user to register by providing their details.

#### Request

- **URL:** `/api/v1/users/register`
- **Method:** `POST`
- **Headers:** `Content-Type: application/json`
- **Body:**
  ```json
  {
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com",
    "password": "yourpassword"
  }
  ```

#### Response

- **Success Response:**
  - **Code:** `201 Created`
  - **Content:**
    ```json
    {
      "success": true,
      "message": "User registered successfully",
      "newUser": {
        "_id": "user_id",
        "firstname": "John",
        "lastname": "Doe",
        "email": "john.doe@example.com",
        "createdAt": "timestamp",
        "updatedAt": "timestamp"
      }
    }
    ```

- **Error Responses:**
  - **Code:** `400 Bad Request`
    - **Content:**
      ```json
      {
        "message": "First name required"
      }
      ```
    - **Content:**
      ```json
      {
        "message": "Email required"
      }
      ```
    - **Content:**
      ```json
      {
        "message": "Password required and greater than 6 characters"
      }
      ```
    - **Content:**
      ```json
      {
        "message": "User already exists"
      }
      ```

  - **Code:** `500 Internal Server Error`
    - **Content:**
      ```json
      {
        "message": "error message"
      }
      ```

#### Description

This endpoint registers a new user by taking their `firstname`, `lastname`, `email`, and `password`. The password must be at least 6 characters long. If the registration is successful, a token is generated and set in the cookies.

#### Example Request

```bash
curl -X POST http://localhost:5000/api/v1/users/register \
-H "Content-Type: application/json" \
-d '{
  "firstname": "John",
  "lastname": "Doe",
  "email": "john.doe@example.com",
  "password": "yourpassword"
}'
```

#### Example Response

```json
{
  "success": true,
  "message": "User registered successfully",
  "newUser": {
    "_id": "user_id",
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com",
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  }
}
```

## User Login Endpoint

### POST /api/v1/users/login

This endpoint allows an existing user to log in by providing their email and password.

#### Request

- **URL:** `/api/v1/users/login`
- **Method:** `POST`
- **Headers:** `Content-Type: application/json`
- **Body:**
  ```json
  {
    "email": "john.doe@example.com",
    "password": "yourpassword"
  }
  ```

#### Response

- **Success Response:**
  - **Code:** `200 OK`
  - **Content:**
    ```json
    {
      "success": true,
      "message": "User logged in successfully",
      "user": {
        "_id": "user_id",
        "firstname": "John",
        "lastname": "Doe",
        "email": "john.doe@example.com",
        "createdAt": "timestamp",
        "updatedAt": "timestamp"
      }
    }
    ```

- **Error Responses:**
  - **Code:** `400 Bad Request`
    - **Content:**
      ```json
      {
        "message": "All fields are required"
      }
      ```
    - **Content:**
      ```json
      {
        "message": "User not found"
      }
      ```
    - **Content:**
      ```json
      {
        "message": "Invalid password"
      }
      ```

  - **Code:** `500 Internal Server Error`
    - **Content:**
      ```json
      {
        "message": "error message"
      }
      ```

#### Description

This endpoint logs in an existing user by taking their `email` and `password`. If the login is successful, a token is generated and set in the cookies.

#### Example Request

```bash
curl -X POST http://localhost:5000/api/v1/users/login \
-H "Content-Type: application/json" \
-d '{
  "email": "john.doe@example.com",
  "password": "yourpassword"
}'
```

#### Example Response

```json
{
  "success": true,
  "message": "User logged in successfully",
  "user": {
    "_id": "user_id",
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com",
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  }
}
```

## Protected Route Middleware

### Middleware: protectedRoute

This middleware protects routes by ensuring that the user is authenticated.

#### Description

The `protectedRoute` middleware checks for a valid JWT token in the cookies. If the token is valid, it attaches the user information to the request object and allows the request to proceed. If the token is missing or invalid, it returns an unauthorized error.

#### Usage

To use the `protectedRoute` middleware, simply add it to any route that you want to protect.

```javascript
import { protectedRoute } from "../middleware/protectedRoute.js";

router.post("/profile", protectedRoute, getProfile);
router.post("/logout", protectedRoute, logout);
```

#### Error Responses

- **Code:** `401 Unauthorized`
  - **Content:**
    ```json
    {
      "message": "Unauthorized"
    }
    ```

- **Code:** `500 Internal Server Error`
  - **Content:**
    ```json
    {
      "message": "error message"
    }
    ```

#### Example Request

```bash
curl -X POST http://localhost:5000/api/v1/users/profile \
-H "Content-Type: application/json" \
--cookie "jwt=your_jwt_token"
```

#### Example Response

```json
{
  "success": true,
  "user": {
    "_id": "user_id",
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com",
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  }
}
```

## User Logout Endpoint

### POST /api/v1/users/logout

This endpoint allows an authenticated user to log out.

#### Request

- **URL:** `/api/v1/users/logout`
- **Method:** `POST`
- **Headers:** `Content-Type: application/json`
- **Cookies:** `jwt=your_jwt_token`

#### Response

- **Success Response:**
  - **Code:** `200 OK`
  - **Content:**
    ```json
    {
      "success": true,
      "message": "User logged out successfully"
    }
    ```

- **Error Responses:**
  - **Code:** `401 Unauthorized`
    - **Content:**
      ```json
      {
        "message": "Unauthorized"
      }
      ```

  - **Code:** `500 Internal Server Error`
    - **Content:**
      ```json
      {
        "message": "error message"
      }
      ```

#### Description

This endpoint logs out an authenticated user by clearing the JWT token from the cookies.

#### Example Request

```bash
curl -X POST http://localhost:5000/api/v1/users/logout \
-H "Content-Type: application/json" \
--cookie "jwt=your_jwt_token"
```

#### Example Response

```json
{
  "success": true,
  "message": "User logged out successfully"
}
```