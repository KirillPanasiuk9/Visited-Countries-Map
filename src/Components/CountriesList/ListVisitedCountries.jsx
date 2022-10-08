import React from 'react';
import "./listVisitedCountries.css"
import CountryForSlideBar from "../CountryForSlideBar/CountryForSlideBar";

const ListVisitedCountries = ({visitedCountries}) => {
    return (
        <div>
            {"Visited Countries:"}
            {visitedCountries.map(item =>
                <CountryForSlideBar country={item}/>
            )}
        </div>
    );
};

export default ListVisitedCountries;
