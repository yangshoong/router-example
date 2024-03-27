import {useState} from "react";
import './App.css';
import Homepage from './page/Homepage';
import Aboutpage from './page/Aboutpage';
import { Routes, Route, Navigate } from "react-router-dom";
import ProductDetailPage from './page/ProductDetailPage';
import Productpage from './page/Productpage';
import LoginPage from './page/LoginPage';
import UserPage from './page/UserPage';




function App() {
  const [authenticate, setAuthenticate] = useState(false);
  const PrivateRoute = () => {
    return authenticate == true?<UserPage/>:<Navigate to="/login"/>
  }

  return (
    <div >
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/products" element={<Productpage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/user" element={<PrivateRoute />} />

      </Routes>
    </div>
  );
}

export default App;
