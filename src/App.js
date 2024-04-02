import logo from './logo.svg';
import './App.css';
import LoginPage from './Components/LoginPage';
import Dummy from './Components/Dummy';
import Dashboard from './Components/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <h1>test</h1>
      <Dashboard />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>

   
  );
}

export default App;
