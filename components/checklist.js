import React, { Component } from 'react';
import { CheckBox } from 'react-native-elements'
//import { View, Text } from 'react-native'

class Checklist extends Component {
    constructor(props){
        super(props);
        this.state = {
            checked: false
        }
    }

    render(){
        const { item } = this.props
        const { checked } = this.state

        return (
            <CheckBox 
            key={item}
            title={item}
            checked={this.state.checked}
            onPress={() => this.setState({checked: !checked})}
            />
        )
    }

}

export default Checklist