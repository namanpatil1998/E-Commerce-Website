

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import LogoImage from './back.jpg';
import Navbar from './navbar';
import about from './about';
import Home, {Carol} from './Home';
import services from './services';
import contact from './contact';
import { Switch, Route, Redirect, Router, NavLink } from 'react-router-dom';
import { unstable_concurrentAct } from 'react-dom/test-utils';
import logo_vs from './images/logo_vs.png';
import whatsapplogo from './images/whatsapplogo.png';
import visa from './images/visa.png';
import mastercard from './images/master-card.png';
import americanexpress from './images/amex-american-express.png';
import razorpay from './images/razorpay_tiny.png';
import pine from './images/pine-labs.png';
import SocialFollow from "./SocialFollow";
import { Card } from 'react-bootstrap';
import headban from './images/headban.jpg'
import headback from './images/headback.jpg'
import FormNi from './validation'

var sectionStyle = {
  backgroundImage: `url(${headback})`,
  backgroundSize: 'contain', 
}

var sectionStyle1 = {
  backgroundImage: `url(${headban})`,
  backgroundSize:'contain',
  height: '200px',
}


function App() {
  return (
    
    <div className="App" style={{backgroundColor:"#FFC300 "}}>
      <div className="container-fluid">
        <Header />
      </div>
      <div className="container-fluid" >
        <>
            <Navbar />
            <Switch>
                <Route exact path ="/" component={Home} />
                <Route exact path ="/about" component={about} />
                <Route exact path ="/validation" component={FormNi} />
                <Route exact path ="/services" component={services} />
                <Redirect to="/" />
            </Switch>
        </>
      </div>
  
      <div className="container-fluid">
        <Footer />
      </div>
    </div>
  );
}



function Header(){
  return (
    <div className="container-fluid" style={sectionStyle1}>
  <div className="row " style={{height:"200px"}}>
    <div className="col-sm-4 d-flex d-block align-items-center">
        <img src={logo_vs} className="float-round" alt="Header Logo"></img>
      </div>
      <div className="col-sm-6 d-flex d-block align-items-center">
      <div className="input-group mb-3">
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
     
    </div>
          </div>
    </div>
    </div>
  )
}

function Footer() {
  return (
    <div>
<div className="container-fluid" style={{margin:"top-30px", backgroundColor:"grey"}}>
<div className="row" >
  <div className="col-sm-3" style={{margin:"top-10px", padding:"10px", textAlign:"center"}}>
    <h3 style={{textAlign:"left"}}><u>Newsletter</u></h3>
  <input type="text" className="form-control" aria-label="Text input with segmented dropdown button"></input>
  <button type="button" className="btn btn-outline-secondary btn-dark"><b>Subscribe</b></button>
  </div>
  <div className="col-sm-3" style={{margin:"top-10px", padding:"30px", textAlign:"center", alignContent:"center"}}>
  <h3><u>For Online Order</u></h3>
  <h4><b>+91 7745001618</b></h4>
  </div>
  <div className="col-sm-3" style={{margin:"top-10px", padding:"40px", textAlign:"center", alignContent:"center"}}>
 
  <a href="https://faq.whatsapp.com/web/download-and-installation/about-whatsapp-web-and-desktop/?lang=en" target="_blank" className="Whatsapp about">
  <img src={whatsapplogo} className="float-round" alt="Header Logo"></img>
  </a>
  </div>
  <div className="col-sm-3" style={{margin:"top-10px", padding:"20px", textAlign:"center", alignContent:"center"}}>
  <SocialFollow />
  </div>
</div>
</div>
<div className="container-fluid" style={{margin:"top-30px", backgroundColor:"white"}}>
<div className="row">
  <div className="col-sm-1"></div>
  <div className="col-sm-2">
<img src={razorpay} className="float-round" style={{height:"50px"}} alt="Header Logo"></img>
</div>
<div className="col-sm-2">
<img src={visa} className="float-round" style={{height:"50px"}} alt="Header Logo"></img>
</div>
<div className="col-sm-2">
<img src={pine} className="float-round" style={{height:"50px"}} alt="Header Logo"></img>
</div>
<div className="col-sm-2">
<img src={mastercard} className="float-round" style={{height:"50px"}} alt="Header Logo"></img>
</div>
<div className="col-sm-2">
<img src={americanexpress} className="float-round" style={{height:"50px"}} alt="Header Logo"></img>
</div>
<div className="col-sm-1"></div>
  </div>
  </div>
  <div className="container-fluid" style={{margin:"top-30px", backgroundColor:"grey"}}>
<div className="row" style={{height:"30px"}} >
  <div className="col-sm-6">
<b>© 2007-2020 VijaySales.com</b>
  </div>
  <div className="col-sm-6" style={{textAlign:"end"}}>
<b>website by Naman Patil and Saurabh Kumar</b>
  </div>
  </div>
</div>
  </div>
  );
}

export default App;
