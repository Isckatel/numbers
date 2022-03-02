import React from "react";
import { StateType } from "../../redux/store";
import {connect, ConnectedProps} from 'react-redux';
import {setCurrentLevel, setCurrentNumber} from "../../redux/controller-reducer";
import DisplayGame from "./DisplayGame";

let mapStateToProps = (state:StateType) => ({
    controller: state.controller
});

const connector = connect(mapStateToProps, {setCurrentLevel, setCurrentNumber});

export type PropsControllerType = ConnectedProps<typeof connector>;


class DisplayGameContainer extends React.Component<PropsControllerType> {
    render() {
        return (
            <DisplayGame {...this.props } />
        );
    }
}

export default connect(mapStateToProps, {setCurrentLevel, setCurrentNumber})(DisplayGameContainer);