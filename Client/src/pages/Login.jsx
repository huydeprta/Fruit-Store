import "../../public/style/Login.css";
import {  Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h1 className="w-[100]">Đăng Nhập</h1>
        <label htmlFor="username" className="font-bold">Tên tài khoản hoặc địa chỉ email *</label>
        <input type="text" placeholder="Gmail or Phone" id="username" />
        <label htmlFor="password" className="font-bold" >Mật khẩu *</label>
        <input type="password" placeholder="Password" id="password" />
        <div className="Login-box">
          <a href="#">Quên mật Khẩu</a>
          <a><Link to="/Register">Đăng Ký Tài Khoản</Link></a>
        </div>
        
        <button type="submit" >Login</button>
        <div className="social">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-google"></i>
        </div>
      </form>
    </div>
  );
};

export default Login;
