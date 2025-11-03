import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CoffeeHome() {
  const [products, setProducts] = useState([]); 
  const navigate = useNavigate();
  const category = "cafe";
  const subcat = "/Tea & Coffee";

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/Home/${category}${subcat}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category, subcat]); 

  return (
    <>
      <div
        style={{
          height: "300px",
          background: "#E1D0B3",
          margin: "55px",
          borderRadius: "20px",
          marginTop: "10px",
          display: "grid",
          gridTemplateColumns: "250px 1fr",
          padding: "15px",
          overflow: "hidden",
          gap : "40px"
        }}
      >
     
        <div
          style={{
            background: "#E1D0B3",
            padding: "20px",
          }}
        >
          <p
            style={{
              background: "#E1D0B3",
              fontFamily: "Aerial",
              color: "brown",
            }}
          >
            COFFEE LOVERS
          </p>
          <h1
            style={{
              background: "#E1D0B3",
              fontFamily: "Aerial",
              color: "brown",
            }}
          >
            Dive into the
          </h1>
          <h1
            style={{
              background: "#E1D0B3",
              fontFamily: "Aerial",
              color: "brown",
            }}
          >
            world of fresh
          </h1>
          <h1
            style={{
              background: "#E1D0B3",
              fontFamily: "Aerial",
              color: "brown",
            }}
          >
            brew
          </h1>
          <div
            style={{
              height: "40px",
              background: "brown",
              color: "white",
              width: "100px",
              borderRadius: "10px",
              textAlign: "center",
              marginTop: "10px",
              cursor: "pointer",
            }}
          >
            <button
              style={{
                all: "unset",
                padding: "8px",
                cursor: "pointer",
              }}
              onClick={()=>{navigate(`/Home/subs/Tea & Coffee`)}}
            >
              More items
            </button>
          </div>
        </div>
        <div
          style={{
            background: "#E1D0B3",
            display: "flex",
            alignItems: "center",
            overflowX: "auto",
            gap: "20px",
            scrollBehavior: "smooth",
            padding: "10px",
          }}
        >
          {products.map((p) => (
            <div
              key={p._id}
              style={{
                minWidth: "220px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "10px",
                backgroundColor: "#fff",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              } 
            }
            onClick={() =>  navigate(`/product/${p._id}`)}
            >
              <img
                src={p.image}
                alt={p.name}
                style={{
                  width: "100%",
                  height: "150px",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
              <h4 style={{ margin: "10px 0 5px 0" }}>{p.name}</h4>
              <p style={{ color: "gray", fontSize: "14px" }}>
                ₹{p.price} &nbsp;
                <span
                  style={{
                    textDecoration: "line-through",
                    color: "#999",
                  }}
                >
                  ₹{p.oldPrice || p.price + 20}
                </span>
              </p>
              <button
                style={{
                  backgroundColor: "#fff",
                  border: "2px solid #ff007f",
                  borderRadius: "8px",
                  color: "#ff007f",
                  padding: "5px 15px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                ADD
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
