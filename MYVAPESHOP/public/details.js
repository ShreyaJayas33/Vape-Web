document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productKey = urlParams.get("product");

    // Product Data (Ensure accurate image paths)
    const productData = {
        "Product1": {
            name: "Aztec Retro Rainbow Circle Wig-Wag Decal Beaker Bong (11\")",
            price: 39.99,
            description: "Stylish beaker bong with an Aztec-inspired design.",
            material: "Borosilicate Glass",
            dimensions: "Height: 11 inches",
            image: "images/F1.webp"
        },
        "Product2": {
            name: "Clear 8-Arm Tree Perc Bubbler Rig (8\")",
            price: 49.99,
            description: "Premium bubbler rig with an 8-arm tree percolator.",
            material: "Borosilicate Glass",
            dimensions: "Height: 8 inches",
            image: "images/F2.webp"
        },
        "Product3": {
            name: "7mm Color Accent Classic Beaker Bong (12\")",
            price: 69.99,
            description: "A thick-walled beaker bong with colorful accents and great durability.",
            material: "7mm Borosilicate Glass",
            dimensions: "Height: 12 inches",
            image: "images/F3.webp"
        }
    };

    // Check if the product exists 
    if (productKey in productData) {
        document.getElementById("product-name").textContent = productData[productKey].name;
        document.getElementById("product-price").textContent = `$${productData[productKey].price.toFixed(2)}`;
        document.getElementById("product-description").textContent = productData[productKey].description;
        document.getElementById("product-material").textContent = `Material: ${productData[productKey].material}`;
        document.getElementById("product-dimensions").textContent = `Dimensions: ${productData[productKey].dimensions}`;
        document.getElementById("product-image").src = productData[productKey].image;
        document.getElementById("product-image").alt = productData[productKey].name;

        document.querySelector(".add-to-cart").addEventListener("click", function () {
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            let quantity = parseInt(document.getElementById("quantity").value) || 1;

            let existingItem = cart.find(item => item.name === productData[productKey].name);

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cart.push({
                    name: productData[productKey].name,
                    price: productData[productKey].price,
                    image: productData[productKey].image,
                    quantity: quantity
                });
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartCount();
            alert(`${productData[productKey].name} added to cart!`);
        });
    } else {
        document.querySelector(".product-details").innerHTML = "<h1>Product not found</h1>";
    }

    function updateCartCount() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        document.getElementById("cart-count").textContent = totalItems;
    }

    updateCartCount(); // Call function on page load
});
