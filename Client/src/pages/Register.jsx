import { Link } from "react-router-dom";
import "../../public/style/Register.css";

const Register = () => {
  return (
    <div className="register-container">
      <form className="register-form">
        <h3 className="text-3xl">Đăng Ký</h3>
        <label htmlFor="username" className="font-bold">User Name</label>
        <input type="text" placeholder="Vui lòng nhập Tên" id="username" />
        <label htmlFor="email" className="font-bold">Email</label>
        <input type="email" placeholder="Vui lòng nhập email" id="email" />
        <label htmlFor="password" className="font-bold">Password</label>
        <input type="password" placeholder="Password" id="password" />
        <label htmlFor="confirm-password" className="font-bold">Confirm Password</label>
        <input type="password" placeholder="Confirm Password" id="confirm-password" />
        <button type="submit">Đăng Ký</button>
        <div className="social">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-google"></i>
        </div>
        <div className="register-bt"> 
          <Link to="/Login">Đăng Nhập</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
