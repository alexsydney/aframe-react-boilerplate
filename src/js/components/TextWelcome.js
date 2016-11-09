import React from 'react';
import Text from './Text';

export class TextWelcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {welcome: 'Hello World!'};
    }

    render () {
        return (
            <Text
                text={this.state.welcome}
                color='#DADADA'
                position='-1.75 1 -3'/>
        );
    }
}