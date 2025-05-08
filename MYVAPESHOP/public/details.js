document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");
  
    if (!productId) {
      document.querySelector(".product-details").innerHTML = "<h1>Product not found</h1>";
      return;
    }
  
    try {
      const res = await fetch(`/api/products/${productId}`);
      const product = await res.json();
  
      if (product.error) {
        document.querySelector(".product-details").innerHTML = "<h1>Product not found</h1>";
        return;
      }
  
      // Populate product details
      document.getElementById("product-name").textContent = product.name;
      document.getElementById("product-price").textContent = `$${product.price}`;
      document.getElementById("product-description").textContent = product.description || "Description not available";
      document.getElementById("product-material").textContent = `Material: ${product.material || "N/A"}`;
      document.getElementById("product-dimensions").textContent = `Dimensions: ${product.dimensions || "N/A"}`;
      document.getElementById("product-image").src = `/${product.image_path}`;
      document.getElementById("product-image").alt = product.name;
  
      // Add to cart logic
      document.querySelector(".add-to-cart").addEventListener("click", function () {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let quantity = parseInt(document.getElementById("quantity").value) || 1;
  
        let existingItem = cart.find(item => item.name === product.name);
  
        if (existingItem) {
          existingItem.quantity += quantity;
        } else {
          cart.push({
            name: product.name,
            price: product.price,
            image: product.image_path,
            quantity: quantity
          });
        }
  
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
        alert(`${product.name} added to cart!`);
      });
  
    } catch (err) {
      console.error("❌ Error fetching product:", err);
      document.querySelector(".product-details").innerHTML = "<h1>Error loading product</h1>";
    }
  
    function updateCartCount() {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      document.getElementById("cart-count").textContent = totalItems;
    }
  
    updateCartCount(); // initialize cart count
  });
  