import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Link componentini import et

function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((res) => setCategories(res));
  }, []);

  return (
    <>
      <h4>Categories</h4>
      <div className="list-group">
        {categories.map((category, index) => (
          <Link key={index} to={`/products/category/${category}`}>
            {category.toUpperCase()}
          </Link>
        ))}

        <a href="#" className="list-group-item list-group-item-action"></a>
      </div>
    </>
  );
}

export default Category;
