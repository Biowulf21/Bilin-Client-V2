import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './styles.css';

function Food_Waste() {
    return (
        <Container>
            <Col>
        <h2 style={{textAlign: "center"}}>Food Waste in The Philippines</h2>
        <h3 style={{textAlign: "center"}}>Everything you need to know about the problem.</h3>
        <Row className="justify-content-center">
            <Col className="d-flex justify-content-center">
            <p className="food-waste-text d-flex align-items-center">In the Philippines, 1,717 metric tons of food is wasted each day, the Food and Nutrition Research Institute of the Department of Science and Technology said.
                        Likewise, the International Rice Research Institute said P23 million worth of rice is wasted daily, enough to feed 4.3 million individuals.
                        The UN Environment Programme (UNEP) said that 931 million tons of food sold – 17 percent of total food available in 2019 – went into waste bins of households, retailers, and food establishments.</p>
            </Col>
            <Col className="d-flex justify-content-center">
        <img className="foodwaste-img" src="assets/images/foodwaste.png" style={{width:"450px"}}></img>
            </Col>
        </Row>
        </Col>
        </Container>
    );
}

export default Food_Waste;