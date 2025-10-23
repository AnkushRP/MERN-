import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Menu from "./Menu";
import Login from "./Login";
import './App.css';
//import Search from "./Search";

//const items=['Dosa','Masala Dosa','Paneer','Chola','Gujrati','Idli Sambhar'];

function App() {
  return (
    <div>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
