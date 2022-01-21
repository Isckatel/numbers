import React from 'react';
import Draggable, {DraggableEventHandler} from 'react-draggable'; // The default
import "./App.css";
import Item from './components/item/item';

class App extends React.Component {
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

  render(){
    let x = 525;
    let y = 225;
    let width = 50
    let height = 100;
    
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <main>
          <Item positionX={x}  positionY={y}  
            widthObj={width} heightObj={height} /> 
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
        </main>
      </div>
    );
  }
}

export default App;
