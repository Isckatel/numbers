import React, {useState, useEffect} from 'react';
import GameLayerContainer from '../gameLayer/GameLayerContainer';
import { useParams } from "react-router-dom";
import "./DisplayGame.css";
import SayNumberContainer from '../SayNumber/SayNumberContainer';
import {PropsControllerType} from "./DisplayGameContainer";

const DisplayGame: React.FC<PropsControllerType> = (props:PropsControllerType) => { 
    let params = useParams();//для получения цифры пришедшей от Route
    const [init, setInit] = useState(false);  
    useEffect(() => {
        if (!init) {
            props.setCurrentNumber(Number(params.numberId));
            props.setCurrentLevel(1);
            setInit(true);
        }
    });
    let currentElement;
    //Выбор уровня игры, каждыу уровень - компонент
    switch (props.controller.currentLevel) {
        case 1:
            currentElement = () => { return (<SayNumberContainer />);}
            break;
        case 2:
            currentElement = () => { return (<GameLayerContainer idNumber={Number(params.numberId)} />);}
            break;
        default:
            currentElement = () => { return (<SayNumberContainer />);}
    }        

    return(
        <div className="WraperDisplayGame">
            <div className="DisplayGame">
                {currentElement()}
            </div>
        </div>
    );   
}

export default DisplayGame;