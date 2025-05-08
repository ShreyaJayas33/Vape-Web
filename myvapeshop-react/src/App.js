import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5055/api/products/json")
      .then(res => setProducts(res.data))
      .catch(err => console.error("❌ Error fetching products:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product List</h1>
      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product.product_id}>
              <strong>{product.name}</strong> - ${product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
