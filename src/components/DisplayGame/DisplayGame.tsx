import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GameLayerContainer from '../gameLayer/GameLayerContainer';
import "./DisplayGame.css";

class DisplayGame extends React.Component<any> {
    render() {
        return(
            <div className="WraperDisplayGame">
                <div className="DisplayGame">
                    <GameLayerContainer controller={undefined} level1={undefined} />
                </div>
            </div>
        );
    }
}

export default DisplayGame;