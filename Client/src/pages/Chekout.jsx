import "../../public/style/Chekout.css";
import Navbar from "../layout/Navbar/Navbar";
import Footer from "../layout/Footer/Footer";

const Checkout = () => {
  return (
    <>
      <Navbar />
      <div className="checkout-form-container">
        <div className="checkout-form-section">
          <h3>THÔNG TIN THANH TOÁN</h3>
          <form className="checkout-form">
            <div className="checkout-form-row">
              <div className="checkout-form-group">
                <label className="checkout-label">Tên *</label>
                <input type="text" name="firstName" />
              </div>
            </div>
            <div className="checkout-form-group">
              <label className="checkout-label">Quốc gia *</label>
              <select name="country">
                <option value="Việt Nam">Việt Nam</option>
                <option value="Trung Quốc">Trung Quốc</option>
                <option value="Japan">Japan</option>
                <option value="Campuchia">Campuchia</option>
              </select>
            </div>
            <div className="checkout-form-group">
              <label className="checkout-label">Địa chỉ *</label>
              <input type="text" name="address" />
            </div>
            <div className="checkout-form-group">
              <label className="checkout-label">Mã bưu điện (tùy chọn)</label>
              <input type="text" name="postalCode" />
            </div>
            <div className="checkout-form-group">
              <label className="checkout-label">Tỉnh / Thành phố *</label>
              <input type="text" name="city" />
            </div>
            <div className="checkout-form-group">
              <label className="checkout-label">Số điện thoại *</label>
              <input type="tel" name="phone" />
            </div>
            <div className="checkout-form-group">
              <label className="checkout-label">Địa chỉ email *</label>
              <input type="email" name="email" />
            </div>
            <div className="checkout-form-group">
              <h3>Thông Tin Bổ Sung</h3>
              <label className="checkout-label">Ghi chú đơn hàng (tùy chọn)</label>
              <textarea name="orderNotes" className="checkout-textarea"></textarea>
            </div>
          </form>
        </div>

        <div className="checkout-order-section">
          <div className="checkout-con-order-section">
            <h3>ĐƠN HÀNG CỦA BẠN</h3>
            <div>
              <p>SẢN PHẨM: Vải nhập khẩu × 1</p>
              <p>Tổng phụ: 60.000₫</p>
              <p>Tổng: 60.000₫</p>
              <div className="checkout-form-group">
                <label className="checkout-label">
                  <input type="radio" name="paymentMethod" value="bank_transfer" defaultChecked />
                  Chuyển khoản ngân hàng
                </label>
                <div className="paymen_box">
                <p>
                  Thực hiện thanh toán vào ngay tài khoản ngân hàng của chúng tôi. Vui lòng sử dụng Mã đơn hàng của bạn trong phần Nội dung thanh toán. Đơn hàng sẽ được giao sau khi tiền đã chuyển.
                </p>
                </div>
                
                <label className="checkout-label">
                  <input type="radio" name="paymentMethod" value="cash_on_delivery" />
                  Trả tiền mặt khi nhận hàng
                </label>
              </div>
              <button type="submit" className="checkout-button">ĐẶT HÀNG</button>
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
