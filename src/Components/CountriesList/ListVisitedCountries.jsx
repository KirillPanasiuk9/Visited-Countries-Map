import React from 'react';
import "./listVisitedCountries.css"
import CountryForSlideBar from "../CountryForSlideBar/CountryForSlideBar";

const ListVisitedCountries = ({visitedCountries}) => {
    return (
        <div className="istVisitedCountries">
            {"Visited Countries:"}
            {visitedCountries.map(item =>
                <CountryForSlideBar country={item}/>
            )}
        </div>
    );
};

export default ListVisitedCountries;
