# Perfume Store API

Welcome to the Perfume Store API documentation. This API allows you to manage perfumes in the store.

## Authentication

Before using the API, you need to authenticate by sending a POST request to `/api/auth/login`. Provide your username and password.

### Login

- **URL**: `/api/auth/login`
- **Method**: `POST`
- **Request**:
  - Headers:
    - `Content-Type: application/json`
  - Body:
    ```json
    {
      "username": "your_username",
      "password": "your_password"
    }
    ```
- **Response**:
  - Status Code: `200 OK`
  - Body:
    ```json
    {
      "message": "Login successful",
      "user": {
        "id": 1,
        "username": "your_username"
      }
    }
    ```
- **Error Response**:
  - Status Code: `401 Unauthorized`
  - Body:
    ```json
    {
      "message": "Invalid credentials"
    }
    ```

## Perfume Management

### Add a New Perfume

- **URL**: `/api/perfumes/add`
- **Method**: `POST`
- **Authentication**: Required
- **Request**:
  - Headers:
    - `Content-Type: application/json`
  - Body:
    ```json
    {
      "name": "Perfume Name",
      "category": "Category",
      "color": "Color",
      "price": 39.99,
      "rating": 4.5
    }
    ```
- **Response**:
  - Status Code: `201 Created`
  - Body:
    ```json
    {
      "message": "Perfume added successfully",
      "perfume": {
        "id": 1,
        "name": "Perfume Name",
        "category": "Category",
        "color": "Color",
        "price": 39.99,
        "rating": 4.5
      }
    }
    ```

### Edit an Existing Perfume

- **URL**: `/api/perfumes/edit/:id`
- **Method**: `PUT`
- **Authentication**: Required
- **Request**:
  - Headers:
    - `Content-Type: application/json`
  - URL Parameters:
    - `id`: ID of the perfume to edit
  - Body:
    ```json
    {
      "name": "Updated Perfume Name",
      "category": "Updated Category",
      "color": "Updated Color",
      "price": 49.99,
      "rating": 4.7
    }
    ```
- **Response**:
  - Status Code: `200 OK`
  - Body:
    ```json
    {
      "message": "Perfume updated successfully",
      "perfume": {
        "id": 1,
        "name": "Updated Perfume Name",
        "category": "Updated Category",
        "color": "Updated Color",
        "price": 49.99,
        "rating": 4.7
      }
    }
    ```

## Error Responses

- **Status Code**: `404 Not Found`
- **Body**:
  ```json
  {
    "message": "Perfume not found"
  }

## Perfume Management (Continued)

### Delete a Perfume

- **URL**: `/api/perfumes/delete/:id`
- **Method**: `DELETE`
- **Authentication**: Required
- **Request**:
  - URL Parameters:
    - `id`: ID of the perfume to delete
- **Response**:
  - Status Code: `204 No Content`

### Get a Single Perfume by ID

- **URL**: `/api/perfumes/get/:id`
- **Method**: `GET`
- **Request**:
  - URL Parameters:
    - `id`: ID of the perfume to retrieve
- **Response**:
  - Status Code: `200 OK`
  - Body:
    ```json
    {
      "id": 1,
      "name": "Perfume Name",
      "category": "Category",
      "color": "Color",
      "price": 39.99,
      "rating": 4.5
    }
    ```

### Get Perfumes by Category

- **URL**: `/api/perfumes/get-by-category/:category`
- **Method**: `GET`
- **Request**:
  - URL Parameters:
    - `category`: Category of perfumes to retrieve
- **Response**:
  - Status Code: `200 OK`
  - Body:
    ```json
    [
      {
        "id": 1,
        "name": "Perfume Name 1",
        "category": "Category",
        "color": "Color",
        "price": 39.99,
        "rating": 4.5
      },
      {
        "id": 2,
        "name": "Perfume Name 2",
        "category": "Category",
        "color": "Color",
        "price": 49.99,
        "rating": 4.7
      }
    ]
    ```

## Error Responses

- **Status Code**: `500 Internal Server Error`
- **Body**:
  ```json
  {
    "message": "Internal Server Error"
  }

## Perfume Management (Continued)

### Get Perfumes by Color

- **URL**: `/api/perfumes/get-by-color/:color`
- **Method**: `GET`
- **Request**:
  - URL Parameters:
    - `color`: Color of perfumes to retrieve
- **Response**:
  - Status Code: `200 OK`
  - Body:
    ```json
    [
      {
        "id": 1,
        "name": "Perfume Name 1",
        "category": "Category",
        "color": "Color",
        "price": 39.99,
        "rating": 4.5
      },
      {
        "id": 2,
        "name": "Perfume Name 2",
        "category": "Category",
        "color": "Color",
        "price": 49.99,
        "rating": 4.7
      }
    ]
    ```

### Get Perfumes by Price Range

- **URL**: `/api/perfumes/get-by-price-range`
- **Method**: `GET`
- **Request**:

  - Query Parameters:
    - `minPrice`: Minimum price of perfumes
    - `maxPrice`: Maximum price of perfumes
- **Response**:
  - Status Code: `200 OK`
  - Body:
    ```json
    [
      {
        "id": 1,
        "name": "Perfume Name 1",
        "category": "Category",
        "color": "Color",
        "price": 39.99,
        "rating": 4.5
      },
      {
        "id": 2,
        "name": "Perfume Name 2",
        "category": "Category",
        "color": "Color",
        "price": 49.99,
        "rating": 4.7
      }
    ]
    ```

### Get Perfumes by Rating

- **URL**: `/api/perfumes/get-by-rating/:rating`
- **Method**: `GET`
- **Request**:
  - URL Parameters:
    - `rating`: Minimum rating of perfumes
- **Response**:
  - Status Code: `200 OK`
  - Body:
    ```json
    [
      {
        "id": 1,
        "name": "Perfume Name 1",
        "category": "Category",
        "color": "Color",
        "price": 39.99,
        "rating": 4.5
      },
      {
        "id": 2,
        "name": "Perfume Name 2",
        "category": "Category",
        "color": "Color",
        "price": 49.99,
        "rating": 4.7
      }
    ]
    ```

### Get All Perfumes

- **URL**: `/api/perfumes/get-all`
- **Method**: `GET`
- **Request**:
  - Headers:
    - `Authorization: Bearer your_auth_token`
- **Response**:
  - Status Code: `200 OK`
  - Body:
    ```json
    [
      {
        "id": 1,
        "name": "Perfume Name 1",
        "category": "Category",
        "color": "Color",
        "price": 39.99,
        "rating": 4.5
      },
      {
        "id": 2,
        "name": "Perfume Name 2",
        "category": "Category",
        "color": "Color",
        "price": 49.99,
        "rating": 4.7
      }
    ]
    ```

## Error Responses

- **Status Code**: `500 Internal Server Error`
- **Body**:
  ```json
  {
    "message": "Internal Server Error"
  }
