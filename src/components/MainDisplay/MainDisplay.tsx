import React from "react";
import { Outlet } from "react-router-dom";
import './MainDisplay.css';

class MainDisplay extends React.Component {
    render() {
        return(
            <div>
                <Outlet />
            </div>
        );
    }
}

export default MainDisplay;