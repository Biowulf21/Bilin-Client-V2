import React from "react";
import { Col, Row } from "react-bootstrap";
import "./styles.css";
import Food_Deprivation from "./sub-components/Food-Depivation/index.tsx";
import Food_Waste from "./sub-components/Food-Waste/index.tsx";


const Knowledge_Hub = () =>{
    return (
        <div>
           <Food_Waste></Food_Waste>
           <Food_Deprivation></Food_Deprivation>
        </div>
    );
}



export {Knowledge_Hub};