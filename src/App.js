import "./App.css";
import LoginPage from "./Components/LoginPage";
import Dashboard from "./Components/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
