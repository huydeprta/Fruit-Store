import "../../public/style/Cart.css";
import Navbar from '../layout/Navbar/Navbar';
import Footer from '../layout/Footer/Footer';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "../hooks/CartContext";
import { formatCurrency } from "../config/formatCurrency";
import { useNavigate } from "react-router-dom";
import { showToastError } from "../config/toastConfig";

const Cart = () => {
    const { cart, decreaseQuantity, increaseQuantity, removeFromCart, quantity } = useContext(CartContext);
    const navigate = useNavigate()
    const calculateTotal = () => {
        return cart.reduce((total, product) => {
            const productQuantity = quantity[product._id] || 1;
            return total + product.price * productQuantity;
        }, 0);
    };
    const handleNavigateCheckout = () => {
        if (cart.length <= 0) {
            navigate('/')
            showToastError('Vui lòng thêm sản phẩm để tới thanh toán')
        } else {
            navigate('/checkout')
        }
    }

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
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((product, index) => {
                                const productQuantity = quantity[product._id] || 1;
                                return (
                                    <tr key={index}>
                                        <td>
                                            <img src={product.image[0]} alt={product.name} />
                                            <p>{product.name}</p>
                                        </td>
                                        <td>{formatCurrency(product.price)}</td>
                                        <td>
                                            <button onClick={() => decreaseQuantity(product._id)}>-</button>
                                            <input className="w-[50px] pl-4" type="text" value={productQuantity} readOnly />
                                            <button onClick={() => increaseQuantity(product._id)}>+</button>
                                        </td>
                                        <td>{formatCurrency(product.price * productQuantity)}</td>
                                        <td>
                                            <button onClick={() => removeFromCart(product._id)}>Xóa</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <div className="cart-actions">
                        <Link to="/Product">
                            <button className="continue-shopping">← TIẾP TỤC XEM SẢN PHẨM</button>
                        </Link>
                    </div>
                </div>
                <div className="cart-summary">
                    <h3>Tổng số lượng</h3>
                    <div className="summary-details">
                        <div className="summary-item">
                            <span>Tổng phụ</span>
                            <span>{formatCurrency(calculateTotal())}</span>
                        </div>
                        <div className="summary-item">
                            <span>Tổng</span>
                            <span>{formatCurrency(calculateTotal())}</span>
                        </div>
                    </div>
                    <button className="checkout-button" onClick={handleNavigateCheckout}>TIẾN HÀNH THANH TOÁN</button>
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
