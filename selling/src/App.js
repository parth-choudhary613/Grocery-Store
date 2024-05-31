import {Route , Routes,Link} from "react-router-dom";
import './App.css';
import Navbar from './Navbar';
import Deal from "./Deal";
import Home from './Home';
import Veg from "./Veg";
import Fruits from "./Fruits";
import Meat from "./Meat";
import Footer from "./Footer";


const App =() => {
  return (
    <>
   <Navbar/>
   <Home/>
   <Deal/>
   <Veg/>
   <Fruits/>
   <Meat/>
   <Footer/>
  
{/* 
 <Routes>
  <Route path="/" element={<Home></Home>}/>
  
</Routes> */}




    </>
  );
}
export default App;