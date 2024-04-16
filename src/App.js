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
import CategoryList from "./pages/CategoryList";
import AddCategory from "./pages/AddCategory";
import ViewCategory from "./pages/ViewCategory";
import EditCategory from "./pages/EditCategory";
import ClientList from "./pages/ClientList";
import AddClient from "./pages/AddClient";
import ViewClient from "./pages/ViewClient";
import EditClient from "./pages/EditClient";
import BillList from "./pages/Bill_List";
import EditBill from "./pages/EditBill";

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
        <Route path="/billList" element={<RequireAuth><BillList /></RequireAuth>} />
        <Route path="/addBill" element={<RequireAuth><AddBill /></RequireAuth>} />
        <Route path='/EditProduct/:id' element={<RequireAuth><EditProduct /></RequireAuth>} />
        <Route path='/viewProduct/:id' element={<RequireAuth><ViewProduct /></RequireAuth>} />
        <Route path='/viewProduct/:id' element={<RequireAuth><ViewProduct /></RequireAuth>} />
        <Route path='/categoryList' element={<RequireAuth>< CategoryList /></RequireAuth>} />
        <Route path='/addCategory' element={<RequireAuth>< AddCategory /></RequireAuth>} />
        <Route path='/viewCategory/:id' element={<RequireAuth><ViewCategory /></RequireAuth>} />
        <Route path='/editCategory/:id' element={<RequireAuth><EditCategory /></RequireAuth>} />
        <Route path='/clientList' element={<RequireAuth><ClientList /></RequireAuth>} />
        <Route path='/addClient' element={<RequireAuth><AddClient /></RequireAuth>} />
        <Route path='/viewClient/:id' element={<RequireAuth><ViewClient /></RequireAuth>} />
        <Route path='/editClient/:id' element={<RequireAuth><EditClient /></RequireAuth>} />
          <Route path="/editBill/:id" element={<RequireAuth><EditBill /></RequireAuth>} />
      </Routes>
    </Router>
  );
}

export default App;
