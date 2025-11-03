import { useParams ,useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import AddToCartButton from "./zeptoAddToCart";
import ZeptoHeader from "./zeptoHeader";
import Footer1 from "./zeptoFooter1";

function ProductCategory() {
  const { category} = useParams();
  const [subCat, setSubCat] = useState(["All"]);
  const [loadingSub, setLoadingSub] = useState(true);

  const [products, setProducts] = useState([]);
  const [loadingProd, setLoadingProd] = useState(false);
  const [activeSub, setActiveSub] = useState("All");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/Home/${category}`)
      .then((res) => {
        const subs = res.data.subcategories || [];
        setSubCat(["All", ...subs.filter((s) => s !== "All")]);
        setLoadingSub(false);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
        setLoadingSub(false);
      });
  }, [category]);


  useEffect(() => {
    setLoadingProd(true);
    const subPath = activeSub === "All" ? `/${"All"}` : `/${activeSub}`;
    axios
      .get(`http://localhost:5000/api/Home/${category}${subPath}`)
      .then((res) => {
        setProducts(res.data);
        setLoadingProd(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoadingProd(false);
      });
  }, [category, activeSub]);

  if (loadingSub) return <p>Loading subcategories...</p>;

  return (
    <>
    <ZeptoHeader/>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "250px 1fr",
        columnGap: "20px",
        padding: "20px",
        marginTop : "130px"
      }}
    >
  
      <div style={{ display: "flex", flexDirection: "column"}}>
        
        {subCat.map((item, index) => (
          <div
            key={index}
            onClick={() => setActiveSub(item)}
            style={{
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "8px",
              border: activeSub === item ? "2px solid #7ab3efff" : "1px solid #ccc",
              cursor: "pointer",
              backgroundColor: activeSub === item ? "#e0f0ff" : "#f0f0f0",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              scrollBehavior : "smooth"
            }}
          >
            <span style={{ fontWeight: 500 }}>{item}</span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {products.map((product) => (
    <div
      key={product._id}
      onClick={() =>  navigate(`/product/${product._id}`)}
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        width: "200px",
      }
      
    }
    >
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />
      <div  
        style={{
          display :"flex",
          flexDirection : "row"
        }}
        >
        <p><b>Price:</b> ₹{product.price}</p>
       
      </div>
      
      <p><b>Weight:</b> {product.weight}</p>
      <p>{product.name}</p>
      
      
     
    </div>
  ))}
</div>

    </div>

    <Footer1/>
  </>
  );
}

export default ProductCategory;
