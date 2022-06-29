import React from "react";
import {GoogleMaps} from "./sub-components/Map/index.tsx";
import { PinnedEvent } from "./sub-components/Pinned-Event/index.tsx";
import { DiscoverComponent } from "./sub-components/Discover/index.tsx";

const Get_Involved = () =>{
    return(
       <div>
        <GoogleMaps></GoogleMaps>
        <PinnedEvent></PinnedEvent>
        <DiscoverComponent></DiscoverComponent>
       </div> 
    );
}

export {Get_Involved};