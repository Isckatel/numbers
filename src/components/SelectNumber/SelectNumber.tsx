import React from 'react';
import "./SelectNumber.css";
import {NavLink} from "react-router-dom";

class SelectNumber extends React.Component {
    render() {
        return (
            <div className="selsectNumber">
                <NavLink className="selectNumber" to="/number/1"> <div className="elemSelect"><span className='number'>1</span></div></NavLink>
                <NavLink className="selectNumber" to="/number/2"> <div className="elemSelect"><span className='number'>2</span></div></NavLink>
                <NavLink className="selectNumber" to="/number/3"> <div className="elemSelect"><span className='number'>3</span></div></NavLink>
                <NavLink className="selectNumber" to="/number4"> <div className="elemSelect"><span className='number'>4</span></div></NavLink>
                <NavLink className="selectNumber" to="/number5"> <div className="elemSelect"><span className='number'>5</span></div></NavLink>
                <NavLink className="selectNumber" to="/number6"> <div className="elemSelect"><span className='number'>6</span></div></NavLink>
                <NavLink className="selectNumber" to="/number7"> <div className="elemSelect"><span className='number'>7</span></div></NavLink>
                <NavLink className="selectNumber" to="/number8"> <div className="elemSelect"><span className='number'>8</span></div></NavLink>
                <NavLink className="selectNumber" to="/number9"> <div className="elemSelect"><span className='number'>9</span></div></NavLink>
                <NavLink className="selectNumber" to="/number10"><div className="elemSelect"><span className='number'>10</span></div></NavLink>                
            </div>
            
        );
    }
}

export default SelectNumber;