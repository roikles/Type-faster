'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

const app = document.querySelector("#app");

/**
 * Components
 */

import Timer from './components/timer';
import Keyboard from './components/keyboard';
import Start from './components/start';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            startBoxVisibility: 'show',
            ready: false,
            start: false,
            keyCounter: 0,
            counterRunning: false
        };
    }

    countCorrectKeyPresses(e) {
        let expectedOrder = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        let keyPressed = String.fromCharCode(e.keyCode);
        if(keyPressed === expectedOrder[this.state.keyCounter]){
            // Increment if the correct key is hit
            this.setState({ keyCounter: this.state.keyCounter + 1 });
        }
    }

    initializeGame(e) {
        this.setState({ startBoxVisibility: 'hide' });
        this.setState({ ready: true });
    }

    handleKeyPress(e){
        let keyPressed = e.which;

        if(keyPressed === 32 && this.state.ready === false){
            this.initializeGame(e);
        }

        if(this.state.ready === true){
            this.countCorrectKeyPresses(e);
        }

        // if the game is ready start when letter A is clicked
        if(this.state.ready === true && String.fromCharCode(e.keyCode) === 'A'){
            this.setState({ start: true });
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
            this.setState({ start: false });
        }
    }

    render(){
        return (
            <div>
                <Start visibility={ this.state.startBoxVisibility }  />
                <Timer start={ this.state.start } />
                <Keyboard />
            </div>
        );
    }
}


ReactDOM.render(
  <App />,
  app
);