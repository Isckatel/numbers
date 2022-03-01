import React, {useState, useEffect} from 'react';
import GameLayerContainer from '../gameLayer/GameLayerContainer';
import { useParams } from "react-router-dom";
import "./DisplayGame.css";
import SayNumberContainer from '../SayNumber/SayNumberContainer';

const DisplayGame: React.FC<any> = (props:any) => { 
    let params = useParams();
    const [init, setInit] = useState(false);  
    useEffect(() => {
        if (!init) {
            props.setCurrentNumber(Number(params.numberId));
            props.setCurrentLevel(1);
            setInit(true);
        }
    });
    let currentElement;
    switch (props.controller.currentLevel) {
        case 1:
            currentElement = () => { return (<SayNumberContainer />);}
            break;
        case 2:
            currentElement = () => { return (<GameLayerContainer idNumber={Number(params.numberId)} />);}
            break;
        default:
            currentElement = () => { return (<GameLayerContainer idNumber={Number(params.numberId)} />);}
    }        

    return(
        <div className="WraperDisplayGame">
            <div className="DisplayGame">
                {currentElement()}
                {/* <GameLayerContainer idNumber={Number(params.numberId)} /> */}
            </div>
        </div>
    );   
}

export default DisplayGame;