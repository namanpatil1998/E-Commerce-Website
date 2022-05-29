import React from "react"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">

                        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                            <div className="container-fluid" style={{color:"black", backgroundColor:"#FFC300 "}} >
                                <NavLink className="navbar-brand" to="/" ><h4 style={{ color: '#E71406' }}><b><i>Vijay Sales Menu</i></b></h4></NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink exact activeClassName='menu_active' className="nav-link active" aria-current="page" to="/"><h5><b>Home</b></h5></NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact  activeClassName='menu_active' className="nav-link" to="/validation"><h5><b>Sign-Up and Contact Us</b></h5></NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName='menu_active' className="nav-link" to="/services"><h5><b>Service-Centers</b></h5></NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName='menu_active' className="nav-link" to="/about"><h5><b>About Us</b></h5></NavLink>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;