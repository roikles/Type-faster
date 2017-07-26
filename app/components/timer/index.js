'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hundredthseconds: 0,
            seconds: 0,
            minutes: 0
        };
    }

    startTimer(){
        return setInterval(
            () => this.clock(),
            10 // 1/10 second
        );
    }

    componentDidUpdate() {
        if(this.props.start === true){
            this.startTimer();
        } else {
            clearInterval(this.clock);
        }
    }

    componentWillUnmount() {
        clearInterval(this.clock);
    }

    pad(n) {
        return (n < 10) ? ("0" + n) : n;
    }

    clock() {

        // increment the timer
        this.setState({ hundredthseconds: this.state.hundredthseconds + 1 });

        // Every minute increment the minute counter
        if(this.state.hundredthseconds > 0 && this.state.hundredthseconds % 100 === 0){
            this.setState({ 
                hundredthseconds: 0,
                seconds: this.state.seconds + 1
            });
        }

        // Every minute increment the minute counter
        if(this.state.seconds > 0 && this.state.seconds % 60 === 0){
            this.setState({ 
                seconds: 0,
                minutes: this.state.minutes + 1
            });
        }

    }

    render() {
        return (
            <div>
                <h2>
                    {this.pad(this.state.minutes)}:
                    {this.pad(this.state.seconds)}:
                    {this.pad(this.state.hundredthseconds)}
                </h2>
            </div>
        );
    }
}

export default Timer;