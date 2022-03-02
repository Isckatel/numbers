import React from 'react';
import ItemContainer from '../item/itemContainer';
import "./GameLayer.css";
import {PropsStateNumberType} from "./GameLayerContainer";

class GameLayer extends React.Component<PropsStateNumberType> {
  elementRef; 
  constructor(props) {
    super(props);
    this.elementRef = React.createRef();
  }    
    
  render() { 
    let itemElem = this.props.state.level1.numbers[this.props.idNumber-1].items.map((it)=>{
      if (it.visibility) {
        return (<ItemContainer key={it.id} idItem={it.id} idNumber={this.props.idNumber} />)
      } else {
        return null;
      }  
    });

    return (
      <div className="WraperGameLayer">
        <div className="GameLayer">
          {itemElem}   
          <div ref={this.elementRef}
           className='person'          
           style={{ top:this.props.state.level1.numbers[this.props.idNumber-1].person.position.y, left:this.props.state.level1.numbers[this.props.idNumber-1].person.position.x}}>
             <div> top: {this.props.state.level1.numbers[this.props.idNumber-1].person.position.y}, left: {this.props.state.level1.numbers[this.props.idNumber-1].person.position.x}</div>
          </div>
        </div>        
      </div>    
    );
  }
}

export default GameLayer;