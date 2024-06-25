// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "https://cdn.galaxycine.vn/media/2024/5/27/2048_1716778970480.jpg",
        "https://cdn.galaxycine.vn/media/2024/6/6/xummer-combo-2048x682_1717668878472.jpg",
        "https://cdn.galaxycine.vn/media/2024/6/13/io2-2048_1718251991479.jpg",
        "https://cdn.galaxycine.vn/media/2024/6/13/the-exorcism-russell-crowe-2_1718259981357.jpg",
        "https://cdn.galaxycine.vn/media/2024/2/8/2048x682_1707364876796.jpg"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds

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
            <nav>
                <div id="navbar">
                    <a href="index.html">
                        <img src="https://www.galaxycine.vn/_next/static/media/galaxy-logo-mobile.074abeac.png" alt="Galaxy Logo" />
                    </a>
                    <ul>
                        <li><a href="index.html">Phim</a></li>
                        <li><a href="index.html">Góc Điện Ảnh</a></li>
                        <li><a href="index.html">Sự Kiện</a></li>
                        <li><a href="index.html">Rạp/Giá Vé</a></li>
                    </ul>
                    <div className="navbar-right">
                        <input type="text" placeholder="Tìm kiếm" className="search-input" />
                        <button className="login-button">Đăng Nhập</button>
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
