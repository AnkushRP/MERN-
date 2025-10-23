// import React from "react";
// import Header from "./Component/Header";
// import Body from "./Component/Body";
// import Footer from "./Component/Footer";
// import Bootstrap from "./Component/Bootstrap";
// const App=()=>{
//   return(
//     <>
//     <Bootstrap/>
//     <Header />
//     <Body/>
//     <Footer/>
//     </>
//   );
// };

// export default App;
import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Component/Navbar";
import Login from "./Pages/Login";
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App(){
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route element={<Home />} path="/"/>
      <Route element={<Contact />} path="/contact"/>
      <Route element={<About />} path="/about"/>
      <Route element={<Login/>} path="/login"/>
    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;