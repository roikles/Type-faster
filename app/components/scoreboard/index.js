'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Timer from '../timer';

/**
 * Start is the initial screen that 
 * loads with the App
 */

class Scoreboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            active: false
        };
    }

    hideElement() {
        if(this.props.visibility === 'hide'){
            return 'scoreboard-wrapper--hide';
        }
        return;
    }

    render() {
        return (
            <div className={"scoreboard-wrapper " + this.hideElement()}>
                <section className="scoreboard">
                    <h1 className="scoreboard__title">Congratulations!!!!</h1>
                    <div className="scoreboard__results">
                        <p>You did good kid!.</p>
                        <p>You completed the game in <Timer /></p>
                    </div>
                    <div className="scoreboard__relaunch">
                        <p>Press Space Bar to try again.</p>
                    </div>
                </section>
            </div>
        );
    }

}

export default Scoreboard;