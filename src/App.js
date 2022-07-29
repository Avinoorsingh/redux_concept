import Header from "./containers/header";
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProductListing from "./containers/productListing";
import ProductDetails from "./containers/productDetails";
import Footer from "./containers/footer";

function App() {
  return (
   <div className="App">
    <Router>
      <Header />
      <Routes>
      <Route exact path="/" element={<ProductListing/>}></Route>
      <Route exact path="/product/:productId" element={<ProductDetails/>} ></Route>
      <Route>404 Not Found!</Route>
      </Routes>
      {/* <Footer/> */}
    </Router>
    </div>
  );
}

export default App;
