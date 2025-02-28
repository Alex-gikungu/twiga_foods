# Twiga Foods - React Vite Project

## Project Overview
Twiga Foods is a web-based platform that allows users to browse products, register/login, add items to the cart, and proceed with transactions. The project is built using **React Vite** for a fast and optimized frontend experience.

## Clone the Repository
To get started, clone the project from GitHub:
```sh
git clone https://github.com/Alex-gikungu/twiga_foods.git
cd twiga_foods
```

## Installation & Setup
Ensure you have **Node.js** installed (recommended version: `18.x` or later). Then, install dependencies:
```sh
npm install
```

## Running the Development Server
To start the application locally, run:
```sh
npm run dev
```
This will start the Vite development server. Open the provided local URL in your browser.

## Project Features & Workflow
### 1. User Registration & Login
- **Registration:** New users can create an account by providing their name, email, and password.
- **Login:** Existing users can log in with their credentials.
- **Authentication:** Ensures that only registered users can access specific features such as adding items to the cart.

### 2. Navigation System
- The app has a **navigation bar** that includes links to Home, Products, Cart, and Profile.
- Depending on authentication status:
  - Logged-in users see options like **Logout**.
  - Guests see **Login/Register** options.

### 3. Browsing & Adding Items to Cart
- Users can browse available products.
- Clicking the "Add to Cart" button places items in the shopping cart.
- The **cart page** displays selected items with quantity and total cost.
- Users can update the quantity or remove items from the cart.

### 4. Checkout & Transactions
- Once users are satisfied with their cart, they can proceed to checkout.
- Payment options (e.g., **M-Pesa integration**) can be added in future updates.

## Build for Production
To generate a production-ready build:
```sh
npm run build
```
This outputs optimized files in the `dist/` folder.

## Technologies Used
- **Frontend:** React (Vite)
- **Styling:** CSS, Bootstrap
- **State Management:** React Context API or Redux (if applicable)
- **Routing:** React Router

## Contributing
If you'd like to contribute:
1. Fork the repo.
2. Create a new branch (`feature-name`).
3. Commit changes.
4. Push and open a pull request.

## License
This project is open-source and available under the **MIT License**.

---
### Need Help?
For any issues or improvements, feel free to raise an **issue** or reach out!
