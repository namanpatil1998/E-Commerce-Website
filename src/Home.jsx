
import React from 'react';
import { Carousel } from "react-bootstrap";
import cmixa from "./images/image01.jpg";
import cmixb from "./images/image02.jpg";
import cmixc from "./images/image03.jpg";
import Card from './Card';
import headback from './images/headback.jpg';

var sectionStyle = {
    backgroundImage: `url(${headback})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover', 
  
  }

function Home(){
    return (
		<div style={sectionStyle}>
			<Carol/>
			<Card />
		</div>
            
  );
}


 function Carol() {
	const imgarr = [cmixa, cmixb, cmixc];
	return (
	
		<div className="container-fluid" style={{ height: "50%"}}>
			<div className="row">
				{/* <div className="col-3">hello</div> */}
				<div className="col-12">
					<Carousel>
						<Carousel.Item interval={1000}>
							<img className="mySlides" src={imgarr[0]} alt="First slide" />
							<Carousel.Caption>
								<h3>First slide label</h3>
								<p>
									Nulla vitae elit libero, a pharetra augue mollis interdum.
								</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item interval={500}>
							<img className="mySlides" src={imgarr[1]} alt="Third slide" />
							<Carousel.Caption>
								<h3>Second slide label</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item interval={500}>
							<img className="mySlides" src={imgarr[2]} alt="Third slide" />
							<Carousel.Caption>
								<h3>Second slide label</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</div>
				{/* <div className="col-3">bye</div> */}
			</div>
		</div>
		
	);
}


export default Home;
export {Carol};