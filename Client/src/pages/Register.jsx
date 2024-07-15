import "../../public/style/Register.css";
import {  Link } from "react-router-dom";
const Register = () => {
     return ( 
          <div className="register-container">
          <form className="register-form">
          <h3>Đăng Ký</h3>
          <label htmlFor="username">Email</label>
          <input type="text" placeholder="Email@gmail.com" id="username" />
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" id="password" />
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" placeholder="Confirm Password" id="confirm-password" />
          <button type="submit">Đăng Ký</button>
          <div className="social">
               <i className="fa-brands fa-facebook"></i>
               <i className="fa-brands fa-google"></i>
          </div>
          <div className="register-bt"> 
               <a><Link to="/Login">Đăng Nhập</Link></a>
          </div>
          </form>
    </div>
      );
}
 
export default Register;