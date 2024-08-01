import Navbar from "../layout/Navbar/Navbar";
import Footer from "../layout/Footer/Footer";

const ProductDetails = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <div className="border rounded-lg p-2">
              <img src="https://product.hstatic.net/200000377165/product/artboard_9_94dd13d284894ae0bd5d24827b6de158_master.png" alt="Đào Tiên Ngộ Không" className="w-full h-auto rounded" />
            </div>
            <div className="flex space-x-2 mt-2 justify-center">
              <img src="https://product.hstatic.net/200000377165/product/artboard_9_94dd13d284894ae0bd5d24827b6de158_master.png" alt="Thumbnail 1" className="w-16 h-16 rounded border" />
              <img src="https://product.hstatic.net/200000377165/product/artboard_9_94dd13d284894ae0bd5d24827b6de158_master.png" alt="Thumbnail 2" className="w-16 h-16 rounded border" />
              <img src="https://product.hstatic.net/200000377165/product/artboard_9_94dd13d284894ae0bd5d24827b6de158_master.png" alt="Thumbnail 3" className="w-16 h-16 rounded border" />
              <img src="https://product.hstatic.net/200000377165/product/artboard_9_94dd13d284894ae0bd5d24827b6de158_master.png" alt="Thumbnail 4" className="w-16 h-16 rounded border" />
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl font-bold">Đào Tiên Ngộ Không</h1>
            <p className="text-red-500 text-lg font-semibold">265,000₫</p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <button className="border border-gray-400 px-2 py-1">-</button>
                <input type="text" value="1" className="border-t border-b border-gray-400 w-12 text-center" />
                <button className="border border-gray-400 px-2 py-1">+</button>
              </div>
              <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                Thêm vào giỏ
              </button>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Thông Tin Sản Phẩm</h2>
              <p>Xuất xứ: huyện Bình Cốc, tỉnh Bắc Kinh, Trung Quốc</p>
              <p>Tiêu chuẩn chất lượng: Nhập khẩu chính ngạch</p>
              
            </div>
            <div>
              <h2 className="text-lg font-semibold">Bảo Quản Và Sử Dụng</h2>
              <p>Đào mua về nên ăn ngay hoặc bảo quản trong ngăn mát tủ lạnh trong khoảng từ 2-4 ngày.</p>
             
            </div>
            <div> 
              <h2 className="text-lg font-semibold">Lợi Ích Của Đào Tiên</h2>
              <ul className="list-disc list-inside">
                <li>Giàu chất chống oxy hóa</li>
                <li>Hỗ trợ giảm cân hiệu quả</li>

              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetails;
