import "../../public/style/Product.css";
import Navbar from "../layout/Navbar/Navbar";
import Footer from "../layout/Footer/Footer";
import ButtonProducts from "../../components/button/buttonProducts";
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
                <span className="hover:text-lime-500 duration-300">Trái cây ngon hôm nay</span>
                <span className="hover:text-lime-500 duration-300">Trái cây việt nam</span>
                <span className="hover:text-lime-500 duration-300">Trái cây nhập khẩu</span>
                <span className="hover:text-lime-500 duration-300">Trái cây cắt sẵn</span>
                <span className="hover:text-lime-500 duration-300">Trái cây sấy khô</span>
                <span className="hover:text-lime-500 duration-300">Nước ép trái cây nguyên chất</span>
              </div>
          </div>
      <div>
        <div className="none">
            <div className="product-card">
              <img src="https://product.hstatic.net/200000377165/product/artboard_6_6b979af74f1447afb0e256d58b80611a_large.png" alt="Papaya" className="product-image" />
              <p>Du du ruot vang huu co</p>
              <p className="price">65,000₫</p>
              <ButtonProducts/>
            </div>
          </div>
      </div>
      </div>
      <Footer />
    </>

  );
};

export default Products;
