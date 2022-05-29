import caro3 from "./images/SamGalM01.png";
import pot from "./images/WashingM01.png";
import las from "./images/XiRealme01.png";
import ganna from "./images/heater01.jpg";
import soy from "./images/SamGalM01.png";
import car2 from "./images/WashingM01.png";
import caro4 from "./images/XiRealme01.png";
import cot from "./images/heater01.jpg";
import caro5 from "./images/XiRealme01.png";
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
				<div
					className="bg-info text-light "
					style={{ textAlign: "center", backgroundColor: "InfoBackground" }}
				>
					Quickly build an effective pricing table for your potential customers
					with this Bootstrap example. It’s built with default Bootstrap
					components and utilities with little customization.
				</div>
			</div>
		</div>
	);
}

function PricingCard() {
	return (
		<>
		<div className="container-fluid" >
			<div className="row">
				<div className="col-2"></div>
				<div className="col-sm-8 d-flex justify-content-between">
					<div className="row">
					<div className="col-sm-4 d-flex justify-content-between">
					<IndvidualCard img={caro5} />
					</div>
					<div className="col-sm-4 d-flex justify-content-between">
					<IndvidualCard img={cot} />
					</div>
					<div className="col-sm-4 d-flex justify-content-between">
					<IndvidualCard img={caro3} />
					</div>
					</div>
				</div>
				<div className="col-2"></div>
			</div>
			</div>
			<div className="container-fluid" >
			<div className="row">
				<div className="col-2"></div>
				<div className="col-sm-8 d-flex justify-content-between">
				<div className="row">
					<div className="col-sm-4 d-flex justify-content-between">
						<IndvidualCard img={car2} />
					</div>
					<div className="col-sm-4 d-flex justify-content-between">
						<IndvidualCard img={pot} />
					</div>
					<div className="col-sm-4 d-flex justify-content-between">
						<IndvidualCard img={las} />
					</div>	
				</div>
				</div>
				<div className="col-2"></div>
				</div>
			</div>
			<div className="container-fluid" >
			<div className="row">
				<div className="col-2"></div>
				<div className="col-sm-8 d-flex justify-content-between">
				<div className="row">
					<div className="col-sm-4 d-flex justify-content-between">
					<IndvidualCard img={caro4} />
					</div>
					<div className="col-sm-4 d-flex justify-content-between">
					<IndvidualCard img={soy} />
					</div>
					<div className="col-sm-4 d-flex justify-content-between">
					<IndvidualCard img={ganna} />
					</div>	
				</div>
				</div>
				<div className="col-2"></div>
			</div>
			</div>
		</>
	);
}

function IndvidualCard(props) {
	return (
		<div className="card mr-1">
			<div className="card-body">
				<h3 className="card-title" style={{ textAlign: "center" }}>
					price/ <span className="text-secondary">mo</span>
				</h3>
				<p className="card-text">
					<img src={props.img} class="card-img-top" alt="..." />
				</p>
				<a href="#" className="btn btn-primary col-12">
					Click me
				</a>
			</div>
		</div>
	);
}

export default Card;
