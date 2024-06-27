import "./App.css";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Produc"; 
import { Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Products from "./components/Products/Produc";
const App = () => {

const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
    <div className="App">
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path="/" element={<Products />} />
      </Routes>
      <Footer />
    </div>
    </>
  );
}

export default App;
