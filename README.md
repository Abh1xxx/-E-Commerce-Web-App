# E-Commerce Web App

## Description
An interactive and responsive e-commerce web application that allows users to browse products, view product details, add items to the cart, and proceed to purchase. Built using modern web technologies to ensure a seamless user experience.

---
## Hosted Link
You can view the deployed version of the project at: [Live Demo](https://3module-end-assgnmt.netlify.app/)
---
## Features

- **Dynamic Product Listing**: Products are fetched from the [Fake Store API](https://fakestoreapi.com/).
- **Product Details Page**: Detailed view of individual products.
- **Cart Functionality**:
  - Add to Cart.
  - Remove from Cart.
  - View total items and price.
  - Clear Cart option.
- **Responsive Design**: Optimized for mobile and desktop views.
- **Theming**: Navy & Gold premium theme.
- **Loading State Management**: Shows a loading spinner while fetching data.

---

## Tech Stack

- **Frontend**:
  - React
  - React Router
  - Redux Toolkit (for state management)
  - React-Bootstrap (for UI components)
  - Axios (for API calls)

- **Styling**:
  - Bootstrap
  - Custom CSS

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/ecommerce-web-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ecommerce-web-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to:

   ```
   http://localhost:5173
   ```

---

## Project Structure

```plaintext
src
├── assets               # Static assets like images and icons
├── components           # Reusable UI components
├── features             # Redux slices
├── layout               # Layout components
├── pages                # Pages (Home, Product Details, etc.)
├── routes               # React Router configurations
├── App.css              # Global styles
├── App.jsx              # Main application component
└── main.jsx             # Entry point
```

---

## API Reference

- [Fake Store API](https://fakestoreapi.com/)
  - `GET /products` - Fetch all products
  - `GET /products/:id` - Fetch a specific product

---

## Future Improvements

- Add user authentication and authorization.
- Integrate a real payment gateway (e.g., Stripe, PayPal).
- Implement product search and filter functionality.
- Add wish list functionality.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Acknowledgments

- [Fake Store API](https://fakestoreapi.com/) for providing the product data.
- React-Bootstrap for elegant UI components.

---





## Tags
- #Ecommerce
- #React
- #Redux
- #Bootstrap
- #ResponsiveDesign
- #APIIntegration
- #JavaScript
- #WebDevelopment
- #MERNStack
- #FakeStore
- #FrontendDevelopment
- #ReactBootstrap
- #OnlineStore
- #DynamicComponents
- #CartFunctionality
