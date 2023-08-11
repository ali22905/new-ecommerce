import Home from './pages/Home'
import NavBar from './components/NavBar'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";

function App() {
  const location = useLocation();

  console.log(location)
  return (
    <main>
      {location.pathname !== '/login' && location.pathname !== '/register' && <NavBar />}
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </main>
    // <h1>hey</h1>
  )
}

export default App
