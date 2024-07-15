import Navbar from "../layout/Navbar/Navbar";
import Footer from "../layout/Footer/Footer";
import "../../public/style/Blog.css"
const Blog = () => {
  return (
    <>
      <Navbar />
      <div className="news-section">
        <h2 className="news-title">TIN TỨC – BÀI VIẾT</h2>
        <p className="news-intro">
          Tin nhanh 24h, hình ảnh, video clip, bình luận mới về trái cây nhập khẩu. Cập nhật nhiều tin tức độc quyền về xuất khẩu trái cây nhanh và nóng nhất liên tục trong ngày.
        </p>
        <div className="news-articles">
          <div className="news-article">
            <img src="https://hoaqua.langsonweb.com/wp-content/uploads/2020/09/blog-img-6.jpg" alt="Bữa ăn sáng cùng sữa chua và trái cây" className="article-image" />
            <div className="article-content">
              <h3 className="article-title">Bữa ăn sáng cùng sữa chua và trái cây cho người giảm cân!</h3>
              <p className="article-description">
                Lợi ích của bữa ăn sáng kết hợp trái cây với sữa chua và ngũ cốc...
              </p>
            </div>
          </div>
          <div className="news-article">
            <img src="https://hoaqua.langsonweb.com/wp-content/uploads/2020/09/blog-img-6.jpg" alt="Táo Dazzle loại trái cây thần dược cho làn da?" className="article-image" />
            <div className="article-content">
              <h3 className="article-title">Táo Dazzle loại trái cây thần dược cho làn da?</h3>
              <p className="article-description">
                Giới thiệu về quả táo Dazzle New Zealand Quả táo Dazzle New Zealand là một...
              </p>
            </div>
          </div>
          <div className="news-article">
            <img src="https://hoaqua.langsonweb.com/wp-content/uploads/2020/09/blog-img-6.jpg" alt="Giá trị dinh dưỡng của táo tàu!" className="article-image" />
            <div className="article-content">
              <h3 className="article-title">Giá trị dinh dưỡng của táo tàu!</h3>
              <p className="article-description">
                Giá trị dinh dưỡng và lợi ích sức khỏe của táo tàu...
              </p>
            </div>
          </div>
          <div className="news-article">
            <img src="https://hoaqua.langsonweb.com/wp-content/uploads/2020/09/blog-img-6.jpg" alt="Những loại Chà là ngon nhất thế giới được nhiều người yêu thích" className="article-image" />
            <div className="article-content">
              <h3 className="article-title">Những loại Chà là ngon nhất thế giới được nhiều người yêu thích</h3>
              <p className="article-description">
                Chà là rất được yêu thích trên thế giới. Từ vị ngọt khó cưỡng đến...
              </p>
            </div>
          </div>
          <div className="news-article">
            <img src="https://hoaqua.langsonweb.com/wp-content/uploads/2020/09/blog-img-6.jpg" alt="Tìm hiểu những loại lê xanh phổ biến và giá lê là bao nhiêu?" className="article-image" />
            <div className="article-content">
              <h3 className="article-title">Tìm hiểu những loại lê xanh phổ biến và giá lê là bao nhiêu?</h3>
              <p className="article-description">
                Lê xanh và lê nâu thường không phổ biến bằng lê vàng. Tuy nhiên về...
              </p>
            </div>
          </div>
          <div className="news-article">
            <img src="https://hoaqua.langsonweb.com/wp-content/uploads/2020/09/blog-img-6.jpg" alt="2 Loại chà là đỏ hay vàng ngon hơn?" className="article-image" />
            <div className="article-content">
              <h3 className="article-title">2 Loại chà là đỏ hay vàng ngon hơn?</h3>
              <p className="article-description">
                Chà là đỏ hay vàng ngon hơn? Đây là một quả tặng diệu kỳ của...
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;