import React from 'react';
import Draggable, {DraggableEventHandler} from 'react-draggable';
import "./item.css";
import { PropsStateType } from './itemContainer';

class Item extends React.Component<PropsStateType> {
    
    handleDrag: DraggableEventHandler = (e, ui) => {
        const { x, y } = this.props.level1.numbers[this.props.idNumber-1].items[this.props.idItem].deltaPosition;
        let newX = x + ui.deltaX;
        let newY = y + ui.deltaY;
        this.props.setDeltaPositionAndVisibility(this.props.idItem,{x:newX,y:newY},this.props.idNumber);
    };

    render() {
        const { deltaPosition } = this.props.level1.numbers[this.props.idNumber-1].items[this.props.idItem];
        return (
        <Draggable onDrag={this.handleDrag}>    
            <div className='item'>
                <div>id:{this.props.idItem} , x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</div>
            </div>
        </Draggable>
        );
    }
}

export default Item;