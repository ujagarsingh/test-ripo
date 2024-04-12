import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import AddProduct from "./pages/AddProduct";
import ProductList from "./pages/ProductList";
import ViewProduct from "./pages/ViewProduct";
import Bill from "./pages/Bill";
import AddBill from "./pages/AddBill";
import EditProduct from "./pages/EditProduct";

function App() {

  const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to={"/"} />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={ <RequireAuth><Dashboard /></RequireAuth> } />
        <Route path='/addProduct' element={<RequireAuth><AddProduct /></RequireAuth>} />
        <Route path="/productList" element={<RequireAuth><ProductList /></RequireAuth>} />
        <Route path="/bill" element={<RequireAuth><Bill /></RequireAuth>} />
        <Route path="/addBill" element={<RequireAuth><AddBill /></RequireAuth>} />
        <Route path='/EditProduct/:id' element={<RequireAuth><EditProduct /></RequireAuth>} />
        <Route path='/viewProduct/:id' element={<RequireAuth><ViewProduct /></RequireAuth>} />
      </Routes>
    </Router>
  );
}

export default App;
