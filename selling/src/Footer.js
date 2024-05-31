import React from "react";
import './Navbar.css';

const Footer=()=>{
    return(
<>
<div className="parallax1">
    <div className="footer">
         <div className="quick-links">
             <div>Locations</div>
             <ul>
                <li> <a href="" className="a-links">Address 1</a></li>
                <li> <a href="" className="a-links">Address 1</a></li>
                <li> <a href="" className="a-links">Address 1</a></li>
             </ul>
        </div>

        <div className="quick-links">
             <div>Careers</div>
             <ul>
                <li> <a href="" className="a-links">Packing Staff</a></li>
                <li> <a href="" className="a-links">Delivery Agents</a></li>
                <li> <a href="" className="a-links">Shelf Fillers</a></li>
             </ul>
        </div>

        <div className="quick-links">
             <div>Quick Links</div>
             <ul>
                <li> <a href="" className="a-links">Contact Us</a></li>
                <li> <a href="" className="a-links">FAQ</a></li>
                <li> <a href="" className="a-links">Help</a></li>
             </ul>
        </div>
    </div>
</div>

<div className="copyrights">
     <i className="far fa-copyright fa-1x"></i>2020 by Programers Web Design
</div>

</>

    )
}
export default Footer;