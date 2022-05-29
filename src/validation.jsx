import React from 'react';
import signup from './images/signup.jpg'
var sectionStyle = {
    backgroundImage: `url(${signup})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover', 
  
  }


class FormNi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {
                username: "",
                password: "",
                email: "",
                address: "",
                state: "",
                gender: ""
            },

        };
    }

    changeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        let errors = this.state.errors;

        switch (name) {
            case "username":
                errors.username = value.length < 5 ? "username must be 5 characters length" : "";
                break;

            case "password":
                errors.password = value.length < 5 ? "password must be 5 characters length" : "";
                break;

             case "address":
                errors.password = value.length < 5 ? "address must be 5 characters length" : "";
                break;

                case "state":
                errors.password = value.length < 2 ? "address must be 2 characters length" : "";
                break;

                case "gender":
                    errors.password = value.length < 5 ? "address must be 5 characters length" : "";
                    break;

            case "email":
                errors.email = value.length < 5 ? "Email must be 5 characters length" : "";

                let apos = value.indexOf('@');
                let dotpos = value.lastIndexOf('.');

                if (apos < 1 || dotpos - apos < 2) {
                    errors.email = "please enter valid Email Id"
                }
                break;

            default:
                break;
        }

        // console.log(this.state)
        this.setState({ errors, [name]: value });
    };

    submitHandler = (event) => {
        event.preventDefault();
        if(
            this.state.errors.username.length === 0 &&  this.state.errors.password.length ===0 &&
            this.state.errors.email.length === 0 && this.state.errors.address.length ===0 && this.state.errors.state.length ===0 &&
            this.state.errors.gender.length === 0 
        )
        {
            alert("From is Valid");
        }
        else{
            alert("From is not Valid");
        }
    }


    render() {
        const { errors } = this.state;
        return (
            <div style={sectionStyle}>
        <div className="col-sm-12" style={{padding:"50px", color:"white"}}>
               
            <form className="row g-3" onSubmit={this.submitHandler} >
            <div className="col-sm-1"></div>
                <div className="col-sm-4" >
                <h3><strong>User-Name</strong><br/></h3>
                <input style={{width:"100%", height:"7vh"}} type="text" placeholder="Enter your name" name="username" onChange={this.changeHandler} />
                <p>{errors.username}</p>
                </div>
                <div className="col-sm-1"></div>
                <div className="col-sm-1"></div>
            <div class="col-md-4">
            <h3><strong>Password</strong><br/></h3>
                <input style={{width:"100%", height:"7vh"}} type="password" placeholder="Enter your password" name="password" onChange={this.changeHandler} />
                <p>{errors.password}</p>
                </div>
                <div className="col-sm-1"></div>
                <div className="col-sm-1"></div>
                <div className="col-sm-4">
                <h3><strong>Email ID</strong><br/></h3>
                <input style={{width:"100%", height:"7vh"}} type="text" placeholder="Enter your Email" name="email" onChange={this.changeHandler} />
                <p>{errors.email}</p>
                </div>
                <div className="col-sm-1"></div>
             <div className="col-sm-1"></div>
                <div className="col-sm-4">
                <h3>  <strong>Address</strong><br/></h3>
                <input style={{width:"100%", height:"7vh"}} type="text" placeholder="Enter your address" name="address" onChange={this.changeHandler} />
                <p>{errors.address}</p>
                </div>
                <div className="col-sm-1"></div>
                <div className="col-sm-1"></div>
                <div class="col-md-4">
      <label for="validationDefault04" class="form-label"><h3><strong>Gender</strong></h3></label>
      <select class="form-select" id="validationDefault04" required>
        <option selected disabled value="">Select</option>
        <option>Male</option>
        <option>Female</option>
        <option>Others</option>
      </select>
    </div>
    <div className="col-sm-1"></div>
    <div className="col-sm-1"></div>
    <div class="col-md-4">
      <label for="validationDefault04" className="form-label"><h3><strong>State</strong></h3></label>
      <select className="form-select" id="validationDefault04" required>
        <option selected disabled value="">Select</option>
        <option>Maharashtra</option>
        <option>Gujarat</option>
        <option>Bihar</option>
        <option>Rajastan</option>
      </select>
      </div>
      <div className="col-sm-1"></div>
    
      <div class="col-12" style={{textAlign: "center"}}>
     <button class="btn btn-warning" type="submit" style={{padding:"10px", marginBottom:"20px" ,marginTop:"50px", width:"300px"}}><h4><b>Submit</b></h4></button> 
  </div>

     
            </form>
            
            </div>
           
    </div>
        )
    }
}

export default FormNi;
