/* ============================================================
   Week 6 — Product Catalog
   ------------------------------------------------------------
   Build a small product list that can be filtered.
   The data and HTML structure are ready — focus on the JS.
   ============================================================ */


// The product data — DO NOT edit this array
const products = [
  {
    name: "T-Shirt",
    price: 25,
    onSale: true,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop"
  },
  {
    name: "Hoodie",
    price: 60,
    onSale: false,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop"
  },
  {
    name: "Sneakers",
    price: 80,
    onSale: true,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop"
  },
  {
    name: "Cap",
    price: 15,
    onSale: false,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop"
  },
  {
    name: "Backpack",
    price: 45,
    onSale: true,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop"
  },
  {
    name: "Water Bottle",
    price: 12,
    onSale: false,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop"
  }
];


/* ------------------------------------------------------------
   Task 1: productsToHTML(productList) 🗺️

   Use .map() to turn an array of products into an array of
   HTML strings. Then .join("") to combine them into one string.

   Each card should look like:
     <div class="card">
       <img src="PRODUCT_IMAGE_URL" alt="PRODUCT_NAME" />
       <h3>T-Shirt</h3>
       <p class="price">$25</p>
     </div>
   ------------------------------------------------------------ */

function productsToHTML(productList) {
  // ✍️ Solve it here ✍️
}




/* ------------------------------------------------------------
   Task 2: Show all products on page load 📺

   1. Find <div id="product-list"> with document.querySelector
   2. Set its innerHTML to productsToHTML(products)
   ------------------------------------------------------------ */

// ✍️ Solve it here ✍️




/* ------------------------------------------------------------
   Task 3: Filter buttons 🏷️

   Listen for clicks on #btn-all and #btn-sale.
   - All → show every product
   - Sale → show only products where onSale is true (use .filter())
   ------------------------------------------------------------ */

// ✍️ Solve it here ✍️




/* ------------------------------------------------------------
   Task 4: Highlight the active button ✨

   When a filter button is clicked, give it the class "active"
   and remove "active" from the other one.

   Hint: btn.classList.add("active") / .remove("active")
   ------------------------------------------------------------ */

// ✍️ Solve it here ✍️ (or merge into Task 3's click handlers)
