# Week 6 — Callbacks, `.map`, `.filter` & the DOM 🛍️

You're going to build a tiny **store** — a page that lists products, lets the user filter by what's on sale, and lets them **add items to a cart**. It's small on purpose: the goal is to *understand* the ideas, not to write a lot of code.

- **The DOM** — find an element, then change the page
- **Callbacks** — handing a function to another function
- **`.map()` & `.filter()`** — build the cards, then narrow the list
- **`addEventListener`** — react to clicks (filter + add to cart)

## Setup

1. **Fork** this repo to your account.
2. Clone it locally and open in your editor.
3. **Create your own branch** to work on, for example:
   ```bash
   git checkout -b week6-yourname
   ```
4. Open `index.html` in the browser.
5. Edit `challenges.js`. Refresh the page to see changes.

## What you'll build

```
┌─────────────────────────────────────┐
│   Gabi Store                        │
│                                     │
│   🛒 Cart (2)   [ T-Shirt ] [ Cap ] │
│                                     │
│   [ All Products ]  [ On Sale ]     │
│                                     │
│   ┌────────┐ ┌────────┐ ┌────────┐  │
│   │ Item 1 │ │ Item 2 │ │ Item 3 │  │
│   │  $25   │ │  $40   │ │  $15   │  │
│   │[Add 🛒]│ │[Add 🛒]│ │[Add 🛒]│  │
│   └────────┘ └────────┘ └────────┘  │
└─────────────────────────────────────┘
```

The HTML, CSS, and product data are already written. **Your job is the JavaScript.**

---

## Tasks

Work through them in order. **Tasks 1 and 4 are already written for you** — read them so you understand what's there. You write **Tasks 2, 3, and 5**. All the instructions live in the comments inside `challenges.js`.

### Task 1 — Select your elements 🔎  *(the DOM)* — ✅ done for you

At the top of `challenges.js`, the elements you'll reuse are already grabbed with `document.querySelector` (the product list, the filter bar, the two buttons, and the two cart elements). Read them so you know what variables exist before you start.

---

### Task 2 — Build the cards with `.map()` 🗺️  *(your turn ✍️)*

Write the `productsToHTML(list)` function. It should take the list of products and return **one** string of HTML — a card for each product. Use `.map()` to turn each product into a card, then join the results into a single string. The exact card markup to produce is shown in the comment above the function, including the **Add to Cart** button that stores the product's name in `data-name`.

---

### Task 3 — Filter the products on click 🖱️  *(addEventListener + `.filter()`, your turn ✍️)*

There's already **one** click listener on the whole filter bar. Step 1 (deciding which products to keep, using `.filter()`) is done for you. You finish two things:

- **Step 2:** put the filtered products on the page — pass them through `productsToHTML` and set the product list's `innerHTML`.
- **Step 3:** highlight the button that was clicked and un-highlight the other one, using `classList.toggle`.

The function handed to `.filter()` is a **callback** — it runs on every product and keeps the ones that return `true`.

> 💡 `classList.toggle("active", condition)` takes a true/false second argument: `true` adds the class, `false` removes it. Use that to light up the right button.

---

### Task 4 — Show the cart 🧾  *(`.map()` again)* — ✅ done for you

The `renderCart()` function is already written. Read it so you understand it: it sets the cart count from how many items are in the cart, and uses `.map()` to turn the list of names into the cart list. You'll *call* this function from Task 5.

---

### Task 5 — Add to Cart with **one** `addEventListener` 🛒  *(your turn ✍️)*

The Add buttons get redrawn every time you filter, so instead of wiring up each button there's **one** listener on the whole product list. Fill in the three steps inside it:

- **Step 1:** check whether the clicked element was an Add to Cart button.
- **Step 2:** if it was, read the product name off the button and add it to the `cart` array.
- **Step 3:** call `renderCart()` so the cart display updates.

> 💡 `event.target` is the exact thing the user clicked. Its `classList` tells you *if* it was an Add button, and its `dataset` reads the `data-name` you set back in Task 2.

The bottom of `challenges.js` already draws everything on page load, so once your three tasks work, the page comes alive on refresh.

---

## ✅ When you're done

- All 6 products show by default, each with an **Add to Cart** button
- Clicking **On Sale** shows only the sale items; the active button is highlighted
- Clicking **Add to Cart** bumps the cart count and adds the product's name to the list

> 🔍 Stuck? A fully working version lives in the **`completed/`** folder — peek only after you've given each task a real try.

## Submitting

Push your work to **your own branch** (the one you created in Setup):

```bash
git add .
git commit -m "Complete Week 6 store + cart"
git push -u origin week6-yourname
```

Then open a pull request from your branch and submit the link.

## 🚀 Stretch (optional)

- Add a third filter button, **Under $30**, that keeps only products cheaper than $30. Same pattern as the On Sale filter, just a different test.
- Show a total price next to the cart count by adding up the prices of everything in the cart.
- Add a **Clear cart** button that empties the cart and refreshes the display.
