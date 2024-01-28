import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <h1>404-PageNotFound</h1>
      <Link to="/" className="btn btn-info">
        Click to go to the main page
      </Link>
    </>
  );
}

export default PageNotFound;
