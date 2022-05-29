import React from 'react';
import contactus from './images/contactus.jpg';
var sectionStyle = {
  backgroundImage: `url(${contactus})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover', 

}

function contact(){
    return (
    

      <div style={sectionStyle}>
  
      <div style={{textAlign: "center", margin: "50px"}}><h1>SIGN UP HERE</h1></div>
      
    <form class="row g-3" style={{padding: "48px", }} >
    
    <div class="col-md-4">
      <label for="validationDefault01" class="form-label"><strong>Name</strong></label>
      <input type="text" class="form-control" id="validationDefault01"  placeholder="Enter Your Name Here" required />
    </div>
  
    <div class="col-md-4">
      <label for="exampleFormControlInput1" class="form-label"><strong>Email Address</strong></label>
      <input type="email" class="form-control" id="exampleFormControlInput1"
       placeholder="Ex. name@example.com" />
    </div>
  
    <div class="col-md-4">
      <label for="validationDefaultUsername" class="form-label"><strong>Username</strong></label>
      <div class="input-group">
        <span class="input-group-text" id="inputGroupPrepend2">@</span>
        <input type="text" class="form-control" id="validationDefaultUsername"  placeholder="Enter Your Username" aria-describedby="inputGroupPrepend2" required />
      </div>
    </div>
    
    <div class="col-md-4">
      <label for="validationDefault05" class="form-label"><strong>Password</strong></label>
      <input type="text" class="form-control" id="validationDefault05"  placeholder="Password must be Strong" required />
    </div>
  
    <div class="col-md-4">
    <label for="exampleFormControlTextarea1" class="form-label"><strong>Address</strong></label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="1">
      </textarea>
  </div>
  
    {/* <div class="col-md-3">
      <label for="validationDefault04" class="form-label"><strong>Degree</strong></label>
      <select class="form-select" id="validationDefault04" required>
        <option selected disabled value="">Select</option>
        <option>Bachelor of Engineering</option>
        <option>MCA</option>
      </select>
    </div> */}
  
    {/* <div class="col-md-3">
      <label for="validationDefault04" class="form-label"><strong>Courses</strong></label>
      <select class="form-select" id="validationDefault04" required>
      <option selected disabled value="">Select</option>
        <option>PG-DAC</option>
        <option>PG-DMC</option>
        <option>PG-DAIe</option>
        <option>PG-DBDA</option>
      </select>
    </div> */}
  
    <div class="col-md-4">
      <label for="validationDefault04" class="form-label"><strong>State</strong></label>
      <select class="form-select" id="validationDefault04" required>
        <option selected disabled value="">Select</option>
        <option>Maharashtra</option>
        <option>Gujarat</option>
        <option>Bihar</option>
        <option>Rajastan</option>
      </select>
    </div>
  
    <div class="col-md-4">
      <label for="validationDefault04" class="form-label"><strong>Gender</strong></label>
      <select class="form-select" id="validationDefault04" required>
        <option selected disabled value="">Select</option>
        <option>Male</option>
        <option>Female</option>
        <option>Others</option>
      </select>
    </div>
  
    
  
    <div class="col-md-3">
      <label for="exampleFormControlInput1" class="form-label"><strong>Mobile Number</strong></label>
      <input type="number" class="form-control" id="exampleFormControlInput1" />
              
      </div>
  
    <div class="col-12">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
        <label class="form-check-label" for="invalidCheck2">
          Agree to terms and conditions
        </label>
      </div>
    </div>
    <div class="col-12" style={{textAlign: "center"}}>
      <button class="btn btn-primary" type="submit">Submit form</button>
    </div>
    
  </form>
  </div>
      );
  }
  

  export default contact;