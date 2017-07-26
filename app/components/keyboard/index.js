'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Key from '../key';

class Keyboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { keyCounter: 0 }
    }

    handleKeyPress(e) {
        let expectedOrder = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        let keyPressed = String.fromCharCode(e.keyCode);
        console.log(keyPressed);
        if(keyPressed === expectedOrder[this.state.keyCounter]){
            //only increment if the correct key is hit
            //could eventually add a hard mode 
            //where an incorrect stroke triggers game over
            this.setState({ keyCounter: this.state.keyCounter + 1 });
            console.log('true');
        } else {
            console.log('false');
        }
    }

    componentDidMount() {
        window.addEventListener('keydown',(e) => { 
            this.handleKeyPress(e) 
        });
    }

    componentDidUpdate() {
        if(this.state.keyCounter === 26){
            console.log('Winner!!!!');

        }
    }


    render() {
        return (
            <section className="keyboard">
                <div className="keyboard__row">
                    <Key />
                    <Key />
                    <Key />
                    <Key />
                    <Key />
                    <Key />
                    <Key />
                    <Key />
                    <Key />
                    <Key />
                    <Key />
                    <Key />
                    <Key />
                    <Key size="2" />
                </div>
                <div className="keyboard__row">
                    <Key size="4" />
                    <Key letter="Q" />
                    <Key letter="W" />
                    <Key letter="E" />
                    <Key letter="R" />
                    <Key letter="T" />
                    <Key letter="Y" />
                    <Key letter="U" />
                    <Key letter="I" />
                    <Key letter="O" />
                    <Key letter="P" />
                    <Key />
                    <Key />
                    <Key size="4" />
                </div>
                <div className="keyboard__row">
                    <Key size="5" />
                    <Key letter="A" />
                    <Key letter="S" />
                    <Key letter="D" />
                    <Key letter="F" />
                    <Key letter="G" />
                    <Key letter="H" />
                    <Key letter="J" />
                    <Key letter="K" />
                    <Key letter="L" />
                    <Key />
                    <Key />
                    <Key size="6" />
                </div>
                <div className="keyboard__row">
                    <Key size="6" />
                    <Key letter="Z" />
                    <Key letter="X" />
                    <Key letter="C" />
                    <Key letter="V" />
                    <Key letter="B" />
                    <Key letter="N" />
                    <Key letter="M" />
                    <Key />
                    <Key />
                    <Key />
                    <Key size="7" />
                </div>
                <div className="keyboard__row">
                    <Key size="2" />
                    <Key size="2" />
                    <Key size="2" />
                    <Key size="8" />
                    <Key size="2" />
                    <Key size="2" />
                    <Key size="2" />
                    <Key size="2" />
                </div>
            </section>
        );
    }
}

export default Keyboard;