import React from "react";
import { StateType } from "../../redux/store";
import {connect, ConnectedProps} from 'react-redux';
import GameLayer from "./GameLayer";
import {setDeltaPosition, setVisibilityItem, setDeltaPositionAndVisibility} from "../../redux/level1-reducer";


let mapStateToProps:any = (state:StateType) => ({
    state: state
});

const connector = connect(mapStateToProps, {setDeltaPosition, setVisibilityItem, setDeltaPositionAndVisibility});
export type PropsStateType = ConnectedProps<typeof connector>

class GameLayerContainer extends React.Component<StateType> {
    render() {
        return (
            <GameLayer {...this.props} />
        );
    }
}

export default connect(mapStateToProps, {setDeltaPosition, setVisibilityItem, setDeltaPositionAndVisibility})(GameLayerContainer);