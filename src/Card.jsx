import "bootstrap/dist/css/bootstrap.css";
import Modal from "react-bootstrap/Modal";
import samgal from "./images/SamGalM01.png";
import wash from "./images/WashingM01.png";
import XiReal from "./images/XiRealme01.png";
import heater from "./images/heater01.jpg";
import sam from "./images/SamGalM01.png";
import wash2 from "./images/WashingM01.png";
import XiReal2 from "./images/XiRealme01.png";
import heat2 from "./images/heater01.jpg";
import xiReal3 from "./images/XiRealme01.png";
import {useState } from "react"
function Card() {
	return (
		<div className="container-fluid">
			<PricingText />
			<PricingCard />
		</div>
	);
}

function PricingText() {
	return (
		<div className="row bg-info" style={{ height: "250px" }}>
			<div className="col-3 bg-info"></div>
			<div className="col-6 bg-info d-flex flex-column justify-content-center align-items-center ">
				<div style={{ fontSize: "3rem" }}>Pricing</div>
			</div>
			
		</div>
	);
}

function PricingCard() {
	return (
		<>
		<br/>
			<div className="container-fluid">
				<div className="row">
					<div className="col-2"></div>
					<div className="col-sm-8 d-flex justify-content-between">
						<div className="row">
							<div className="col-sm-4 d-flex justify-content-between">
								<IndvidualCard img={xiReal3} price="12000" modelno="MOBILE_1" />
							</div>
							<div className="col-sm-4 d-flex justify-content-between">
								<IndvidualCard img={heat2} price="2500" modelno="HEATER_1" />
							</div>
							<div className="col-sm-4 d-flex justify-content-between">
								<IndvidualCard img={samgal} price="12000" modelno="MOBILE_2" />
							</div>
						</div>
					</div>
					<div className="col-2"></div>
				</div>
			</div>
			<br/>
			<br/>
			<div className="container-fluid">
				<div className="row">
					<div className="col-2"></div>
					<div className="col-sm-8 d-flex justify-content-between">
						<div className="row">
							<div className="col-sm-4 d-flex justify-content-between">
								<IndvidualCard img={wash2} price="22000" modelno="WASHING 1" />
							</div>
							<div className="col-sm-4 d-flex justify-content-between" >
								<IndvidualCard img={wash} price="22000" modelno="WASHING 2" />
							</div>
							<div className="col-sm-4 d-flex justify-content-between">
								<IndvidualCard img={XiReal} price="11000" modelno="Mobile_3" />
							</div>
						</div>
					</div>
					<div className="col-2"></div>
				</div>
			</div>
			<br/>
			<br/>
			<div className="container-fluid">
				<div className="row">
					<div className="col-2"></div>
					<div className="col-sm-8 d-flex justify-content-between">
						<div className="row">
							<div className="col-sm-4 d-flex justify-content-between">
								<IndvidualCard img={XiReal2} price="13000" modelno="Mobile_4" />
							</div>
							<div className="col-sm-4 d-flex justify-content-between">
								<IndvidualCard img={sam} price="12000" modelno="Mobile_5" />
							</div>
							<div className="col-sm-4 d-flex justify-content-between">
								<IndvidualCard img={heater} price="2000" modelno="Heater_3" />
							</div>
						</div>
					</div>
					<div className="col-2"></div>
				</div>
			</div>
			<br/>
		</>
	);
}

function IndvidualCard(props) {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<div>
			<div className="card mr-1">
				<div className="card-body">
					<h3 className="card-title" style={{ textAlign: "center" }}>
						{props.price} <span className="text-secondary">.pcs</span>
					</h3>
					<h3 className="" style={{ textAlign: "center" }}>
						{props.modelno} 
					</h3>
					<p className="card-text">
						<img src={props.img} class="card-img-top" alt="..." />
					</p>
					<button onClick={handleShow} className="btn btn-primary" style={{marginLeft:"42px"}}>
						Click me
					</button>
					
				</div>
			</div>
					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Add To Cart</Modal.Title>
						</Modal.Header>
						<Modal.Body>are you ready to buy this item</Modal.Body>
						<Modal.Footer>
							<button className="btn btn-primary" onClick={handleClose}>
								BUY NOW
							</button>
						</Modal.Footer>
					</Modal>
		</div>
	);
}

export default Card;
