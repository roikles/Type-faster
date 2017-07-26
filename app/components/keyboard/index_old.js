'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Key from '../key';

class Keyboard extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.keys = {
            Q:{ pressed: false, row: 1 },
            W:{ pressed: false, row: 1 },
            E:{ pressed: false, row: 1 },
            R:{ pressed: false, row: 1 },
            T:{ pressed: false, row: 1 },
            Y:{ pressed: false, row: 1 },
            U:{ pressed: false, row: 1 },
            I:{ pressed: false, row: 1 },
            O:{ pressed: false, row: 1 },
            P:{ pressed: false, row: 1 },
            A:{ pressed: false, row: 2 },
            S:{ pressed: false, row: 2 },
            D:{ pressed: false, row: 2 },
            F:{ pressed: false, row: 2 },
            G:{ pressed: false, row: 2 },
            H:{ pressed: false, row: 2 },
            J:{ pressed: false, row: 2 },
            K:{ pressed: false, row: 2 },
            L:{ pressed: false, row: 2 },
            Z:{ pressed: false, row: 3 },
            X:{ pressed: false, row: 3 },
            C:{ pressed: false, row: 3 },
            V:{ pressed: false, row: 3 },
            B:{ pressed: false, row: 3 },
            N:{ pressed: false, row: 3 },
            M:{ pressed: false, row: 3 }
        }

        //console.log(this.rows);

        // Listen for keypresss
        window.addEventListener('keydown', function(e){
            let keyPressed = String.fromCharCode(e.keyCode);
            let objKeys = Object.keys(this.keys);

            objKeys.forEach(key => {
                if(this.key == keyPressed){
                    this.keys[key].pressed = true;
                    console.log(keys);
                }
            });
        });
    }

    render() {

        this.rows = [];

        let objKeys = Object.keys(this.keys);
        objKeys.forEach(key => {
            this.rows.push(<Key letter={ key } row={ this.keys[key].pressed } />);
        });

        return (
            <section className="keyboard">
                <div className="keyboard__row">
                    <div>{this.rows}</div>
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