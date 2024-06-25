import "./Produc.css";
const Products = () => {
     return (
          <div>
               <div>
                    <div className="content">
                         <div className="box2">
                              <ul>
                              <li><a><h2>| PHIM</h2></a></li>

                                   <li><a>Đang chiếu</a></li>
                                   <li><a>Sắp chiếu</a></li>
                                   <li><a>Phim IMAX</a></li>
                                   <li><a>Toàn quốc</a></li>

                              </ul>
                         </div>

                    </div>

                    <div className="none">
                         <div className="box">  <img className="box-img" src="https://cdn.galaxycine.vn/media/2024/5/6/inside-out-2-3_1714970461256.jpg " alt="" /> </div>
                         <div className="box"> </div>
                         <div className="box"> </div>
                         <div className="box"> </div>
                         <div className="box"> </div>
                         <div className="box"> </div>
                         <div className="box"> </div>
                         <div className="box"> </div>
                    </div>
               </div>
          </div>
     );
}

export default Products;