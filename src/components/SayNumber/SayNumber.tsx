import React from 'react';
import "./SayNumber.css";

class SayNumber extends React.Component<any> {
    // aud = new Audio();
    aud = new Audio('../../assets/mp3/odin.mp3');
    componentDidMount(): void {
        // this.aud.src = '../../assets/mp3/odin.mp3'; 
        this.aud.play();
    }
    render(): React.ReactNode {
        return(
            <div>
                1
            </div>
        );
    }
}

export default  SayNumber;