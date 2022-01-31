import React from "react";
import { StateType } from "../../redux/store";
import {connect, ConnectedProps} from 'react-redux';
import Item from "./item";
import {setDeltaPositionAndVisibility} from "../../redux/level1-reducer";
import { useParams } from 'react-router-dom';

type OwnProps = {
    idItem: number,
  };

let mapStateToProps:any = (state:StateType, ownProps: OwnProps) => ({
    level1: state.level1,
    idItem: ownProps.idItem     
});

const connector = connect(mapStateToProps, {setDeltaPositionAndVisibility});
type ConnectProps = ConnectedProps<typeof connector>;

export type PropsStateType = ConnectProps & OwnProps;
// export type PropsStateType = ReturnType<typeof connector>;

class ItemContainer extends React.Component<PropsStateType> {
    render() {
        return (
            <Item {...this.props} />
        );
    }
}

export default connect(mapStateToProps, {setDeltaPositionAndVisibility})(ItemContainer);