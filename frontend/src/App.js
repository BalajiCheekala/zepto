import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Products from "./product";
import ProductDetails from "./zeptoOnion";
import HomeHeader from "./zeptoHomeHeader";
import ProductCategory from "./productsByCategory";
import SearchBySubCategory from "./zeptoSearchBySubcategory"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeHeader />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/Home/:category" element={<ProductCategory/>}/>
        <Route path="/Home/:category/:subcategory" element={<ProductCategory/>}/>
        <Route path="/Home/subs/:subcategory" element={<SearchBySubCategory />} />

       </Routes> 
    </Router>
    
  );
}

export default App;
