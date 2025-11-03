import React, { useEffect, useState } from "react";
import axios from "axios";

function Subcategories({ active }) {
  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (active && active !== "All") {
      setLoading(true);
      axios
        .get(`http://localhost:5000/api/Home/${active}`)
        .then((res) => {
          setSubcategories(res.data.subcategories || []);
        })
        .catch((err) => {
          console.error("Error fetching subcategories:", err);
          setSubcategories([]);
        })
        .finally(() => setLoading(false));
    } else {
      setSubcategories([]);
      setLoading(false);
    }
  }, [active]);

  if (loading) return <p>Loading subcategories...</p>;
  if (!subcategories.length) return null;

  return (
    <div style={{ marginTop: "10px" }}>
      <h4>Subcategories in {active}:</h4>
      <ul>
        {subcategories.map((sub, index) => (
          <li key={index}>{sub}</li>
        ))}
      </ul>
    </div>
  );
}

export default Subcategories;
