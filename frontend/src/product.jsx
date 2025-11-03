import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products") 
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <>
     <h1> Zepto Products</h1>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }} >
     
      {products.map((product) => (
        <div
          key={product._id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "15px",
            width: "220px",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "100%", height: "150px", objectFit: "cover" }}
          />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p><b>Price:</b> ₹{product.price}</p>
          <p><b>Stock:</b> {product.stock}</p>
          <p><b>Weight:</b> {product.weight}</p>

       
          <button onClick={() => navigate(`/product/${product._id}`)}>
            view
          </button>
        </div>
        
      ))}
    </div >
      </>
  );
}
