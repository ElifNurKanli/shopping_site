import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import PageNotFound from "./components/pages/PageNotFound";
import { ProductLayout } from "./components/pages/products";
import Productss from "./components/pages/products";

function SiteRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<ProductLayout />}>
        <Route index={true} element={<Productss />} />
      </Route>
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}

export default SiteRoutes;
