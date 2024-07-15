// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
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
                        <li><Link to="/Product">SẢN PHẨM</Link></li>
                        <li><Link to="/Blog">TIN TỨC</Link></li>
                        <li><Link to="/Introduce">GIỚI THIỆU</Link></li>
                        <li><Link to="/Contact">LIÊN HỆ</Link></li>
                    </ul>

                    <div className="navbar-right">
                        <div className="box-search">
                            <Link to="/Cart"><span className="material-symbols-outlined">shopping_bag</span></Link>

                            <input type="text" placeholder="Tìm kiếm" className="search-input" />
                            <span className="material-symbols-outlined">search</span>
                        </div>
                        <button className="login-button">
                            <Link to="/Login" className="login-link">Đăng Nhập</Link>
                        </button>
                    </div>

                </div>
            </nav>


        </>
    );
}

export default Navbar;
