import "../../public/style/Login.css";
import {  Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h3>Login</h3>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Gmail or Phone" id="username" />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" />
        <div className="Login-box">
          <a href="#">Quên mật Khẩu</a>
          <a><Link to="/Register">Đăng Ký Tài Khoản</Link></a>
        </div>
        
        <button type="submit">Login</button>
        <div className="social">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-google"></i>
        </div>
      </form>
    </div>
  );
};

export default Login;
