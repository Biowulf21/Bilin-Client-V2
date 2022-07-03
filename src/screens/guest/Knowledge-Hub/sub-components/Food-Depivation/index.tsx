import React from 'react'
import { Container } from 'react-bootstrap';
import "./styles.css";

function Food_Deprivation() {
    return (
        <Container>
             <div className="d-lg-flex justify-content-center">
                <div className="mx-5 d-flex align-items-center justify-content-center">
                    <img src="../../assets/images/fooddeprivation.png" alt="" className="img-fluid deprivation-img"/>
                </div>
                <div className="mx-5 d-flex align-items-center justify-content-center">
                    <div>
                        <h2 className="h2s text-color1" style={{maxWidth: "400px;"}}>Food Deprivation in the Philippines</h2>
                        <p className="ps text-color4">20% of the PH population are starving everyday</p>
                        <p className="deprivation-par ps text-color1" >In the Philippines, approximately 1 in 5 people don’t get enough food everyday. This is 20% of the entire population of the Philippines which is approximately 22 Million people. Everyday 22 million people still do not know where to find their next meal.</p>
                    </div>
                </div>
                <div className="mx-5 d-flex align-items-center justify-content-center">
                    <img src="../../assets/images/fooddeprivation.png" alt="" style={{width: "450px;"}} className="img-fluid d-lg-none"/>
                </div>
            </div>
        </Container>
    );
}

export default Food_Deprivation;
           