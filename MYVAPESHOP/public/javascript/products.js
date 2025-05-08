// public/javascript/products.js

document.addEventListener("DOMContentLoaded", async () => {
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
  
      console.log("✅ Products from backend:", data);
  
      const container = document.querySelector(".products-list");
  
      const dynamicProducts = data;
  
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
  