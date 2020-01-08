import React from "react";
import AirportLogo from "../../assets/images/airport-logo.png";
import "./brand.scss";

const Brand = () =>{
    return (
        <div className="col-md-5 p-0 brand-container" id="brand">
            <div className="black-overlay d-flex flex-column justify-content-center">
                <div className="w-100 d-flex justify-content-center pb-5 mb-5">
                    <img src={AirportLogo} className="brand-image" alt="2airport Logo" />
                </div>
            </div>
        </div>
    );
}

export default Brand;