import React from 'react';
import Draggable, {DraggableEventHandler} from 'react-draggable'; // The default
import "./App.css";
import Item from './components/item/item';
import GameLayerContainer from './components/gameLayer/GameLayerContainer';
import SelectNumber from './components/SelectNumber/SelectNumber';
import {Route, Routes, NavLink} from "react-router-dom";
class App extends React.Component {  
  render(){    
    return (
      <div className="App">
        <header className="App-header">
          <NavLink to="/">Главная</NavLink>
        </header>
        <main>
        <Routes>
          <Route path="/" element={<SelectNumber />} />
          <Route path="/number2" element={<GameLayerContainer controller={undefined} level1={undefined} />} />           
        </Routes>  
        </main>
      </div>
    );
  }
}

export default App;
