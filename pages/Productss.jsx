import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function Productss() {
  const [last10Products, setLast10Products] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((res) => setLast10Products(res));
  });
  return (
    <>
      <h4>Products</h4>
      <div className="row row-cols-sm-3 row-cols-md-4">
        {last10Products.map((products) => (
          <ProductCard key={products.id} item={products} />
        ))}
      </div>
    </>
  );
}

export default Productss;
