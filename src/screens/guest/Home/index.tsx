import React from "react";



const Home = () => {
    return(
        <div>
        <section className="bg-color2" style={{padding: "16px;"}}>
        <div className="container pt-2 py-lg-5"/>
            <div className="row">
                <h2 className="h2s text-center">How You Can Help</h2>
            <p className="ps text-center pb-4">Get involved and be part of our cause.</p>

            <div className="d-flex justify-content-center">
                <div className="row gy-4 justify-content-center">
                    <div className="col-auto d-flex">
                        <div className="card" id="feature">
                            <div className="card-body">
                                <h5 className="h5s card-title my-3"><b>Locate</b></h5>
                                <p className="ps card-text">Find NGOs and community pantries near you.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto d-flex">
                        <div className="card" id="feature">
                            <div className="card-body">
                                <h5 className="h5s card-title my-3"><b>Donate</b></h5>
                                <p className="ps card-text">Donate your surplus food to NGOs and nearby community pantries.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto d-flex">
                        <div className="card" id="feature">
                            <div className="card-body">
                                <h5 className="h5s card-title my-3"><b>Volunteer</b></h5>
                                <p className="ps card-text">Volunteer on events organized by NGOs like feeding programs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto d-flex">
                        <div className="card" id="feature">
                            <div className="card-body">
                                <h5 className="h5s card-title my-3"><b>Initiate</b></h5>
                                <p className="ps card-text">Co-host a feeding program with NGOs or set up a community
                                    pantry.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
        </section>

    <section className="bg-color1" style={{padding: "16px;"}}>
        <div className="container pb-2 pb-lg-5">
            <div className="row">
                <div className="col d-flex align-items-center justify-content-center">
                </div>
                <div className="col-lg-1"></div>
                <div className="col align-middle">
                    <div className="text-center">
                        <h2 className="h2s pt-5 pt-lg-5">Our Mission</h2>
                        <p className="ps" >The Hiraya team is trying to address the prevalent food
                            hunger problem in the country
                            with the Bilin app. Bilin is a platform that makes the donation process easier, allowing
                            forward-thinking people and businesses to connect with nonprofit organizations and community
                            pantries that need their help the most.</p>
                        <p className="ps" >We are prioritising the donation of surplus food to
                            tackle two of the most difficult
                            SDGs: No Hunger and Food Waste.</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-center py-3 py-lg-4">
                        <div className="mx-5 text-center">
                            <h1 className="h1s text-color3">2</h1>
                            <h5 className="h5s text-color1"><b>Partnered<br/>With Us</b></h5>
                        </div>
                        <div className="mx-5 text-center">
                            <h1 className="h1s text-color3">0</h1>
                            <h5 className="h5s text-color1"><b>Donations<br/>Received</b></h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-1"></div>
            </div>
        </div>
    </section>
   </div> 
);
}

export {Home};