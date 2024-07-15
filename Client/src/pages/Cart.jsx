// eslint-disable-next-line no-unused-vars
import React from 'react';
import "../../public/style/Cart.css";
import Navbar from '../layout/Navbar/Navbar';
import Footer from '../layout/Footer/Footer';
import { Link } from 'react-router-dom';
const Cart = () => {


    return (
        <>
            <Navbar />
            <div className="cart-container">
                <div className="cart-items">
                    <table>
                        <thead>
                            <tr>
                                <th>Sản phẩm</th>
                                <th>Giá</th>
                                <th>Số lượng</th>
                                <th>Tổng</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img src="https://product.hstatic.net/200000377165/product/artboard_6_6b979af74f1447afb0e256d58b80611a_large.png" alt="product" />
                                </td>
                                <td>60.000₫</td>
                                <td>
                                    <button>-</button>
                                    <input type="text" value="1" readOnly />
                                    <button>+</button>
                                </td>
                                <td>60.000₫</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="cart-actions">
                        <Link to="/Product"><button className="continue-shopping">← TIẾP TỤC XEM SẢN PHẨM</button></Link>
                        <button className="update-cart">CẬP NHẬT GIỎ HÀNG</button>
                    </div>
                </div>
                <div className="cart-summary">
                    <h3>Tổng số lượng</h3>
                    <div className="summary-details">
                        <div className="summary-item">
                            <span>Tổng phụ</span>
                            <span>60.000₫</span>
                        </div>
                        <div className="summary-item">
                            <span>Tổng</span>
                            <span>60.000₫</span>
                        </div>
                    </div>
                    <Link to="/Chekout"><button className="checkout-button">TIẾN HÀNH THANH TOÁN</button></Link>
                    <button className="voucher-button">Phiếu ưu đãi</button>
                    <input type="text" placeholder="Mã ưu đãi" />
                    <button className="apply-voucher">Áp dụng</button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Cart;
