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
            startBoxVisibility: 'show'
        };
    }

    handleKeyPress(e){
        let keyPressed = e.which;
        // Ifthe space bar is pressed
        if(keyPressed === 32 ){
            // Game start!!!
            // -- start timer
            // -- hide start box
            // -- show keyboard
            this.setState({ startBoxVisibility: 'hide' });
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
                <Timer />
                <Keyboard />
            </div>
        );
    }
}


ReactDOM.render(
  <App />,
  app
);