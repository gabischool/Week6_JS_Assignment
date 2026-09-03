/* ============================================================
   Week 6 — Product Catalog + Cart
   ============================================================ */

// Product data
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


/* ============================================================
   Task 1 — Select elements
   ============================================================ */

const productList = document.querySelector("#product-list");
const filters = document.querySelector("#filters");
const btnAll = document.querySelector("#btn-all");
const btnSale = document.querySelector("#btn-sale");
const cartCount = document.querySelector("#cart-count");
const cartItems = document.querySelector("#cart-items");

let cart = [];


/* ============================================================
   Task 2 — Turn products into HTML
   ============================================================ */

function productsToHTML(list) {
  return list
    .map((product) => `
      <div class="card">
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p class="price">$${product.price}</p>
        <button class="add-btn" data-name="${product.name}">
          Add to Cart 🛒
        </button>
      </div>
    `)
    .join("");
}


/* ============================================================
   Task 3 — Filter products
   ============================================================ */

filters.addEventListener("click", (event) => {
  const onSaleOnly = event.target.id === "btn-sale";

  let visible = products;

  if (onSaleOnly) {
    visible = products.filter((product) => product.onSale);
  }

  productList.innerHTML = productsToHTML(visible);

  btnAll.classList.toggle("active", !onSaleOnly);
  btnSale.classList.toggle("active", onSaleOnly);
});


/* ============================================================
   Task 4 — Render cart
   ============================================================ */

function renderCart() {
  cartCount.textContent = cart.length;

  cartItems.innerHTML = cart
    .map((name) => `<li>${name}</li>`)
    .join("");
}


/* ============================================================
   Task 5 — Add to Cart
   ============================================================ */

productList.addEventListener("click", (event) => {
  if (event.target.classList.contains("add-btn")) {
    const productName = event.target.dataset.name;

    cart.push(productName);

    renderCart();
  }
});


/* ============================================================
   First paint
   ============================================================ */

productList.innerHTML = productsToHTML(products);

renderCart();