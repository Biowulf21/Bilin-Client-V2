import React from 'react'

const Home_Mission = () => {
    return (
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
    );
}

export {Home_Mission};