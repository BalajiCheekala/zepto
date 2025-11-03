import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ZeptoHeader from "./zeptoHeader";
import { useNavigate } from "react-router-dom";

export default function SearchBySubcategory() {
  const [products, setProducts] = useState([]);
  const { subcategory } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/Home/subs/${subcategory}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log("Error fetching products by subcategory:", err);
      });
  }, [subcategory]); 

  return (
    <>
        <ZeptoHeader/>
        <div style={{margin : "50px"}}>
            <h2 style={{ marginTop: "120px" }}>{subcategory}</h2>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px" }}>
                {products.length > 0 ? (
                products.map((p) => (
                    <div
                    key={p._id}
                    style={{
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        padding: "15px",
                        width: "200px",
                    }}
                    onClick={() => navigate(`/product/${p._id}`)}
                    >
                    <img
                        src={p.image}
                        alt={p.name}
                        style={{ width: "100%", height: "150px", objectFit: "cover" }}
                    />
                    
                    <p>
                        <b>Price:</b> ₹{p.price}
                    </p>
                    <p>
                        <b>Weight:</b> {p.weight}
                    </p>
                    <p style={{fontFamily :"Aerial" , fontWeight : "lighter"}}>{p.name}</p>
                    </div>
                ))
                ) : (
                <p>No products found for this subcategory.</p>
                )}
            </div>
      </div>
    </>
  );
}
