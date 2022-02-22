import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GameLayerContainer from '../gameLayer/GameLayerContainer';
import { useParams } from "react-router-dom";
import "./DisplayGame.css";

const DisplayGame: React.FC<any> = (props:any) => { 
    let params = useParams();  
    return(
        <div className="WraperDisplayGame">
            <div className="DisplayGame">
                <GameLayerContainer idNumber={Number(params.numberId)} />
            </div>
        </div>
    );   
}

export default DisplayGame;