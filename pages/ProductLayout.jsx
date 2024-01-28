import Category from "./Category";
function ProductLayout() {
  return (
    <>
      <div className="row">
        <div className="col-sm-8"></div>

        <div className="col-sm-4">
          <Category />
        </div>
      </div>
    </>
  );
}

export default ProductLayout;
