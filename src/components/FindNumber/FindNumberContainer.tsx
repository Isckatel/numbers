import React from "react";
import { StateType } from "../../redux/store";
import {connect, ConnectedProps} from 'react-redux';
import FindNumber from "./FindNumber";
import {setDeltaPosition, setVisibilityItem, setDeltaPositionAndVisibility} from "../../redux/level1-reducer";

type OwnProps = {
    idNumber:number;
}

let mapStateToProps = (state:StateType, ownProps:OwnProps) => ({
    state: state,
    idNumber: ownProps.idNumber
});

const connector = connect(mapStateToProps, {setDeltaPosition, setVisibilityItem, setDeltaPositionAndVisibility});
export type PropsStateNumberType = ConnectedProps<typeof connector>;


const FindNumberContainer: React.FC<PropsStateNumberType> = (props:PropsStateNumberType) => {
    return (
        <FindNumber {...props } />
    );
   
}

export default connect(mapStateToProps, {setDeltaPosition, setVisibilityItem, setDeltaPositionAndVisibility})(FindNumberContainer);