/* ============================================================
   Week 6 — Product Catalog + Cart
   ------------------------------------------------------------
   Three concepts, nothing more:
     • The DOM   — select elements, then change the page
     • Callbacks — handing a function to another function
     • .map() & .filter()  — build cards, then narrow the list
   ============================================================ */


// The product data — each product is a simple object.
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
   Task 1 ✅ — Select the elements once (the DOM) - DONE!
   ------------------------------------------------------------ */

const productList = document.querySelector("#product-list");
const filters     = document.querySelector("#filters");
const btnAll      = document.querySelector("#btn-all");
const btnSale     = document.querySelector("#btn-sale");
const cartCount   = document.querySelector("#cart-count");
const cartItems   = document.querySelector("#cart-items");


// The cart starts empty. We only ever add to it.
let cart = [];


/* ------------------------------------------------------------
   Task 2 ✍️ — productsToHTML(list)   [ .map() ]

   Turn the array of products into one big HTML string.
   Each card has an "Add to Cart" button that remembers its
   product name in data-name.

   Use this HTML inside the productsToHTML function:

    <div class="card">
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p class="price">$${product.price}</p>
      <button class="add-btn" data-name="${product.name}">Add to Cart 🛒</button>
    </div>
   ------------------------------------------------------------ */

function productsToHTML(list) {
  return list
    .map((product) => {
      return `
        <div class="card">
          <img src="${product.image}" alt="${product.name}" />
          <h3>${product.name}</h3>
          <p class="price">$${product.price}</p>
          <button class="add-btn" data-name="${product.name}">
            Add to Cart 🛒
          </button>
        </div>
      `;
    })
    .join("");
}

/* ------------------------------------------------------------
   Task 3 ✍️ — Filter buttons   [ addEventListener + .filter() ]

   ONE listener on the whole filter bar. When a button is
   clicked: work out which products to show, put them on the
   page, and light up the clicked button with classList.toggle().

   The function you hand to .filter() is a CALLBACK — .filter
   runs it on every product and keeps the ones that return true.
   ------------------------------------------------------------ */

filters.addEventListener("click", (event) => {
  const onSaleOnly = event.target.id === "btn-sale";

  // Step 1: Filter the products based on onSaleOnly
  let visible = products;
  if (onSaleOnly) {
    visible = products.filter((product) => product.onSale);
  }
// Step 2: show products
  productList.innerHTML = productsToHTML(visible);

// Step 3: button active state
  btnAll.classList.remove("active");
  btnSale.classList.remove("active");          
    if (onSaleOnly) {
    btnSale.classList.add("active");
  } else {
    btnAll.classList.add("active");
  }
});
/* ------------------------------------------------------------
   Task 4 ✅ — renderCart()   [ .map() + the DOM ] - DONE!

   Show how many items are in the cart, and list their names.
   ------------------------------------------------------------ */

function renderCart() {
  cartCount.textContent = cart.length;
  cartItems.innerHTML = cart
    .map((name) => `<li>${name}</li>`)
    .join("");
}


/* ------------------------------------------------------------
   Task 5 ✍️ — Add to Cart   [ ONE addEventListener ]

   Instead of adding a listener to every button, we add ONE
   listener to the whole product list. When something inside it
   is clicked, we check: was it an Add to Cart button? If so,
   read its data-name and push it into the cart.

   event.target is the exact thing the user clicked.
   ------------------------------------------------------------ */
productList.addEventListener("click", (event) => {
  if (event.target.classList.contains("add-btn")) {
    const name = event.target.dataset.name;
    cart.push(name);
    renderCart();
  }
});



/* ------------------------------------------------------------
   First paint — show all products and draw the empty cart.
   ------------------------------------------------------------ */

productList.innerHTML = productsToHTML(products);
renderCart();
