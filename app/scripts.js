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
            start: false
        };
    }

    handleKeyPress(e){
        let keyPressed = e.which;
        
        // If the space bar is pressed
        if(keyPressed === 32 ){
            // Game Ready
            this.setState({ startBoxVisibility: 'hide' });
            this.setState({ ready: true });
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