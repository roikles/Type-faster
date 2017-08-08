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
import Scoreboard from './components/scoreboard';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            startBoxVisibility: 'show',
            scoreboardVisibility: 'hide',
            ready: false,
            start: false,
            keyCounter: 0,
            gameTimer: '00:00:00'
        };
        this.totalChars = 26;
    }

    countCorrectKeyPresses(e) {
        let expectedOrder = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        let keyPressed = String.fromCharCode(e.keyCode);
        if(keyPressed === expectedOrder[this.state.keyCounter] && this.state.keyCounter <= this.totalChars){
            // Increment if the correct key is hit
            this.setState({ keyCounter: this.state.keyCounter + 1 });
        }
    }

    initializeGame() {
        return this.setState({ startBoxVisibility: 'hide', ready: true });
    }

    gameStart(){
        console.log('game started');
        return this.setState({ start: true });
    }

    gameOver() {
        console.log('game over');
        return this.setState({ start: false, scoreboardVisibility: true });

    }

    handleKeyPress(e){
        let keyPressed = e.which;

        // initialize game when space clicked
        if(keyPressed === 32 && this.state.ready === false){
            this.initializeGame(e);
        }

        // if the game is ready start when letter A is clicked
        if(this.state.ready === true && String.fromCharCode(e.keyCode) === 'A'){
            this.gameStart();
        }

        // once initilized
        if(this.state.ready === true){
            this.countCorrectKeyPresses(e);
        }

        // if the keycounter reaches all 26 chars end the game
        if(this.state.keyCounter === this.totalChars){
            this.gameOver();
        }
    }

    componentDidMount() {
        window.addEventListener('keydown',(e) => { 
            this.handleKeyPress(e) 
        });
    }

    render(){
        return (
            <div>
                <Start visibility={ this.state.startBoxVisibility }  />
                <Timer start={ this.state.start }/>
                <Keyboard />
                <Scoreboard visibility={ this.state.scoreboardVisibility }  />
            </div>
        );
    }
}

ReactDOM.render(
  <App />,
  app
);