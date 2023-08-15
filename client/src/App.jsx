/* libs */ 
import { useState } from "react";
import {
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useSelector } from "react-redux";
/* components */
import NavBar from './components/navBar/NavBar'
import Home from './pages/home/Home'
import Signin from './pages/signin/Signin'
import Products from './pages/products/Products'
import NotFound from './pages/NotFound'


function App() {
  const location = useLocation();
  const { currentUser } = useSelector((state) => state.user);

  return (
    <main>
      {location.pathname !== '/signin' && location.pathname !== '/register' && <NavBar />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signin" element={ currentUser ? <Navigate to="/" /> : <Signin /> } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    // <h1>hey</h1>
  )
}

export default App
