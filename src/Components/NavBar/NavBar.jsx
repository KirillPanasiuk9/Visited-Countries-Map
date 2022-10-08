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
                <div className="slideBarOn">
                    <button
                        className="slideBar_button"
                        onClick={slideNavBarAction}
                    >
                        <svg
                            fill="#000000"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 50 50"
                            width="30px"
                            height="30px">
                            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"/>
                        </svg>
                    </button>
                    <div className="countVisitedCountriesOn">
                        {`You've visited ${visitedCountries.length} countries out of 193`}
                    </div>
                    <div className="percentVisitedCountriesOn">
                        {`You've visited ${visitedCountries.length/193*100}% of the World`}
                    </div>
                    <ListVisitedCountries visitedCountries={visitedCountries}/>
                </div>
            :
                <div className="slideBarOff">
                    <button
                        className="slideBar_button"
                        onClick={slideNavBarAction}
                    >
                        <svg
                            fill="#000000"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 50 50"
                            width="30px"
                            height="30px">
                            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"/>
                        </svg>
                    </button>
                    <div className="countVisitedCountriesOff">
                        {`${visitedCountries.length}`}
                    </div>
                    <div className="percentVisitedCountriesOff">
                        {`${visitedCountries.length/193*100}%`}
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
