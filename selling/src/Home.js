import React from "react";
import './Home.css';
import './Navbar.css';
const Home = () =>{
   
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
<div className="container">
   <a href="#vegetables">
      <div className="categories">
         <img src="/img/veg/carrots.jpg" className="item-image"/>
      <div className="image-title">Vegetables</div>
    </div>
  </a>

  <a href="#fruits">
      <div className="categories">
         <img src="/img/fruits/strawberries.jpg" className="item-image"/>
      <div className="image-title">Fruits</div>
    </div>
  </a>

  <a href="#meat">
      <div className="categories">
         <img src="/img/meat/chicken.jpg" className="item-image"/>
      <div className="image-title">Meat & Seafood</div>
    </div>
  </a>

  <a href="#deals">
      <div className="categories">
         <img src="/img/deals.jpg" className="item-image"/>
      <div className="image-title">Deals</div>
    </div>
  </a>
</div>



</>
);
   };

   export default Home;