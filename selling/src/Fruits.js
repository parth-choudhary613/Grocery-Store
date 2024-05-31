import React from "react";
import './Home.css';


const Fruits=()=>{
    return(
<>
<div className="deals-container" id="fruits">
     <div className="parallax">
          <div className="title">Fruits</div>
     </div>
     <div className="items">
         <div className="images">
            <img src="/img/fruits/apples.jpg" className="item-image-size"/>
         </div>
         <div className="description">
            <b>Organic Apple</b><br/>
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
            <img src="/img/fruits/bananas.jpg" className="item-image-size"/>
         </div>
         <div className="description">
            <b> Organic Banana</b><br/>
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
            <img src="/img/fruits/dragonfruit.jpg" className="item-image-size"/>
         </div>
         <div className="description">
            <b>Organic Dragonfruit</b><br/>
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
            <img src="/img/fruits/kiwi.jpg" className="item-image-size"/>
         </div>
         <div className="description">
            <b>Organic Kiwi</b><br/>
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
            <img src="/img/fruits/strawberries.jpg" className="item-image-size"/>
         </div>
         <div className="description">
            <b>Organic Strawberries</b><br/>
            <div className="item-select">
                Price:$4.99/250grams
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
            <img src="/img/fruits/watermelons.jpg" className="item-image-size"/>
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
export default Fruits;