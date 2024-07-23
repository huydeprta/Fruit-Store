
import { Link } from "react-router-dom";
import "./Navbar.css";
import SearchProduct from "../../containers/searchProduct";
const Navbar = () => {
    return (
        <>
            <nav className="nav">
                <div id="navbar">
                    <div className="box-logo">
                        <Link to="/">
                            <img className="img-logo" src="http://hoaqua.langsonweb.com/wp-content/uploads/2020/09/logo-hoa-qua.png" alt="Fruit-Store" />
                        </Link>
                    </div>
                    <ul>
                        <li><Link to="/">Trang Chủ</Link></li>
                        <li><Link to="/product">Sản Phẩm</Link></li>
                        <li><Link to="/blog">Tin Tức</Link></li>
                        <li><Link to="/introduce">Giới Thiệu</Link></li>
                        <li><Link to="/contact">Liên Hệ</Link></li>
                    </ul>

                    <div className="navbar-right">
                        <div className=" box-search">
                            <SearchProduct></SearchProduct>
                            </div>
                            <div>
                            <Link to="/cart"><span className=" material-symbols-outlined">shopping_bag</span></Link>
                            </div>
                        <div className="group-btn">
                            <button className="login-button">
                                <Link to="/login" className="btn-link">Đăng Nhập</Link>
                            </button>
                            <button className="login-button">
                                <Link to="/register" className="btn-link">Đăng Ký</Link>
                            </button>
                        </div>
                        <div>
                            <Link to={'/admin'}>Admin</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
