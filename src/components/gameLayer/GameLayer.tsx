import React from 'react';
import Draggable, {DraggableEventHandler} from 'react-draggable';
import ItemContainer from '../item/itemContainer';
import { PropsStateType } from './GameLayerContainer';
import {itemType, personType} from "../../redux/level1-reducer";
import "./GameLayer.css";

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
    elementRef; 
    constructor(props) {
      super(props);
      this.elementRef = React.createRef();
    }
    
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
  
  componentDidMount(): void {
      
  }    
  
  render() {
    let itemElem = this.props.state.level1.items.map((it)=>{
      if (it.visibility) {
        return (<ItemContainer key={it.id} idItem={it.id} />)
      } else {
        return null;
      }  
    });

    return (
      <div className="WraperGameLayer">
        <div className="GameLayer">
          {itemElem}
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

          <img ref={this.elementRef}
           className='person'
          //  style={{ top: this.props.level1.person.position.x, left:this.props.level1.person.position.y }} 
          style={{ top:50}}
           src="/assets/img/maleAdventurer.png" />

        </div>
      </div>    
    );
  }
}

export default GameLayer;