import React from "react";
import './Home.css';


const Meat=()=>{
    return(
<>
<div className="deals-container" id="meat">
     <div className="parallax">
          <div className="title">MEAT & SEAFOOD</div>
     </div>
     <div className="items">
         <div className="images">
            <img src="/img/meat/chicken.jpg" className="item-image-size"/>
         </div>
         <div className="description">
            <b>Whole Chicken</b><br/>
            <div className="item-select">
                Price:$5.99/250grams
            </div>
         <label>Qty:</label>
         <select className="item-select">
        <option>250 grams</option>    
        <option>500 grams</option>    
        <option>750 grams</option>    
        <option>1000 grams</option>    
        </select><br/> 
        <button className="buynow-btn">Buy Now</button>  
         </div>
    </div>

    <div className="items">
         <div className="images">
            <img src="/img/meat/fish.jpg" className="item-image-size"/>
         </div>
         <div className="description">
            <b>Live Fish</b><br/>
            <div className="item-select">
                Price:$3.99/250grams
            </div>
         <label>Qty:</label>
         <select className="item-select">
        <option>250 grams</option>    
        <option>500 grams</option>    
        <option>750 grams</option>    
        <option>1000 grams</option>    
        </select><br/> 
        <button className="buynow-btn">Buy Now</button>  
         </div>
    </div>

    <div className="items">
         <div className="images">
            <img src="/img/meat/lamb.jpg" className="item-image-size"/>
         </div>
         <div className="description">
            <b>Lamb</b><br/>
            <div className="item-select">
                Price:$1.49/250grams
            </div>
         <label>Qty:</label>
         <select className="item-select">
        <option>250 grams</option>    
        <option>500 grams</option>    
        <option>750 grams</option>    
        <option>1000 grams</option>    
        </select><br/> 
        <button className="buynow-btn">Buy Now</button>  
         </div>
    </div>

    <div className="items">
         <div className="images">
            <img src="/img/meat/prawns.jpg" className="item-image-size"/>
         </div>
         <div className="description">
            <b>Peeled Prawns</b><br/>
            <div className="item-select">
                Price:$8.49/250grams
            </div>
         <label>Qty:</label>
         <select className="item-select">
        <option>250 grams</option>    
        <option>500 grams</option>    
        <option>750 grams</option>    
        <option>1000 grams</option>    
        </select><br/> 
        <button className="buynow-btn">Buy Now</button>  
         </div>
    </div>



</div>

 



</>

    )
}
export default Meat;