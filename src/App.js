import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AddProduct from "./pages/AddProduct";
import ProductList from "./pages/ProducrtList";
import ViewProduct from "./pages/ViewProduct";
import Bill from "./pages/Bill";
import Addbill from "./components/Addbill";
import EditProduct from "./pages/EditProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/product' element={<ProductList />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path="/product_list" element={<ProductList />} />
        <Route path="/bill" element={<Bill />} />
        <Route path="/addbill" element={<Addbill />} />
        <Route path='/EditProduct' element={<EditProduct />} />
        <Route path='/viewProduct' element={<ViewProduct/>}/>
      </Routes>
    </Router>
  );
}

export default App;
