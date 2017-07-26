'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Key extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            active: false
        };
        // Bind this to handleKeyPress to avoid scoping issues on window.addeventlistener
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    /**
     * sizeClasses
     *
     * create CSS classes based on the size property
     * @return {string}
     */
    sizeClasses() {
        let size = this.props.size,
            sizeClass = '';
        if(size !== 'undefined'){
            sizeClass = 'key--size-' + size;
        }
        return sizeClass;
    }

    /**
     * activeClasses
     *
     * Sets the css active key class based on the active state
     * @return {[type]} [description]
     */
    activeClasses() {
        let activeClass = '';
        if(this.state.active === true){
            activeClass = 'key--active';
        }
        return activeClass;
    }

    /**
     * handleKeyPress
     */
    handleKeyPress(e) {
        let keyPressed = String.fromCharCode(e.keyCode);
        if(keyPressed === this.props.letter){
            this.setState({active: true});     
        }
    }

    componentDidMount() {
        window.addEventListener('keydown',this.handleKeyPress);
    }

    render() {
        return (
            <div className={"key " + this.sizeClasses() + " " + this.activeClasses()}>
                <span className="key__letter">{this.props.letter}</span>
            </div>
        );
    }
}

export default Key;