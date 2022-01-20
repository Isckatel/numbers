import React from 'react';
import Draggable from 'react-draggable';
import "./item.css";

interface IPosition {
    positionX:number,
    positionY:number,
    widthObj:number,
    heightObj: number
}

class Unit {
    // imgUrl:string;
    x:number;
    y:number; 
    width:number;
    height:number;
    // constructor(imgUrl, x = -16, y = -16, width = 16, height=16) {      
    constructor(imgUrl, x = -16, y = -16, width = 16, height=16) {   
      // this.imgUrl = imgUrl;
      this.width = width;
      this.height = width;
      this.x = x;
      this.y = y;
    }
  }
 

class Item extends React.Component<IPosition> {
    state = {
        activeDrags: 0,
        deltaPosition: {
          x: 0, y: 0
        }
      };

    collision = (objA:Unit, objB:Unit) : boolean => {
        if (objA.x+objA.width  > objB.x
          && objA.x < objB.x+objB.width
          && objA.y+objA.height > objB.y
          && objA.y < objB.y+objB.height) {
                return true;
        } else {return false;}
      }  

    handleDrag = (e, ui) => {
    const { x, y } = this.state.deltaPosition;
    this.setState({
        deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
        }    
    });
    let Person = new Unit(this.props.positionX, this.props.positionY, this.props.widthObj, this.props.heightObj);
    let ThisObj = new Unit(this.state.deltaPosition.x, this.state.deltaPosition.y, 64, 82);
    if (this.collision(Person, ThisObj)) {
      //Изменить стейт наличия
    }

    };

    render() {
        const { deltaPosition } = this.state;
        return (
        <Draggable onDrag={this.handleDrag}>    
            <div className='item'>
                <div>x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</div>
            </div>
        </Draggable>
        );
    }
}

export default Item;