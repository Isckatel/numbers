import React from 'react';
import Draggable, {DraggableEventHandler} from 'react-draggable';
import Item from '../item/item';
import { PropsStateType } from './GameLayerContainer';
import {itemType, personType} from "../../redux/level1-reducer";

class GameLayer extends React.Component<any> {
    // state = {
    //     activeDrags: 0,
    //     deltaPosition: {
    //       x: 0, y: 0
    //     },
    //     controlledPosition: {
    //       x: -400, y: 200
    //     }
    //   };
    
    elementRef = React.createRef();

    collision = (objA:itemType, objB:personType) : boolean => {
      if (objA.deltaPosition.x+objA.width  > objB.position.x
        && objA.deltaPosition.x < objB.position.x+objB.width
        && objA.deltaPosition.y+objA.height > objB.position.y
        && objA.deltaPosition.y < objB.position.y+objB.height) {
              return true;
      } else {return false;}
    }    

    handleDrag: DraggableEventHandler = (e, ui) => {
        // const {x, y} = this.state.deltaPosition;
        const {x, y} = this.props.state.level1.items[0].deltaPosition;
        this.setState({
          deltaPosition: {
            x: x + ui.deltaX,
            y: y + ui.deltaY,
          }
        });
       let newX = x + ui.deltaX;
       let newY = y + ui.deltaY;
       this.props.setDeltaPosition(0,{x:newX,y:newY});       
      //  console.log("x:" + newX + " " + "y:" + newY );
       if (this.collision(this.props.state.level1.items[0], this.props.state.level1.person)) {
          this.props.setVisibilityItem(0);
          // console.log("setVisible()");
       } 
    };

    
  
    
    render() {
        return (
            <div>
                <Item/>
          {this.props.state.level1.items[0].visibility?<Draggable
            defaultPosition={{x: 0, y: 0}}
            scale={1}          
            onDrag={this.handleDrag}
            >
            <div className="boxMove">     
              <p>
                Устанавливаем в стейт
              </p>
            </div>
          </Draggable> : null }       
          
          <Draggable>
            <div className="boxMove">     
              <p>
                Hi_down!
              </p>
            </div>
          </Draggable>
          <div>
            <img ref='elementRef' className='person' src="/assets/img/maleAdventurer.png" />
          </div>
            </div>
        );
    }
}

export default GameLayer;