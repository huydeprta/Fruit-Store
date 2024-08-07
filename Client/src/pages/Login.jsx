import "../../public/style/Login.css";
import {  Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { showToastError } from "../config/toastConfig";
import AuthService from "../services//admin/authService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

    const loginUser = async ()=> {
      const dataLogin = {
        email: email,
        password: password
      };

      if (password.length < 8) {
        return showToastError("Mật khẩu phải có ít nhất 8 ký tự");
      }
  
    
   
     const userLog =  await AuthService.Login(dataLogin);
     if(userLog === undefined){
      return  showToastError("Mât khẩu không đúng");
     }
     navigate("/")
     window.location.reload()
    }

  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className="text-2xl">Đăng Nhập</h1>
        <label htmlFor="email" className="font-bold">Tên tài khoản hoặc địa chỉ email *</label>
        <input type="text"  id="email"  onChange={(e) => setEmail(e.target.value)}/>
        <label htmlFor="password" className="font-bold" >Mật khẩu *</label>
        <input type="password"  id="password" onChange={(e) => 
          setPassword(e.target.value)}/>
        <div className="Login-box">
          <a href="#">Quên mật Khẩu</a>
          <a><Link to="/Register">Đăng Ký Tài Khoản</Link></a>
        </div>
        
        <button onClick={loginUser}>Login</button>
        <div className="socail">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-google"></i>
        </div>
      </div>
    </div>
  );
};

export default Login;
