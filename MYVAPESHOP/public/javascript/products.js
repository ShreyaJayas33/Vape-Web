// public/javascript/product.js
/**
 * Name: Shreya Jayas
 * Date: 05.08.2025
 * CSC 372-01
 *
 * This is the frontend JavaScript for loading products on the products page.
 * It fetches data from the backend and renders product cards dynamically.
 */

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const res = await fetch("/api/products/json"); // ✅ updated to JSON-specific endpoint
    const data = await res.json();

    console.log("✅ Products from backend:", data);

    const container = document.querySelector(".products-list");

    // ✅ Ensure we always have an array to work with
    const dynamicProducts = Array.isArray(data) ? data : data.products;

    if (!Array.isArray(dynamicProducts)) {
      console.error("❌ Expected array of products but got:", dynamicProducts);
      return;
    }

    dynamicProducts.forEach(product => {
      const card = document.createElement("div");
      card.classList.add("product-card");
      card.setAttribute("data-product-id", product.product_id);

      card.innerHTML = `
        <a href="details.html?id=${product.product_id}">
            <img src="/${product.image_path}" alt="${product.name}">
        </a>
        <h2 class="product-name">${product.name}</h2>
        <p class="price">$${product.price}</p>
        <a href="details.html?id=${product.product_id}" class="details-link">View Details</a>
      `;

      container.appendChild(card);
    });

  } catch (err) {
    console.error("❌ Error loading products from backend:", err);
  }
});
