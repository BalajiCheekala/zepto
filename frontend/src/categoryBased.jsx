import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Category() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/Home/category")
      .then((res) => {
        setCategories(res.data); 
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading categories...</p>;
  }

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((cat, index) => (
          <li
            key={index}
            onClick={() => navigate(`/Home/${cat}`)}
            style={{ cursor: "pointer", color: "blue" }}
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
