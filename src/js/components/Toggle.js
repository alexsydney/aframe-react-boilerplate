import {Entity} from 'aframe-react';
import React from 'react';
import Text from './Text';

export class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        };

        // Binding so `this` works in callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
        console.log('isToggleOn is:', this.state.isToggleOn);
    }

    render () {
        return (
            <Entity
                geometry={{primitive: 'box',
                           depth: '1',
                           width: '0.75',
                           height: '0.75'}}
                material={{color: 'blue', opacity: 0.4}}
                position='2 0.2 -3'
                onClick={this.handleClick}>

                <Text text={this.state.isToggleOn ? 'ON' : 'OFF'}
                      position='0.5 0 -1'/>
            </Entity>
        );
    }
}