import React from 'react';
import Draggable, {DraggableEventHandler} from 'react-draggable'; // The default
import "./App.css";
import Item from './components/item/item';
import GameLayerContainer from './components/gameLayer/GameLayerContainer';

class App extends React.Component {
  // state = {
  //   activeDrags: 0,
  //   deltaPosition: {
  //     x: 0, y: 0
  //   },
  //   controlledPosition: {
  //     x: -400, y: 200
  //   }
  // };

  // elementRef = React.createRef();

  // handleDrag: DraggableEventHandler = (e, ui) => {
  //   const {x, y} = this.state.deltaPosition;
  //   this.setState({
  //     deltaPosition: {
  //       x: x + ui.deltaX,
  //       y: y + ui.deltaY,
  //     }
  //   });
  
  // };

  render(){
    // let x = 525;
    // let y = 225;
    // let width = 50
    // let height = 100;
    
    // let itemElem = 
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <main>
          <GameLayerContainer controller={undefined} level1={undefined} />
        </main>
      </div>
    );
  }
}

export default App;
