# Product Gallery App

A React.js e-commerce product gallery with **debounced search, infinite scrolling, lazy-loaded images, theme toggle, error handling, and product details page**.  
Built with **React 18, Axios, TailwindCSS, Context API, and React Router**.

---

## Project Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/product-gallery.git
   cd product-gallery
   ```

````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm start
   ```

4. Open in browser:

   ```
   http://localhost:3000
   ```

---

## Features Implemented

* **Debounced Search**
  Search products by name with optimized API calls using a custom `useDebounce` hook.

* **Infinite Scrolling**
  Products load dynamically as the user scrolls down using `IntersectionObserver`.

* **Lazy Loading Images**
  Product images are loaded only when they enter the viewport for better performance.

* **Global Theme Management**
  Light/Dark mode implemented with Context API and persisted in localStorage.
  Toggle button uses 🌙 / ☀️ icons.

* **Error Handling with Retry**
  If API fails, a user-friendly message is displayed along with a Retry button.

* **Responsive UI**
  Mobile-first design with TailwindCSS (1 column on mobile, 2 on tablet, 3 on desktop).

* **Product Details Page**
  Clicking a product opens a details page (using `getProductById`) with full info.

---

## API Usage Details

This project uses the **FakeStore API**:
[https://fakestoreapi.com](https://fakestoreapi.com)

### Endpoints:

* **Get All Products**

  ```
  GET https://fakestoreapi.com/products
  ```

  Used in `ProductList` to display the product gallery.

* **Get Product by ID**

  ```
  GET https://fakestoreapi.com/products/:id
  ```

  Used in `ProductDetails` page when a user clicks a product card.

---

## Project Structure

```
/src
  ├── api
  │   └── products.js        # API calls (Axios)
  ├── components
  │   ├── Header.js          # Header with Search + Theme Toggle
  │   ├── Loader.js          # Loading spinner
  │   ├── ProductCard.js     # Product card (lazy-loaded image)
  │   ├── ProductList.js     # Product grid with infinite scroll
  │   └── SearchBar.js       # Debounced search input
  ├── context
  │   └── ThemeContext.js    # Global theme management
  ├── hooks
  │   └── useDebounce.js     # Custom hook for debounce
  ├── pages
  │   └── ProductDetails.js  # Product details page
  ├── App.js
  ├── index.js
  └── index.css
```

## ✅ Feature Checklist

| Feature                                              | Status |
| ---------------------------------------------------- | ------ |
| Project setup with CRA + TailwindCSS                 | ✅ Done |
| Axios for API requests                               | ✅ Done |
| Responsive UI with Tailwind                          | ✅ Done |
| Debounced Search (useDebounce hook)                  | ✅ Done |
| Infinite Scrolling (IntersectionObserver)            | ✅ Done |
| Lazy Loading Images (React LazyLoad)                 | ✅ Done |
| Global Theme Management (Context API + localStorage) | ✅ Done |
| Error Handling (friendly message + Retry)            | ✅ Done |
| Product Details Page (getProductById)                | ✅ Done |
| Mobile-friendly UI                                   | ✅ Done |
| README with setup + features                         | ✅ Done |
````
