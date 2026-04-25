# Week 6 — `.map`, `.filter` & the DOM 🛍️

You're going to build a tiny **product catalog** — a single page that lists products from an array and lets the user filter by what's on sale. This is the same pattern every e-commerce site uses.

## Setup

1. **Fork** this repo to your account.
2. Clone it locally and open in your editor.
3. Open `index.html` in the browser.
4. Edit `challenges.js`. Refresh the page to see changes.

## What you'll build

```
┌─────────────────────────────────────┐
│   Gabi Store                        │
│                                     │
│   [ All Products ]  [ On Sale ]     │
│                                     │
│   ┌────────┐ ┌────────┐ ┌────────┐  │
│   │ Item 1 │ │ Item 2 │ │ Item 3 │  │
│   │  $25   │ │  $40   │ │  $15   │  │
│   └────────┘ └────────┘ └────────┘  │
└─────────────────────────────────────┘
```

The HTML, CSS, and product data are already written. **Your job is the JavaScript** — about 30 lines total.

## Tasks

### Task 1 — Get the Data with `.map()` 🗺️

Look at the `products` array in `challenges.js`. Each product is an object with `name`, `price`, `onSale`, and `image` (a URL to a product photo from Unsplash).

Write a function `productsToHTML(productList)` that uses `.map()` to turn an array of products into HTML strings. Each card should look like:

```html
<div class="card">
  <img src="PRODUCT_IMAGE_URL" alt="PRODUCT_NAME" />
  <h3>Product Name</h3>
  <p class="price">$25</p>
</div>
```

> 💡 Use `.map()` followed by `.join("")` to turn the array of strings into one big string.

---

### Task 2 — Show All Products on the Page 📺

Find the `<div id="product-list">` element in the page using `document.querySelector`.

Set its `innerHTML` to the result of `productsToHTML(products)`.

When you refresh the page, you should see all 6 products as cards.

---

### Task 3 — Filter Products on Sale 🏷️

There are two buttons in the HTML: `#btn-all` and `#btn-sale`.

- **All Products button** → show every product
- **On Sale button** → show only products where `onSale` is `true`

Use `.addEventListener("click", ...)` for each button. Use `.filter()` to get the right list, then re-render.

> 💡 You'll write almost the same code twice — that's fine for now. Programmers refactor later.

---

### Task 4 — Highlight the Active Button ✨

When the user clicks a button, give it the class `active` and remove `active` from the other button.

Hint:
```js
btnAll.classList.remove("active");
btnSale.classList.add("active");
```

The CSS already styles `.active` to look different (blue background).

---

## ✅ When you're done

- All 6 products show by default
- Clicking **On Sale** shows only the sale items
- Clicking **All Products** shows everything again
- The active button is visually highlighted

## Submitting

```bash
git add .
git commit -m "Complete Week 6 product catalog"
git push
```

Submit your repo link.

## 🚀 Stretch (optional)

- Add a third filter button: **Under $30**
- When `onSale` is true, add a red "SALE" badge to that product card
- Add a search box that filters products by name as you type (use the `input` event)
