import React from 'react';
import "./listVisitedCountries.css"
import CountryForSlideBar from "../CountryForSlideBar/CountryForSlideBar";

const ListVisitedCountries = ({visitedCountries}) => {
    return (
        <div className="listVisitedCountries">
            <p>
                {"Visited Countries:"}
            </p>
            {visitedCountries.map(item =>
                <CountryForSlideBar country={item}/>
            )}
        </div>
    );
};

export default ListVisitedCountries;
