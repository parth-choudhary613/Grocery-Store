import React from "react";
import './Home.css';

const Deal=()=>{
    return(
<>
<div className="deals-container" id="deals">
   <div className="parallax">
<div className="title">DEALS</div>
  </div>

  <div className="deal">
    Save 20% on min-purchase of $149 on vegetables<br></br>
    <button className="coupon-btn">Add Coupon</button>
  </div>

  <div className="deal">
    Save 20% on min-purchase of $179 on fruits<br></br>
    <button className="coupon-btn">Add Coupon</button>
  </div>

  <div className="deal">
    Save 20% on min-purchase of $199 on meat/seasfood<br></br>
    <button className="coupon-btn">Add Coupon</button>
  </div>

</div>


</>



    )
}
export default Deal;