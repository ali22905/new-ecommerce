/* libs */ 
import {
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useSelector } from "react-redux";
/* components */
import Home from './pages/Home'
import NavBar from './components/NavBar'


function App() {
  const location = useLocation();
  const { currentUser } = useSelector((state) => state.user);

  console.log(location)
  return (
    <main>
      {location.pathname !== '/login' && location.pathname !== '/register' && <NavBar />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </main>
    // <h1>hey</h1>
  )
}

export default App
