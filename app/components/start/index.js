'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Start is the initial screen that 
 * loads with the App
 */

class Start extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            active: true
        };
    }

    hideElement() {
        if(this.props.visibility === 'hide'){
            return 'start-wrapper--hide';
        }
        return;
    }

    render() {
        return (
            <div className={"start-wrapper " + this.hideElement()}>
                <section className="start">
                    <h1 className="start__title">Instructions</h1>
                    <div className="start__instructions">
                        <p>Test your typing skills and speed with this Typing game.</p>
                        <p>The aim of the game is to type the alphabet as quickly as you can. You can restart the game at any time by pressing the Space Bar</p>
                    </div>
                    <div className="start__launch">
                        <p>Press Space Bar to begin.</p>
                    </div>
                </section>
            </div>
        );
    }

}

export default Start;