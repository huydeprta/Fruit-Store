import { createContext, useState, useEffect } from "react";
import { showToastSuccess } from "../config/toastConfig";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState({});

    useEffect(() => {
        // Khi component mount, lấy dữ liệu từ localStorage
        const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(cartItems);

        const storedQuantity = JSON.parse(localStorage.getItem("quantity")) || {};
        setQuantity(storedQuantity);

        const handleStorageChange = () => {
            const updatedCart = JSON.parse(localStorage.getItem("cart")) || [];
            setCart(updatedCart);
            const updatedQuantity = JSON.parse(localStorage.getItem("quantity")) || {};
            setQuantity(updatedQuantity);
        };

        window.addEventListener("storage", handleStorageChange);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

    const increaseQuantity = (productId) => {
        setQuantity(prevQuantities => {
            const newQuantities = {
                ...prevQuantities,
                [productId]: (prevQuantities[productId] || 1) + 1,
            };
            localStorage.setItem("quantity", JSON.stringify(newQuantities));
            return newQuantities;
        });
    };

    const decreaseQuantity = (productId) => {
        setQuantity(prevQuantities => {
            const newQuantities = {
                ...prevQuantities,
                [productId]: (prevQuantities[productId] > 1 ? prevQuantities[productId] - 1 : 1),
            };
            localStorage.setItem("quantity", JSON.stringify(newQuantities));
            return newQuantities;
        });
    };

    const addToCart = (product, quantity) => {
        const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        const productInCart = cartItems.find((item) => item._id === product._id);

        if (productInCart) {
            productInCart.quantity += quantity;
        } else {
            cartItems.push({ ...product, quantity });
        }

        localStorage.setItem("cart", JSON.stringify(cartItems));
        setCart(cartItems);
        showToastSuccess("Thêm thành công");
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => {
            const updatedCart = prevCart.filter(product => product._id !== productId);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
        });

        setQuantity(prevQuantity => {
            const newQuantity = { ...prevQuantity };
            delete newQuantity[productId];
            localStorage.setItem("quantity", JSON.stringify(newQuantity));
            return newQuantity;
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart, quantity }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
