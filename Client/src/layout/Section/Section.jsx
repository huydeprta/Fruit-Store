// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./Section.css";

const Section = () => {

     const [currentSlide, setCurrentSlide] = useState(0);
     const slides = [
         "https://hoaqua.langsonweb.com/wp-content/uploads/2020/09/banner-traicay.jpg",
         "https://hoaqua.langsonweb.com/wp-content/uploads/2020/09/banner-traicay.jpg",
         "https://hoaqua.langsonweb.com/wp-content/uploads/2020/09/banner-traicay.jpg"
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

     // const handleLoginClick = () => {
     //     navigate('/Login');
     // };

     return ( 
          <>
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
 
export default Section;