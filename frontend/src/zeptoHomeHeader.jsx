import React, { useState, } from "react";
import Header from "./zeptoHeader";
import ExploreItems from "./zeptoExploreMore";
import CoffeeHome from "./zeptoHomeCoffeePage";
import { useNavigate } from "react-router-dom";
import GroceryPage from "./HomeGrocery&Kitchen";
import SnacksPage from "./SnacksDrinks";

function HomeHeader() {
  const categories = [
    { name: "All", icon: "fa-bag-shopping" },
    { name: "cafe", icon: "fa-mug-saucer" },
    { name: "home", icon: "fa-house" },
    { name: "toys", icon: "fa-puzzle-piece" },
    { name: "fresh", icon: "fa-apple-whole" },
    { name: "electronics", icon: "fa-headphones" },
    { name: "mobiles", icon: "fa-mobile-screen" },
    { name: "beauty", icon: "fa-spa" },
    { name: "fashion", icon: "fa-shirt" },
  ];

  const [active, setActive] = useState("All");

  const navigate = useNavigate(); 
  const handleCategoryClick = (catName) => {
    setActive(catName);
    navigate(`/Home/${catName}`); 
  };

  return (
    <>
    <div style={{ padding: "20px" }}>
      <Header />

      <div
        style={{
          zIndex: 0,
          display: "flex",
          gap: "15px",
          alignItems: "center",
          flexWrap: "wrap",
          marginTop: "110px",
          position :"relative"

        }}
      >
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => handleCategoryClick(cat.name)}
            style={{
              background: active === cat.name ? "#f0f0f0" : "transparent",
              border: active === cat.name ? "2px solid #8b5cf6" : "1px solid #ccc",
              padding: "8px 12px",
              borderRadius: "8px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              color: "#333",
              gap: "8px",
              fontSize: "15px",
              transition: "0.2s",
            }}
          >
            <i
              className={`fa-solid ${cat.icon}`}
              style={{ color: active === cat.name ? "#8b5cf6" : "#555" }}
            ></i>
            {cat.name}
          </button>
        ))}
      </div>

    
    </div>
    <CoffeeHome/>
    <ExploreItems/>
    <GroceryPage/>
    <SnacksPage/>
    </>
  );
}

export default HomeHeader;
