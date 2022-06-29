import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
        <section className="bg-color3 p-5 text-center text-lg-start" style={{backgroundColor: '#87B547'}}>
        <div className="container">
            <div className="d-lg-flex align-items-start justify-content-between">
                <div className="col-lg-5">
                    <h4 className="h4s text-color2 font-weight-bold">Bilin</h4>
                    <p className="text-color2">Bilin is a platform that makes the donation process easier, allowing
                        forward-thinking people and businesses to connect with nonprofit organizations and community
                        pantries that need their help the most.</p>
                </div>
    
                <hr className="w-100 clearfix d-lg-none" />
    
                <div className="col-lg-6 d-flex justify-content-center ms-auto">
                    <div className="mx-3 d-flex flex-column">
                        <h5 style={{color: "#FFF"}}><b>Navigate</b></h5>
                        <Link to={'/'} style={{color: "#FFF"}}>Home</Link>
                        <Link to={'/get-involved'} style={{color: "#FFF"}}>Get Involved</Link>
                        <Link to={'/knowledge-hub'} style={{color: "#FFF"}}>Knowledge Hub</Link>
                        <Link to={'/about-us'} style={{color: "#FFF"}}>About Us</Link>
                        <Link to={'/faq'} style={{color: "#FFF"}}>FAQ</Link>
                    </div>
            
                    <div className="mx-3 d-flex flex-column">
                        <h5 ><b style={{color: "#FFF"}}>Useful Links</b></h5>
                        <a href="https://drive.google.com/file/d/14cL6wqYBMWJJgKwSUMRSVvFBTJRwQ2kU/view?usp=sharing" style={{color: "#FFF"}}>Donation Guidelines</a>
                        <a href="/../src/terms_and_conditions.html" style={{color: "#FFF"}}>Terms & Conditions</a>
                        <a href="/../src/privacy_policy.html" style={{color: "#FFF"}}>Privacy Policy</a>
                    </div>
    
                    <div className="mx-3 d-flex flex-column d-none d-md-block">
                        <h5 style={{color: "#FFF"}}><b>Contact Us</b></h5>
                        <a href="mailto:bilinfooddonation@gmail.com" style={{color: "#FFF"}}>BilinFoodDonation@gmail.com</a>
                    </div>
                </div>
    
                <hr className="w-100 clearfix d-md-none" />
    
                <div className="d-flex flex-column d-md-none">
                    <h5 className="h5s text-color2"><b>Contact Us</b></h5>
                    <a href="mailto:bilinfooddonation@gmail.com" style={{color: "#FFF"}}>BilinFoodDonation@gmail.com</a>
                </div>
            </div>
            <div className="ps d-flex justify-content-between">
                <p className="ps as text-color1">&copy; 2022 Bilin. All rights reserved.</p>
                <div>
                    <a style={{color: "#FFF"}} href="#">Back to Top <i className="bi bi-chevron-double-up"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
    </div>
    );
  };
  export {Footer};