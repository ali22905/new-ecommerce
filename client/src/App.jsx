/* libs */ 
import { useEffect, useState } from "react";
import {
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
/* components */
import NavBar from './components/navBar/NavBar'
import Home from './pages/home/Home'
import Signin from './pages/signin/Signin'
import Products from './pages/products/Products'
import Product from './pages/product/Product'
import NotFound from './pages/NotFound'
import { updateCart, resetLikes } from "./redux/userReducer";
import axios from "axios";


function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const resetLikesCart = async() => {
      const { data:likedProducts } = await axios.get(`${API_KEY}/users/like/${currentUser._id}`, {
        headers: {
          token: `Barear ${currentUser.accessToken}`
        }
      })
      const { data:cart } = await axios.get(`${API_KEY}/users/cart/${currentUser._id}`, {
        headers: {
          token: `Barear ${currentUser.accessToken}`
        }
      })

      const likedIds = likedProducts.map(product => {
        return product._id
      })
      dispatch(resetLikes(likedIds))
      dispatch(updateCart(cart))
    }
    currentUser && resetLikesCart()
  }, []);
  return (
    <main>
      {location.pathname !== '/signin' && location.pathname !== '/register' && <NavBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products searchQuery={searchQuery} />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/signin" element={ currentUser ? <Navigate to="/" /> : <Signin /> } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    // <h1>hey</h1>
  )
}

export default App
