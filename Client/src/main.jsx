import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import UserContext from './hooks/UserContext.jsx'
import CartProvider from './hooks/CartContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
    <CartProvider>
        <UserContext>
            <Router>
                <App />
            </Router>
        </UserContext>
    </CartProvider>
)

