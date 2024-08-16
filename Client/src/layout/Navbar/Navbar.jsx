import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import "./Navbar.css";
import { UserProvider } from "../../hooks/UserContext";
import debounce from "../../config/debounce";
import { SearchFruit } from "../../services/products/searchProductService";
import { CartContext } from "../../hooks/CartContext";
const Navbar = () => {
  const { user } = useContext(UserProvider);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const { cart } = useContext(CartContext)



  const [keywords, setKeyword] = useState('')
  const [fruit, setFruit] = useState([])
  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const debouceSearchProduct = debounce(async (keywords) => {
    if (keywords.trim() === '') {
      return
    }
    try {
      const result = await SearchFruit(keywords)
      setFruit(result)
    } catch (error) {
      console.log(error.response.data.message);
    }
  }, 1000)

  const handleChange = (event) => {
    const { value } = event.target;
    setKeyword(value);
    debouceSearchProduct(value);
  };




  return (
    <>
      <nav className="nav">
        <div id="navbar">
          <div className="box-logo">
            <Link to="/">
              <img
                className="img-logo"
                src="http://hoaqua.langsonweb.com/wp-content/uploads/2020/09/logo-hoa-qua.png"
                alt="Fruit-Store"
              />
            </Link>
          </div>
          <ul>
            <li>
              <Link to="/">Trang Chủ</Link>
            </li>
            <li>
              <Link to="/product">Sản Phẩm</Link>
            </li>
            <li>
              <Link to="/blog">Tin Tức</Link>
            </li>
            <li>
              <Link to="/introduce">Giới Thiệu</Link>
            </li>
            <li>
              <Link to="/contact">Liên Hệ</Link>
            </li>
          </ul>

          <div className="navbar-right">
            <div className="box-search relative">
              <input
                type="text"
                placeholder="Tìm kiếm trái cây"
                className="search-input"
                onChange={handleChange}
                value={keywords}
              />
              {keywords.trim() !== '' && fruit.length > 0 && (
                <div className="absolute top-[50px] w-[400px] bg-[#ffffff] z-10 rounded-[5px] p-2">
                  {fruit.map((item) => (
                    <div key={item.id} >
                      <Link to={`/productdetails/${item._id}`}>
                        <div className="flex items-center gap-2 cursor-pointer hover:bg-[#ededed] duration-300">
                          <img className="w-[100px] h-[100px] rounded-[5px]" src={item?.image[0]} />
                          <div>
                            <span className="block">{item?.name}</span>
                            <span className="block">Hạn sử dụng{item?.expirydate}</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <Link to="/cart">
                <div className="relative">
                  <span className=" material-symbols-outlined">shopping_bag</span>
                  <div className="absolute top-[-10px] right-[-5px] flex justify-center items-center bg-red-500 rounded-full w-[20px] h-[20px] text-[#fff]">
                    {cart?.length}
                  </div>
                </div>
              </Link>
            </div>
            {token !== null ? (
              <>
                <span>{user?.username}</span>
                <button onClick={handleLogout}>Đăng xuất</button>
              </>
            ) : (
              <div className="group-btn">
                <button className="login-button">
                  <Link to="/login" className="btn-link">
                    Đăng Nhập
                  </Link>
                </button>
                <button className="login-button">
                  <Link to="/register" className="btn-link">
                    Đăng Ký
                  </Link>
                </button>
              </div>
            )}

            {user?.admin === true && (
              <div>
                <Link to={"/admin"}>Admin</Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
