document.addEventListener("DOMContentLoaded", function () {
    // Get product name from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productKey = urlParams.get("product");

    // Product details object (update with your actual data)
    const productData = {
        "Product1": {
            name: "Aztec Retro Rainbow Circle Wig-Wag Decal Beaker Bong (11\")",
            price: "$39.99",
            description: "This stylish beaker bong features an Aztec-inspired design, durable glass, and smooth airflow.",
            material: "High-quality Borosilicate Glass",
            dimensions: "Height: 11 inches",
            image: "images/F1.webp"
        },
        "Product2": {
            name: "Clear 8-Arm Tree Perc Bubbler Rig (8\")",
            price: "$49.99",
            description: "A premium bubbler rig with an 8-arm tree percolator for smoother hits.",
            material: "Borosilicate Glass",
            dimensions: "Height: 8 inches",
            image: "images/F2.webp"
        },
        "Product3": {
            name: "7mm Color Accent Classic Beaker Bong (12\")",
            price: "$69.99",
            description: "A thick-walled beaker bong with colorful accents and great durability.",
            material: "7mm Borosilicate Glass",
            dimensions: "Height: 12 inches",
            image: "images/F3.webp"
        }
    };

    // Check if the product exists
    if (productKey in productData) {
        document.getElementById("product-name").textContent = productData[productKey].name;
        document.getElementById("product-price").textContent = productData[productKey].price;
        document.getElementById("product-description").textContent = productData[productKey].description;
        document.getElementById("product-material").textContent = "Material: " + productData[productKey].material;
        document.getElementById("product-dimensions").textContent = "Dimensions: " + productData[productKey].dimensions;
        document.getElementById("product-image").src = productData[productKey].image;
        document.getElementById("product-image").alt = productData[productKey].name;
    } else {
        document.querySelector(".product-details").innerHTML = "<h1>Product not found</h1>";
    }
});
