import React from 'react';
import ItemContainer from '../item/itemContainer';
import "./GameLayer.css";

class GameLayer extends React.Component<any> {
  elementRef; 
  constructor(props) {
    super(props);
    this.elementRef = React.createRef();
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
          <div ref={this.elementRef}
           className='person'          
           style={{ top:this.props.state.level1.person.position.x, left:this.props.state.level1.person.position.y}}>
          </div>
        </div>
      </div>    
    );
  }
}

export default GameLayer;