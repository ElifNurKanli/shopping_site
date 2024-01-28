function ProductCard({ item }) {
  return (
    <div className="col-sm mb-3">
      <div className="card" style={{ width: "18rem" }}>
        <img src={item.image} className="card-img-top" alt={item.title} />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.description.substring(0, 25)}...</p>
          <p className="lead">{item.price}</p>
          <a href="#" className="btn btn-primary">
            Favorite
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
