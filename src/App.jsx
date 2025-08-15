import "./App.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home  from "./pages/Home";
import Success  from "./pages/Success";
import NotFound  from "./pages/NotFound";
import HeroSection from "./components/HeroSection";
import Menu from "./pages/Menu";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/Success" element = {<Success/>}/>
        <Route path = "/*" element = {<NotFound/>}/>
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  )
}

export default App