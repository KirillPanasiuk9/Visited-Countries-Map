import React from 'react';
import "./countryForSlideBar.css"

const CountryForSlideBar = ({country}) => {
    return (
        <div className="countryForSlideBar">
            {country}
        </div>
    );
};

export default CountryForSlideBar;
