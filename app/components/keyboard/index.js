'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Key from '../key';

class Keyboard extends React.Component {

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