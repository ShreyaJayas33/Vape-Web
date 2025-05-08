// public/javascript/details.js

document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) {
    console.error("❌ No product ID in URL.");
    return;
  }

  try {
    const res = await fetch(`/api/products/${id}`);
    const product = await res.json();

    if (!product || product.error) {
      document.querySelector(".details-page").innerHTML = "<p>❌ Product not found.</p>";
      return;
    }

    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = `$${product.price}`;
    document.getElementById("product-description").textContent = product.description;
    document.getElementById("product-material").textContent = product.material || "TBD";
    document.getElementById("product-dimensions").textContent = product.dimensions || "TBD";
    document.getElementById("product-image").src = `/${product.image_path}`;

  } catch (err) {
    console.error("❌ Failed to load product:", err);
  }
});
