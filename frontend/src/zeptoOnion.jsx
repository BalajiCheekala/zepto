import Product from "./zeptoProductImagePage"; 
import ProductHighlights from "./zeptoProductHighlights";
import ProductInfo from "./zeptoProductInfo";
import "./zeptoOnion.css";
import AddToCartButton from "./zeptoAddToCart";
import Header from "./zeptoHeader";
import Footer1 from "./zeptoFooter1";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetails() {
  const { id } = useParams();
  const [onion, setOnion] = useState(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/product/${id}`)
      .then((res) => {
        setOnion(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading product...</p>;
  if (!onion) return <p>Product not found.</p>;

  return (
    <>
      <Header className="Header" />
      <div className="ProductContainer">
        <div className="Product">
          <div className="ProductImg">
            <Product {...onion} />
            <AddToCartButton className="AddToCartButton" />
          </div>

          <div className="ProductDetails">
            <ProductHighlights {...onion} />
            <ProductInfo {...onion} />
          </div>
        </div>
      </div>
      <Footer1 className="Footer1" />
    </>
  );
}
