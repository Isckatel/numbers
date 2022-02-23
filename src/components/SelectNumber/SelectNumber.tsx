import React from 'react';
import "./SelectNumber.css";
import {NavLink} from "react-router-dom";

class SelectNumber extends React.Component {
    render() {
        return (
            <div className="selsectNumber">
                <NavLink to="/number/1"> <div className="elemSelect">1</div></NavLink>
                <NavLink to="/number/2"> <div className="elemSelect">2</div></NavLink>
                <NavLink to="/number3"> <div className="elemSelect">3</div></NavLink>
                <NavLink to="/number4"> <div className="elemSelect">4</div></NavLink>
                <NavLink to="/number5"> <div className="elemSelect">5</div></NavLink>
                <NavLink to="/number6"> <div className="elemSelect">6</div></NavLink>
                <NavLink to="/number7"> <div className="elemSelect">7</div></NavLink>
                <NavLink to="/number8"> <div className="elemSelect">8</div></NavLink>
                <NavLink to="/number9"> <div className="elemSelect">9</div></NavLink>
                <NavLink to="/number10"><div className="elemSelect">10</div></NavLink>                
            </div>
            
        );
    }
}

export default SelectNumber;