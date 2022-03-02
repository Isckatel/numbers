import React from 'react';
import "./App.css";
import SelectNumber from './components/SelectNumber/SelectNumber';
import {Route, Routes, NavLink} from "react-router-dom";
import MainDisplay from './components/MainDisplay/MainDisplay';
import DisplayGameContainer from './components/DisplayGame/DisplayGameContainer';

class App extends React.Component {  
  render(){    
    return (
      <div className="App">
        <header className="App-header">
          <NavLink className="mainMenu" to="/">Главная</NavLink>
        </header>
        <main>
        <Routes>          
          <Route path="/" element={<MainDisplay />} >
            <Route path="" element={<SelectNumber />} />
            <Route path="number" element={<DisplayGameContainer />} >
              <Route path=":numberId" element={<DisplayGameContainer />} />
            </Route>              
            <Route
              path="*"
              element={
                <div style={{ padding: "1rem" }}>
                  <p>Здесь ничего нет!</p>
                </div>
              }
            />
          </Route>
        </Routes>  
        </main>
      </div>
    );
  }
}

export default App;
