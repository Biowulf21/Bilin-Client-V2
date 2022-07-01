import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import {FeatureCard} from "../Card/index.tsx";

const Home_Features = () => {
    return (
        <section className="bg-color2" style={{padding: "16px;"}}>
        <div className="container pt-2 py-lg-5"/>
            <div className="row">
                <h2 className="h2s text-center">How You Can Help</h2>
            <p className="text-center pb-4">Get involved and be part of our cause.</p>

            <Container className="" style={{}}>
                <Row className="d-flex justify-content-center">
                        <Col className="col-sm-12 col-md-2 col-lg-2">
                                <FeatureCard title={'Locate'} text={"Find NGOs and community pantries near you."}></FeatureCard>
                        </Col>
                        <Col className="col-sm-12 col-md-2 col-lg-2 ">
                                <FeatureCard title={'Donate'} text={"Donate your surplus food to NGOs and nearby community pantries."}></FeatureCard>
                        </Col>
                        <Col className="col-sm-12 col-md-2 col-lg-2 ">
                                <FeatureCard title={"Volunteer"} text={"Volunteer on events organized by NGOs like feeding programs."}></FeatureCard>
                        </Col>
                        <Col className="col-sm-12 col-md-2 col-lg-2 ">
                                <FeatureCard title={"Initiate"} text={"Co-host a feeding program with NGOs or set up a community pantry.    "}></FeatureCard>
                        </Col>
                </Row>
                </Container>       
       </div>
        </section>
    )
}

export {Home_Features};