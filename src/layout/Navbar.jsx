// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./Navbar.css";
const Navbar = ({setShowLogin}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "https://theme.hstatic.net/200000377165/1001243925/14/slide_1_img.jpg?v=17",
        "https://theme.hstatic.net/200000377165/1001243925/14/slide_3_img.jpg?v=17",
        "https://theme.hstatic.net/200000377165/1001243925/14/slide_2_img.jpg?v=17",
        "https://theme.hstatic.net/200000377165/1001243925/14/slide_3_img.jpg?v=17"

    ];

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000); 

        return () => clearInterval(timer);
    }, [currentSlide]);

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
    };

    return (
        <>
           <nav className="nav">
    <div id="navbar">
        <div className="box-logo">
            <a href="index.html">
                <img className="img-logo" src="./src/assets/logo.jpg" alt="Fruit-Store" />
            </a>
        </div>
        <ul>
            <li><a href="index.html">GIỚI THIỆU</a></li>
            <li><a href="index.html">SẢN PHẨM</a></li>
            <li><a href="index.html">TIN TỨC</a></li>
            <li><a href="index.html">HỆ THỐNG BÁN HÀNG</a></li>
            <li><a href="index.html">LIÊN HỆ</a></li>
        </ul>
        <div className="navbar-right">
            <div className="box-search">
                <input type="text" placeholder="Tìm kiếm" className="search-input" />
                <span className="material-symbols-outlined">search</span>
            </div>
            <button className="login-button" onClick={()=>setShowLogin(true)}>Đăng Nhập</button>
        </div>
    </div>
</nav>

            <div className="slider">
                <button className="prev" onClick={prevSlide}>❮</button>
                <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {slides.map((slide, index) => (
                        <div className={`slide ${index === currentSlide ? "active" : ""}`} key={index}>
                            <img src={slide} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <button className="next" onClick={nextSlide}>❯</button>
            </div>
        </>
    );
}

export default Navbar;
