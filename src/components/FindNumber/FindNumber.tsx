import React from 'react';
import ItemContainer from '../item/itemContainer';
import "./FindNumber.css";
import {PropsStateNumberType} from "./FindNumberContainer";

class FindNumber extends React.Component<PropsStateNumberType> {

  render() { 
    let itemElem = []
    for (let i = 0; i < 10; i++) {      
      itemElem.push(<div
        style={{ top:100, 
                left:30*i}}
         className='numbers'>{this.props.idNumber}</div>);
    } 

    return (
      <div className="WraperGameLayer">
        <div className="GameLayer">
          {itemElem}   
        </div>        
      </div>    
    );
  }
}

export default FindNumber;