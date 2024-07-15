import "./App.css";
import Products from "./pages/Product"; 
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Introduce from "./pages/Introduce";
import Chekout from "./pages/Chekout";
import Admin from "./pages/Admin/Admin";
const App = () => {

  return (
    <>
    <div className="App">
      
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Products />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Introduce" element={<Introduce />} />
        <Route path="/Chekout" element={<Chekout />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
