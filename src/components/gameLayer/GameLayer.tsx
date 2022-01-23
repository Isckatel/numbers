import React from 'react';
import Draggable, {DraggableEventHandler} from 'react-draggable';
import Item from '../item/item';

class GameLayer extends React.Component<any> {
    state = {
        activeDrags: 0,
        deltaPosition: {
          x: 0, y: 0
        },
        controlledPosition: {
          x: -400, y: 200
        }
      };
    
      elementRef = React.createRef();

    handleDrag: DraggableEventHandler = (e, ui) => {
        const {x, y} = this.state.deltaPosition;
        this.setState({
          deltaPosition: {
            x: x + ui.deltaX,
            y: y + ui.deltaY,
          }
        });
    };
    
    render() {
        return (
            <div>
                <Item/> 
          <Draggable
            defaultPosition={{x: 0, y: 0}}
            scale={1}          
            onDrag={this.handleDrag}
            >
            <div className="boxMove">     
              <p>
                Hi!
              </p>
            </div>
          </Draggable> 
          <Draggable>
            <div className="boxMove">     
              <p>
                Hi!
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