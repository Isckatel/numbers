import React from 'react';
import "./SayNumber.css";

class SayNumber extends React.Component<any> {
    // aud = new Audio();
    str = 'odin.mp3';
    tmp = this.props;
    
    aud = new Audio('../../assets/mp3/' + this.str);
    componentDidMount(): void {
        switch (this.props.controller.currentNumber) {
        case 1:
            this.str = 'odin.mp3';
            break;
        case 2:
            this.str = 'dva.mp3';
            break;
        default:
            break;
        }
        this.aud.src = '../../assets/mp3/' + this.str; 
        this.aud.play();        
    }
    
    render(): React.ReactNode {
        let temp = this.props;
        setTimeout(()=>{this.props.setCurrentLevel(2)}, 3000);
        return(
            <div className="area">
                <div className="numberBig">1</div>
            </div>
        );
    }
}

export default  SayNumber;