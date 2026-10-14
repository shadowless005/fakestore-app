# FakeStore E-Commerce App

A responsive e-commerce frontend built with React, React Router, Axios, and React Bootstrap. Users can browse products, view product details, and practice adding, editing, and deleting products through FakeStoreAPI.

## Features

- Home page with a Shop Now button
- Product listing with images, titles, prices, and product count
- Individual product details
- Add product form
- Prefilled edit product form
- Delete confirmation modal
- Redirect to the product listing after deletion
- Loading indicators and error messages
- Responsive layout and collapsible navigation

## Technologies

- React
- Vite
- React Router
- Axios
- React Bootstrap
- Bootstrap
- FakeStoreAPI

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal.

## Routes

| Route               | Page            |
| ------------------- | --------------- |
| `/`                 | Home            |
| `/products`         | Product listing |
| `/products/:id`     | Product details |
| `/add-product`      | Add product     |
| `/edit-product/:id` | Edit product    |

## API Behavior

FakeStoreAPI is a mock API. POST, PUT, and DELETE requests return successful responses, but changes do not persist. Newly created products will not appear in subsequent product requests, and updated or deleted products retain their original API data.

The Add to Cart button is a placeholder. Cart functionality is not implemented.

## Author

Matthew Shin
