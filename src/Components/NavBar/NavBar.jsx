import React, {useState} from 'react';
import "./navBar.css"
import ListVisitedCountries from "../CountriesList/ListVisitedCountries";

const NavBar = ({visitedCountries}) => {

    const [visible, setVisible] = useState(false)

    const slideNavBarAction = () => {
        setVisible(!visible)
    }

    return (
        <div className="navBar">
            {visible === true
            ?
                <div className="slideBar slideBar-on">
                    <button
                        className="slideBar_button slideBar_button-on"
                        onClick={slideNavBarAction}
                    >
                        {"➤\t"}
                    </button>
                    <div className="countVisitedCountriesOn">
                        {"You've visited "}
                        <span className="numberOfCountries">
                            {`${visitedCountries.length}`}
                        </span>
                        {" countries out of 193"}
                    </div>
                    <div className="percentVisitedCountriesOn">
                        {"You've visited "}
                        <span className="numberOfCountries">
                            {`${Math.round(visitedCountries.length/193*100)}%`}
                        </span>
                        {" of the World"}
                    </div>
                    <ListVisitedCountries visitedCountries={visitedCountries}/>
                </div>
            :
                <div className="slideBar slideBar-off">
                    <button
                        className="slideBar_button slideBar_button-off"
                        onClick={slideNavBarAction}
                    >
                        {"➤\t"}
                    </button>
                    <div className="countVisitedCountriesOff">
                        {`${visitedCountries.length}`}
                    </div>
                    <div className="percentVisitedCountriesOff">
                        {`${Math.round(visitedCountries.length/193*100)}%`}
                    </div>
                </div>
            }

            <div className="title">
                {"Visited Countries Map"}
            </div>
        </div>
    );
};

export default NavBar;
