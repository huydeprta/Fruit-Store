import "../../public/style/Product.css";
import Navbar from "../layout/Navbar/Navbar";
import Footer from "../layout/Footer/Footer";
const Products = () => {
  return (
    <>
      <Navbar />
      <div className="products">
          <div className="cate">
              <div  className="categories">
              <span>DANH MỤC SẢN PHẨM</span>
              </div>
              <div className="list-categories">
                <span>Trái cây ngon hôm nay</span>
                <span>Trái cây việt nam</span>
                <span>Trái cây nhập khẩu</span>
                <span>Trái cây cắt sẵn</span>
                <span>Trái cây sấy khô</span>
                <span>Nước ép trái cây nguyên chất</span>
              </div>
          </div>
      <div>
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
    </>

  );
};

export default Products;
