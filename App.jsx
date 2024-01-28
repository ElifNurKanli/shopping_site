import Navbar from "./components/navbar";
import SiteRoutes from "./SiteRoutes";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="col-sm-12">
          <SiteRoutes />
        </div>
      </div>
    </>
  );
}

export default App;
