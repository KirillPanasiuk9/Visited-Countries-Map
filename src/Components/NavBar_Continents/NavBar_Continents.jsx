import React from 'react';
import "./navBar_Continents.css";

const NavBar_Continents = ({zoomContinent}) => {

    const zoomWorld = () => {
        zoomContinent("World")
    }

    const zoomNorthAmerica = () => {
        zoomContinent("North America")
    }

    const zoomSouthAmerica = () => {
        zoomContinent("South America")
    }

    const zoomEurope = () => {
        zoomContinent("Europe")
    }

    const zoomAsia = () => {
        zoomContinent("Asia")
    }

    const zoomAfrica = () => {
        zoomContinent("Africa")
    }

    const zoomOceania = () => {
        zoomContinent("Oceania")
    }

    return (
        <div className="navBar_Continents">
            <div className="continent" onClick={zoomWorld}>{"World"}</div>
            <div className="continent" onClick={zoomNorthAmerica}>{"North America"}</div>
            <div className="continent" onClick={zoomSouthAmerica}>{"South America"}</div>
            <div className="continent" onClick={zoomEurope}>{"Europe"}</div>
            <div className="continent" onClick={zoomAsia}>{"Asia"}</div>
            <div className="continent" onClick={zoomAfrica}>{"Africa"}</div>
            <div className="continent" onClick={zoomOceania}>{"Oceania"}</div>
        </div>
    );
};

export default NavBar_Continents;
