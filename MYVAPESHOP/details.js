document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get("product");

    // Mock Product Data
    const productData = {
        "Product1": {
            name: "Product 1",
            price: "$25.00",
            image: "images/F1.webp",
            description: "High-quality glass bong with a sleek design.",
            material: "Borosilicate Glass",
            dimensions: "12 inches tall"
        },
        "Product2": {
            name: "Product 2",
            price: "$35.00",
            image: "images/F2.webp",
            description: "Smooth hitting dab rig with a unique percolator.",
            material: "Quartz",
            dimensions: "10 inches tall"
        },
        "Product3": {
            name: "Product 3",
            price: "$50.00",
            image: "images/03.png",
            description: "Premium hand pipe with intricate color work.",
            material: "Hand-blown Glass",
            dimensions: "6 inches long"
        }
    };

    if (productData[productName]) {
        document.getElementById("product-name").innerText = productData[productName].name;
        document.getElementById("product-price").innerText = productData[productName].price;
        document.getElementById("product-image").src = productData[productName].image;
        document.getElementById("product-description").innerText = productData[productName].description;
        document.getElementById("product-material").innerText = "Material: " + productData[productName].material;
        document.getElementById("product-dimensions").innerText = "Dimensions: " + productData[productName].dimensions;
    }
});
