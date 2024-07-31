import { Link } from "react-router-dom";
import "../../public/style/Register.css";
import AuthService from "../services/authService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { showToastError } from "../config/toastConfig";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const registerUser = async () => {
    const dataRegister = {
      username: userName,
      email: email,
      password: password,
    };

    if (password.length < 8) {
      return showToastError("Mật khẩu phải có ít nhất 8 ký tự");
    }

    if (password !== confirmPassword) {
      return showToastError("Mật khẩu không khớp");
    }

    await AuthService.Register(dataRegister);
    navigate("/login");
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h3 className="text-3xl">Đăng Ký</h3>
        <label htmlFor="username" className="font-bold">User Name</label>
        <input type="text" placeholder="Vui lòng nhập Tên" id="username" onChange={(e) => setUserName(e.target.value)} />
        <label htmlFor="email" className="font-bold">Email</label>
        <input type="email" placeholder="Vui lòng nhập email" id="email" onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password" className="font-bold">Password</label>
        <input type="password" placeholder="Password" id="password" onChange={(e) => setPassword(e.target.value)} />
        <label htmlFor="confirm-password" className="font-bold">Confirm Password</label>
        <input type="password" placeholder="Confirm Password" id="confirm-password" onChange={(e) => setConfirmPassword(e.target.value)} />
        <button onClick={registerUser}>Đăng Ký</button>
        <div className="social">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-google"></i>
        </div>
        <div className="register-bt">
          <Link to="/Login">Đăng Nhập</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
