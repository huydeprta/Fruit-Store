import PathUser from "../config/pathUser";
import Products from "../pages/Product"
import Cart from "../pages/Cart"
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Introduce from "../pages/Introduce";
import Checkout from "../pages/Checkout";
import Productdetails from "../pages/Productdetails";
import NotFound from "../pages/NotFound";
const publicRouterUser = [
    {
        path: PathUser.Home,
        component: Home,
    },
    {
        path: PathUser.Productdetails,
        component: Productdetails,
    },
    {
        path: PathUser.Products,
        component: Products,
    },
    {
        path: PathUser.Cart,
        component: Cart,
    },
    {
        path: PathUser.Contact,
        component: Contact,
    },
    {
        path: PathUser.Login,
        component: Login,
    },
    {
        path: PathUser.Blog,
        component: Blog,
    },
    {
        path: PathUser.Register,
        component: Register,
    },
    {
        path: PathUser.Introduce,
        component: Introduce,
    },
    {
        path: PathUser.Checkout,
        component: Checkout,
    },
    {
        path: PathUser.NotFound,
        component: NotFound,
    },

]
export default publicRouterUser