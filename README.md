# Perfume API Documentation

Welcome to the Perfume API documentation. This API allows you to manage perfumes, including adding, editing, deleting, and retrieving perfume information.

## Table of Contents

1. [Authentication](#authentication)
2. [Endpoints](#endpoints)
   - [Add a New Perfume](#add-a-new-perfume)
   - [Edit an Existing Perfume](#edit-an-existing-perfume)
   - [Delete a Perfume](#delete-a-perfume)
   - [Get a Single Perfume by ID](#get-a-single-perfume-by-id)
   - [Get Perfumes by Category](#get-perfumes-by-category)
   - [Get Perfumes by Color](#get-perfumes-by-color)
   - [Get Perfumes by Price Range](#get-perfumes-by-price-range)
   - [Get Perfumes by Rating](#get-perfumes-by-rating)
   - [Get All Perfumes](#get-all-perfumes)

## Authentication

Before using the API endpoints, you need to be a registered user and be logged in. The authentication is based on session management.

## Endpoints

## Get All Perfumes
Get a list of all perfumes.

URL: /api/perfumes/get-all
Method: GET
Authentication: Required
Example Request

## Add a New Perfume

- **URL**: `/api/perfumes/add`
- **Method**: `POST`
- **Authentication**: Required
- **Request Body**:

```json
{
  "name": "Perfume Name",
  "category": "Category",
  "color": "Color",
  "price": 49.99,
  "rating": 4.5
}
```

```json
{
  "message": "Perfume added successfully",
  "perfume": {
    "id": 1,
    "name": "Perfume Name",
    "category": "Category",
    "color": "Color",
    "price": 49.99,
    "rating": 4.5,
    "createdAt": "2023-10-01T12:00:00Z",
    "updatedAt": "2023-10-01T12:00:00Z"
  }
}
```

