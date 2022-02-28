import React from "react";
import { StateType } from "../../redux/store";
import {connect, ConnectedProps} from 'react-redux';
import GameLayer from "./GameLayer";
import {setDeltaPosition, setVisibilityItem, setDeltaPositionAndVisibility} from "../../redux/level1-reducer";

type OwnProps = {
    idNumber:number;
}

let mapStateToProps:any = (state:StateType, ownProps:OwnProps) => ({
    state: state,
    idNumber: ownProps.idNumber
});

const connector = connect(mapStateToProps, {setDeltaPosition, setVisibilityItem, setDeltaPositionAndVisibility});
export type PropsStateType = ConnectedProps<typeof connector>  & ReturnType<typeof mapStateToProps>;;

// class GameLayerContainer extends React.Component<StateType> {
//  render() { return (<GameLayer {...this.props} />); }
// }

const GameLayerContainer: React.FC<PropsStateType> = (props:PropsStateType) => {
    return (
        <GameLayer {...props } />
    );
   
}

export default connect(mapStateToProps, {setDeltaPosition, setVisibilityItem, setDeltaPositionAndVisibility})(GameLayerContainer);