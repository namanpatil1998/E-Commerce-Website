import React from 'react';
import { FaTools } from "react-icons/fa"

import contactus from './images/contactus.jpg';
var sectionStyle = {
  backgroundImage: `url(${contactus})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover', 

}
      function AddressMap(){
    return (
      <div style={sectionStyle}>
      <div class="container-fluid" style={{margin:"top-30px"}}>
    <div class="row">
      <div className="col-sm-2"></div>
      <div class="col-sm-8">
        <div className="google-map-code">
          <h1 style={{color:"black"}}>
            <b>Our Service Centers at Mumbai Loction:</b>
          </h1>

          <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d241308.5649998303!2d72.
          75720487889456!3d19.088065973013812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1svijay%20sales%20mumba
          i!5e0!3m2!1sen!2sin!4v1611231870589!5m2!1sen!2sin" width="100%" height="500px" frameborder="0"
           style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

        </div>
        </div>
        <div class="row">
        <div className="col-sm-2"></div>
        </div>
        <div class="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <br></br>
           < FaTools size="2em" color="tomato" />
           <b style={{color:"yellow"}}>Borivali</b>
           < FaTools size="2em" color="tomato" />
           <b style={{color:"yellow"}}>Ghatkopar</b>
           < FaTools size="2em" color="tomato" />
           <b style={{color:"yellow"}}>Andheri</b>
           < FaTools size="2em" color="tomato" />
           <b style={{color:"yellow"}}>Chembur</b>
           < FaTools size="2em" color="tomato" />
           <b style={{color:"yellow"}}>Bhandup</b>
           < FaTools size="2em" color="tomato" />
           <b style={{color:"yellow"}}>Ghodbander Thane</b>
           < FaTools size="2em" color="tomato" />
           <b style={{color:"yellow"}}>Prabhadevi</b>
          </div>
          <div className="col-sm-2"></div>
        </div>
        </div>
        </div>
        </div>
    );
 }

 export default AddressMap;
