import React from 'react';
import "./SayNumber.css";

class SayNumber extends React.Component<any> {
    // aud = new Audio();
    str = 'odin.mp3';    
    aud = new Audio('../../assets/mp3/odin.mp3');
    componentDidMount(): void {
        switch (this.props.controller.currentNumber) {
        case 1:
            this.str = 'odin.mp3';
            break;
        case 2:
            this.str = 'dva.mp3';
            break;
        case 3:
            this.str = 'tri.mp3';
            break; 
        }
        this.aud.src = '../../assets/mp3/' + this.str; 
        this.aud.play();        
    }
    
    render(): React.ReactNode {
        setTimeout(()=>{this.props.setCurrentLevel(2)}, 3000);
        return(
            <div className="area">
                <div className="numberBig">{this.props.controller.currentNumber}</div>
            </div>
        );
    }
}

export default  SayNumber;