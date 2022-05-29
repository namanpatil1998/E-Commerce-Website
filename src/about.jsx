import React from 'react';
import Aboutus from './images/Aboutus.png';
import Leadership from './images/Leadership.png';
import Nikhil from './images/Nikhil.jpg'
import amit from './images/amit.jpg'
import nam from './images/nam.jpg'
import saurabh from './images/saurabh.jpeg'

import aboutus1 from './images/aboutus1.jpg';
var sectionStyle = {
  backgroundImage: `url(${aboutus1})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover', 

}

function about(){
    return (
        <div style={sectionStyle}>
<div className="container-fluid" style={{color:"white", padding:"30px"}}>
    <div className="row" style={{textAlign:"center", alignContent:'center', alignItems:'center'}}>
        <div className="col-12" style={{alignContent:"center"}}>
        <img src={Aboutus} style={{width:"100px", height:"100x"}}></img>
        </div>
        <div className="col-12" style={{alignContent:"center" }}>
        <h1><b>About Us</b></h1>
        <h5>
        Offering guests the best in quality and service has been the primary principle at VIJAY SALES since its inception as a partnership firm by Mr. Nanu Gupta, a visionary with astute business acumen and foresight.

A marvellous journey that began with a small Electronics Showroom at Mahim in 1967, VIJAY SALES has since evolved and has become one of India’s biggest retail chains.

VIJAY SALES caters to guests of all budgets and preferences. Today, you can shop for the best in Electronics from 104 aesthetically-designed and conveniently located showrooms in cities like Mumbai, New Mumbai, Thane, Pune, Surat, Vadodara, Ahmedabad, Delhi, Gurgaon, Faridabad, Indirapuram, Noida, Hyderabad, Vijayawada, Warangal, Vishakhapatnam, Tirupati, Kakinada & Rajahmundry .

Along with a dedicated team of prolific managers, Mr. Nanu Gupta and his sons Nilesh Gupta and Ashish Gupta stand tall on the promise of serving their guests with the absolute best in both product and after-sales service.

Bade Sir’s guest-focussed initiatives and intuitive understanding of emerging markets have helped VIJAY SALES to become a household name and the first preference for many when it comes to quality electronics and consumer durables.
    </h5>
        </div>
    </div>
    <div className="row" style={{textAlign:"center", alignContent:'center', alignItems:'center'}}>
    <div className="col-12" style={{alignContent:"center"}}>
        <img src={Leadership} style={{width:"100px", height:"100x"}}></img>
        </div>
        <div className="col-sm-12" style={{alignContent:"center" }}>
            <div className="row">
        <h1><b>Our Leadership</b></h1>
        <div className="col-sm-6">
        <h2>Naman Patil<h4>Founder and Director</h4></h2>
        <img src={nam} style={{width:"contain" ,height:"400px"}}></img>
        </div>
        <div className="col-sm-6">
        <h5><br></br><br></br><br></br><br></br><br></br><br></br>
        “Bade Sir” as Mr. Naman Patil is fondly known, is the brain behind the electronics superstore, VIJAY SALES. With a bare minimum capital of Rs.10,000 and a heart filled with courage, Mr.Gupta began a journey to build an empire, brick by brick.

It was his sheer determination to succeed and devotion towards his guests that made a small store in Mahim a household name. In time, the stores multiplied and transformed VIJAY SALES into one of the most successful electronics retail chains in Mumbai and across the country.

Like a true visionary, Mr. Naman Patil  has the phenomenal ability to understand consumer behaviour. This skill, along with his bold decision-taking abilities form the very foundation of VIJAY SALES’ success story that has given this country a perfect place to shop for happiness.
        </h5>
        </div>
        <div className="col-sm-6">
        <h5><br></br><br></br><br></br><br></br><br></br><br></br>
        It was in the year 1992 when Mr.Naman Patil introduced his friend, Nikhil Shrikhande to the family business. With the knowledge he inherited from his father and powered by his strong educational background, Nikhil Shrikhande guided VIJAY SALES and his father’s vision to new horizons.

His detailed understanding about product technicalities and his approach towards the guests made sure that he upheld the Company’s long-standing philosophy of serving the guests with the best in electronics and services.

With his talent and vision, Nikhil Shrikhande has proven time and again that there is no better man to take the Company’s legacy forward into a promising future.
</h5>
        </div>
        <div className="col-sm-6">
        <h2>Nikhil Shrikhande<h4>Director</h4></h2>
        <img src={Nikhil} style={{width:"contain" ,height:"400px"}}></img>
        </div>


        <div className="col-sm-6">
        <h2>Amit Gade<h4>Director</h4></h2>
        <img src={amit} style={{width:"contain" ,height:"400px"}}></img>
        </div>
        <div className="col-sm-6">
        <h5><br></br><br></br><br></br><br></br><br></br><br></br>
         Amit Gade brought with him modern day insights and ideas to help VIJAY SALES adapt to the forever-evolving retail scenario and usher the Company to a new-age.

A thoroughly people’s person, Amit Gade brings with him an affable and dynamic persona that helps him reach out easily and run the operations effectively. His retail background helps him to understand the market and his risk-taking abilities and out-of-the-box perspectives are both respected and appreciated throughout the Company.

Ably guided by his friends , Amit Gade is one of the pillars of an empire that is trusted by millions.
</h5>
        </div>

       
        <div className="col-sm-6">
        <h5><br></br><br></br><br></br><br></br><br></br><br></br>
        Saurabh Kumar is a 2018 BSB-finance graduate from Kelley School of Business, Indiana University (USA), saurabh joined his family business Vijay Sales in 2019 after gaining on-ground experience at Vijay Sales stores. Even though the company already had an existing E-Commerce website VijaySales.com, post the pandemic saurabh wanted to intelligently capitalize its offline brand value and 53-year-old legacy to help loyal customers shop anywhere, anytime. Going further, he envisions making Vijay Sales a successful omni-channel retailer with the help of the company’s robust team of 2800 members.</h5>
        </div>

        <div className="col-sm-6">
        <h2>Saurabh Kumar<h4>Co-founder and Director</h4></h2>
        <img src={saurabh} style={{width:"contain" ,height:"400px"}}></img>
        </div>


        </div>
        </div>
</div>
</div>
</div>
    );
}

export default about;