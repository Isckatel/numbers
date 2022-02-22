import React from "react";
import { StateType } from "../../redux/store";
import {connect, ConnectedProps} from 'react-redux';
import Item from "./item";
import {setDeltaPositionAndVisibility} from "../../redux/level1-reducer";

type OwnProps = {
    idItem: number,
    idNumber:number;
  };

let mapStateToProps = (state:StateType, ownProps: OwnProps) => ({
    level1: state.level1,
    idItem: ownProps.idItem,
    idNumber: ownProps.idNumber     
});

const connector = connect(mapStateToProps, {setDeltaPositionAndVisibility});
export type PropsStateType = ConnectedProps<typeof connector>;
// export type PropsStateType = ConnectProps & OwnProps;
// export type PropsStateType = ReturnType<typeof connector>;

class ItemContainer extends React.Component<PropsStateType> {
    render() {
        return (
            <Item {...this.props} />
        );
    }
}

export default connect(mapStateToProps, {setDeltaPositionAndVisibility})(ItemContainer);