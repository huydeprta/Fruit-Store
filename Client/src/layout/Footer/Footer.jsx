import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <hr className="footer-line" />
            <div className='footer-fo'>
                <div className="footer-left">
                    <h2>Fruit Store</h2>
                    <p>Fruit Store là thương hiệu trái cây tươi chất lượng cao, với đa dạng sản phẩm phục vụ mọi nhu cầu: đặc sản vùng miền, trái cây nhập khẩu, quà tặng trái cây, mâm ngũ quả, nước ép, và trái cây sấy.</p>
                    <div className="footer-icons">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-twitter"></i>
                    </div>
                </div>
                <div className="footer-center">
                    <h2>Fruit Store</h2>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </div>
                <div className="footer-right">
                    <h2>Gein In</h2>
                    <li>+ 034564634-</li>
                    <li>caothaihuy@gmail.com</li>
                </div>
            </div>
            <hr className="footer-line-1" />
            <div className="footer-copyright">
                <p>Copyright 2024 Fruit Store.com All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
