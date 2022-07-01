import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FeatureCard } from "./sub-components/Card/index.tsx";
import { Home_Header } from "./sub-components/Header/index.tsx";
import { Home_Features } from "./sub-components/Home-Features/index.tsx";
import { Home_Mission } from "./sub-components/Mission/index.tsx";



const Home = () => {
    return(
        <div>
            <Home_Header></Home_Header>
            <Home_Features></Home_Features>
            <Home_Mission></Home_Mission>
   </div> 
);
}

export {Home};