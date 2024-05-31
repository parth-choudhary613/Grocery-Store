import React from "react";
import './Home.css';


const Veg=()=>{
    return(
<>
<div className="deals-container" id="vegetables">
     <div className="parallax">
          <div className="title">Vegetables</div>
     </div>
     <div className="items">
         <div className="images">
            <img src="/img/veg/okra.jpg" className="item-image-size"/>
         </div>
         <div className="description">
            <b>Organic Okra</b><br/>
            <div className="item-select">
                Price:$2.99/250grams
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
            <img src="/img/veg/carrots.jpg" className="item-image-size"/>
         </div>
         <div className="description">
            <b> Organic carrots</b><br/>
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
            <img src="/img/veg/onions.jpg" className="item-image-size"/>
         </div>
         <div className="description">
            <b>Organic Onions</b><br/>
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
            <img src="/img/veg/potato.jpg" className="item-image-size"/>
         </div>
         <div className="description">
            <b>Organic Potato</b><br/>
            <div className="item-select">
                Price:$4.49/250grams
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
            <img src="/img/veg/spinach.jpg" className="item-image-size"/>
         </div>
         <div className="description">
            <b>Organic Spinach</b><br/>
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
            <img src="/img/veg/tomatoes.jpg" className="item-image-size"/>
         </div>
         <div className="description">
            <b>Organic Tomatoes</b><br/>
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


</div>
</>

    )
}
export default Veg;