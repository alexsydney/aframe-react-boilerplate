import React from 'react';
import Text from './Text';

export class TextWelcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Time:',
            date: new Date()
        };
    }

    // Lifecycle hooks

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID); // tear down timer
    }

    tick() {
        this.setState({ date: new Date() }); // run every second
    }

    render () {
        return (
            <Text text={this.state.message + ' ' + this.state.date.toLocaleTimeString()}
                  color='#DADADA'
                  position='-1.75 1 -3'/>
        );
    }
}