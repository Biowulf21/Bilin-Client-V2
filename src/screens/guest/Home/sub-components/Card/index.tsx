import React from "react"
import "./styles.css";
const FeatureCard = (props) => {
    return(
        <div>
                        <div className="card" id="feature">
                            <div className="card-body">
                                <h5 className="h5s card-title my-3"><b>{props.title}</b></h5>
                                <p className="ps card-text">{props.text}
                                </p>
                            </div>
                        </div>
                    </div>
    );
}

export {FeatureCard};