import "../../public/style/Product.css";
import Navbar from "../layout/Navbar/Navbar";
import Footer from "../layout/Footer/Footer";
const Products = () => {
  return (
    <>
      <Navbar />
      <div>
          <div >
            <aside>
              <span>DANH MỤC SẢN PHẨM</span>
              <ul>
                <li className="cart-item"><a>Trái cây ngon hôm nay</a></li>
                <li className="cart-item"><a>Trái cây việt nam</a></li>
                <li className="cart-item"><a>Trái cây nhập khẩu</a></li>
                <li className="cart-item"><a>Trái cây cắt sẵn</a></li>
                <li className="cart-item"><a>Trái cây sấy khô</a></li>
                <li className="cart-item"><a>Nước ép trái cây nguyên chất</a></li>
              </ul>
            </aside>
          </div>
      </div>
      <div>
        <div>
          <div className="none">
    <Navbar/>
    
        <div className="none">
            <div className="product-card">
              <img src="https://product.hstatic.net/200000377165/product/artboard_6_6b979af74f1447afb0e256d58b80611a_large.png" alt="Papaya" className="product-image" />
              <p>Du du ruot vang huu co</p>
              <p className="price">65,000₫</p>
              <button className="buy-button">CHỌN MUA</button>
            </div>
            <div className="product-card">
              <img src="https://product.hstatic.net/200000377165/product/artboard_6_6b979af74f1447afb0e256d58b80611a_large.png" alt="Papaya" className="product-image" />
              <p>Du du ruot vang huu co</p>
              <p className="price">65,000₫</p>
              <button className="buy-button">CHỌN MUA</button>
            </div>
            <div className="product-card">
              <img src="https://product.hstatic.net/200000377165/product/artboard_6_6b979af74f1447afb0e256d58b80611a_large.png" alt="Papaya" className="product-image" />
              <p>Du du ruot vang huu co</p>
              <p className="price">65,000₫</p>
              <button className="buy-button">CHỌN MUA</button>
            </div>
            <div className="product-card">
              <img src="https://product.hstatic.net/200000377165/product/artboard_6_6b979af74f1447afb0e256d58b80611a_large.png" alt="Papaya" className="product-image" />
              <p>Du du ruot vang huu co</p>
              <p className="price">65,000₫</p>
              <button className="buy-button">CHỌN MUA</button>
            </div>
            <div className="product-card">
              <img src="https://product.hstatic.net/200000377165/product/artboard_6_6b979af74f1447afb0e256d58b80611a_large.png" alt="Papaya" className="product-image" />
              <p>Du du ruot vang huu co</p>
              <p className="price">65,000₫</p>
              <button className="buy-button">CHỌN MUA</button>
            </div>



          </div>
        </div>
      </div>
      <Footer />
    </div>
    <Footer/>
    </>

  );
};

export default Products;
