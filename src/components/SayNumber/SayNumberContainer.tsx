import React from "react";
import { StateType } from "../../redux/store";
import {connect, ConnectedProps} from 'react-redux';
import {setCurrentLevel, setCurrentNumber} from "../../redux/controller-reducer";
import SayNumber from "./SayNumber";

let mapStateToProps = (state:StateType) => ({
    controller: state.controller
});

const connector = connect(mapStateToProps, {setCurrentLevel, setCurrentNumber});

export type PropsControllerType = ConnectedProps<typeof connector> ;

class SayNumberContainer extends React.Component<PropsControllerType> {
    render() {
        return (
            <SayNumber {...this.props } />
        );
    }
}

export default connect(mapStateToProps, {setCurrentLevel, setCurrentNumber})(SayNumberContainer);