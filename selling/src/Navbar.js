import React from "react";
import './Navbar.css';

const Navbar = () =>{
  
// function stickyMenu(){
//   var sticky=document.getElementById(sticky)
//   if(window.pageYOffset >220){
//     sticky.classList.add('sticky');
//   }
//   else{
//     sticky.classList.remove('sticky');
//   }
// }
// window.onscroll=function(){
//   stickyMenu();
// }

function stickyMenu() {
  // Check if the element exists before accessing its classList
  var navbar = document.getElementById('navbar');
  if (navbar) {
      if (window.pageYOffset >= navbar.offsetTop) {
          navbar.classList.add('sticky');
      } else {
          navbar.classList.remove('sticky');
      }
  }
}
// Attach the stickyMenu function to the window's scroll event
window.onscroll = function() {
  stickyMenu();
};


return(
        <>
 <div className="body">    
    <div className="parallax">
      <div className="page-title">Eat Fresh</div>
    </div>      
      
      <div className="menu" id="sticky">
       <ul className="menu-ul">
    <a href="#" className="a-menu"><li>Home</li></a>
    <a href="#deals" className="a-menu"><li>Deals</li></a>
    <a href="#vegetables" className="a-menu"><li>Vegetables</li></a>
    <a href="#fruits" className="a-menu"><li>Fruits</li></a>
    <a href="#meat" className="a-menu"><li>Meat</li></a>
       </ul>
       <div className="search-box">
        <form>
    <input type="text" placeholder="Search..." 
    name="search" className="search-input"/>
    <button type="submit"><i className="fa fa-search"></i></button>


    </form>
       </div>
    </div>
      

    
    </div>      
        </>
    );
};


export default Navbar;