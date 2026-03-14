# Order Management System API

## Overview

This project is a backend REST API built using **Node.js**, **Express.js**, and **MongoDB (Native Driver)**.
It manages manufacturers, sellers, customers, products, and orders.
The system also provides analytics such as **faulty products, most ordered products, and monthly revenue reports**.

---

## Technologies Used

* Node.js
* Express.js
* MongoDB (Native Driver)
* Postman (API Testing)

---

## Database Name

`order_management`

### Collections

* manufacturers
* sellers
* customers
* products
* orders

---

## Project Structure

```
order-management-system
│
├── config
│   └── db.js
│
├── controllers
│
├── routes
│
├── db_backup
│
├── postman_collection.json
├── index.js
├── package.json
└── README.md
```

---

## Installation

1. Clone the repository

```
git clone https://github.com/https://github.com/subitha990527/order-management-system.git/order-management-system.git
```

2. Navigate to the project folder

```
cd order-management-system
```

3. Install dependencies

```
npm install
```

4. Start the server

```
node index.js
```

Server runs at:

```
http://localhost:5000
```

---

## API Endpoints

### Add Manufacturer

POST `/api/manufacturers/add`

Example JSON

```
{
  "name": "Dell",
  "location": "USA"
}
```

---

### Add Seller

POST `/api/sellers/add`

```
{
  "name": "Amazon",
  "location": "India"
}
```

---

### Add Customer

POST `/api/customers/add`

```
{
  "name": "Rahul",
  "email": "rahul@gmail.com"
}
```

---

### Add Product

POST `/api/products/add`

```
{
  "name": "Laptop",
  "price": 50000,
  "manufacturerId": "69b52ef2dac2aafeec32d81a ",
  "sellerId": "69b52f25dac2aafeec32d81b ",
  "status": "instock"
}
```

---

### Update Product Status

PUT `/api/products/status/:id`

```
{
  "status": "faulty",
  "updatedBy": "seller"
}
```

---

### Create Order

POST `/api/orders/create`

```
{
  "productId": "69b52f9cdac2aafeec32d81d",
  "manufacturerId": "69b52ef2dac2aafeec32d81a",
  "sellerId": "69b52f25dac2aafeec32d81b",
  "customerId": "69b52f48dac2aafeec32d81c ",
  "quantity": 2,
  "price": 50000
}
```

---

### Get Faulty Products

GET `/api/products/faulty`

---

### Get All Orders (Pagination)

GET `/api/orders/all?page=1`

---

### Most Ordered Products

GET `/api/orders/most-ordered`

---

### Monthly Revenue

GET `/api/orders/monthly-revenue`

---

## Postman Collection

A **Postman collection** is included in this repository for testing all APIs.

File:

```
postman_collection.json
```

Import this file into Postman to test the endpoints.

---

## Database Backup

The repository includes a database backup folder:

```
db_backup
```

This contains exported collections so the database can be restored.

---

## Author

Subitha V S
