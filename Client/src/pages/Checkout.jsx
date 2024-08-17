import "../../public/style/Chekout.css";
import Navbar from "../layout/Navbar/Navbar";
import Footer from "../layout/Footer/Footer";
import { UserProvider } from "../hooks/UserContext";
import { useContext, useEffect, useState } from "react";
import { showToastError, showToastSuccess } from "../config/toastConfig";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../hooks/CartContext";
import countries from "../config/countries";
import CheckoutService from "../services/checkout/checkoutService";
import { formatCurrency } from "../config/formatCurrency";
const Checkout = () => {
  const { user } = useContext(UserProvider);
  const { cart, quantity } = useContext(CartContext)
  const [totalPrice, setTotalPrice] = useState(0)
  console.log(cart);

  const navigate = useNavigate()
  const [methodCheckout, setMethodCheckout] = useState("QR code");
  useEffect(() => {
    const totalPriceProduct = cart.reduce((total, product) => total + product.price * quantity[product._id] || 1, 0);
    setTotalPrice(totalPriceProduct);

  }, [cart])
  const [formData, setFormData] = useState({
    country: "",
    address: "",
    postalCode: "",
    city: "",
    phone: "",
    orderNotes: "",
  });
  const dataCheckout = {
    userId: user?._id,
    products: cart,
    totalPrice: totalPrice,
    country: formData.country,
    address: formData.address,
    phone: formData.phone,
    city: formData.city,
    methodPayment: methodCheckout,
    orderNotes: formData.orderNotes
  }


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleCheckout = async () => {
    if (user === null) {
      showToastError('Vui lòng đăng nhập')
      navigate('/login')
      return
    }
    if(formData.address === "" && formData.city === ""){
      showToastError('Nhập đầy đủ các trường')
      return
    }
   if(methodCheckout === "QR code"){
    window.location.href=`https://api.vietqr.io/image/970422-9213112004-QKCaMBw.jpg?accountName=NGUYEN%20VAN%20THIET&addInfo=thanhtoandonhang&amount=${totalPrice}`
    showToastSuccess(data?.message);

   }

    const { data } = await CheckoutService.postCheckout(dataCheckout)
    showToastSuccess(data?.message);

  }

  return (
    <>
      <Navbar />
      <div className="checkout-form-container">
        <div className="checkout-form-section">
          <h3>THÔNG TIN THANH TOÁN</h3>
          <div className="checkout-form">
            <div className="checkout-form-group">
              <label className="checkout-label">Quốc gia *</label>
              <select name="country" value={formData.country} onChange={handleInputChange}>
                <option value="">Chọn quốc gia</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div className="checkout-form-group">
              <label className="checkout-label">Địa chỉ *</label>
              <input type="text" name="address" value={formData.address}
                onChange={handleInputChange} />
            </div>
            <div className="checkout-form-group">
              <label className="checkout-label" >Tỉnh / Thành phố *</label>
              <input type="text" name="city" value={formData.city}
                onChange={handleInputChange} />
            </div>
            <div className="checkout-form-group">
              <label className="checkout-label">Số điện thoại *</label>
              <input type="tel" name="phone" value={formData.phone}
                onChange={handleInputChange} />
            </div>
            <div className="checkout-form-group">
              <h3>Thông Tin Bổ Sung</h3>
              <label className="checkout-label">Ghi chú đơn hàng (tùy chọn)</label>
              <textarea name="orderNotes" className="checkout-textarea" value={formData.orderNotes}
                onChange={handleInputChange}></textarea>
            </div>
          </div>
        </div>

        <div className="checkout-order-section">
          <div className="checkout-con-order-section">
            <h3>ĐƠN HÀNG CỦA BẠN</h3>
            <div>
              <div className="flex">
                {cart.map((product) => (
                  <>
                    <div className="flex items-center gap-2">
                    <img className="w-[100px]" src={product?.image} alt="" />
                    <div>
                      <p>SẢN PHẨM: {product?.name}</p>
                      <p>Giá: {formatCurrency(product?.price)}</p>
                    </div>
                    </div>
                  </>
                ))}
              </div>
              <p className="py-2">Tổng tiền: {formatCurrency(totalPrice)}</p>
              <div className="checkout-form-group">
                <label className="checkout-label">
                  <input
                    type="radio" name="paymentMethod"
                    value="bank_transfer"
                    onChange={() => setMethodCheckout("Qr Code")}
                    defaultChecked />
                  Chuyển khoản QR Code
                </label>
                <label className="checkout-label">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="   Trả tiền mặt khi nhận hàng"
                    onChange={() => setMethodCheckout("Trả tiền mặt khi nhận hàng")}
                  />
                  Trả tiền mặt khi nhận hàng
                </label>
              </div>
              <button onClick={handleCheckout} className="checkout-button">ĐẶT HÀNG</button>
              <div className="checkout-privacy-link">
                <p >
                  Dữ liệu cá nhân của bạn sẽ được sử dụng để xử lý đơn hàng của bạn, hỗ trợ trải nghiệm của bạn trên toàn bộ trang web này và cho các mục đích khác được mô tả trong <a href="#">chính sách riêng tư</a> của chúng tôi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
