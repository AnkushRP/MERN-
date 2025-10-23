
import './App.css';

import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
// import { CartProvider } from './components/Contextreducer';


function App() {
  return (
    
   <Router>
     <div>
     
       <Routes>
        
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Login' element={<Login/>}/>
        <Route exact path='/Createuser' element={<Signup/>}/>
       </Routes>
     </div>
   </Router>
   
  );
}

export default App;
