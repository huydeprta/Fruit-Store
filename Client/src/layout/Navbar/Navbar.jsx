
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <>
            <nav className="nav">
                <div id="navbar">
                    <div className="box-logo">
                        <Link to="/">
                            <img className="img-logo" src="./src/assets/logo.jpg" alt="Fruit-Store" />
                        </Link>
                    </div>
                    <ul>
                        <li><Link to="/">TRANG CHỦ</Link></li>
                        <li><Link to="/product">SẢN PHẨM</Link></li>
                        <li><Link to="/blog">TIN TỨC</Link></li>
                        <li><Link to="/introduce">GIỚI THIỆU</Link></li>
                        <li><Link to="/contact">LIÊN HỆ</Link></li>
                    </ul>

                    <div className="navbar-right">
                        <div className="box-search">
                            <Link to="/cart"><span className="material-symbols-outlined">shopping_bag</span></Link>

                            <input type="text" placeholder="Tìm kiếm" className="search-input" />
                            <span className="material-symbols-outlined">search</span>
                        </div>
                        <div className="group-btn">
                            <button className="login-button">
                                <Link to="/login" className="btn-link">Đăng Nhập</Link>
                            </button>
                            <button className="login-button">
                                <Link to="/register" className="btn-link">Đăng Ký</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
