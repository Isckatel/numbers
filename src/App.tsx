import React from 'react';
import Draggable, {DraggableEventHandler} from 'react-draggable'; // The default
import "./App.css";
import Item from './components/item/item';
import GameLayerContainer from './components/gameLayer/GameLayerContainer';

class App extends React.Component {  
  render(){    
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
