import React, { Component } from 'react';
import { CheckBox } from 'react-native-elements'
import { connect } from 'react-redux'
import { addToAvailableMixer, removeFromAvailableMixer } from '../store'

class ChecklistMix extends Component {
    constructor(props){
        super(props);
        this.state = {
            checked: false
        }
    }
    
    render(){
        const { item } = this.props
        const { checked } = this.state
        let lowercaseItem = item.toLowerCase()

        return (
            <CheckBox
            key={lowercaseItem}
            title={lowercaseItem}
            checked={this.state.checked}
            onPress={() => this.setState({checked: !checked}, () => {
                return !checked ? this.props.addMixer(lowercaseItem) : this.props.removeMixer(lowercaseItem)
            })}
            />
        )
    }

}

const mapDispatch = (dispatch) => {
    return {
        addMixer(mixerStr){
            dispatch(addToAvailableMixer(mixerStr))
        },
        removeMixer(mixerStr){
            dispatch(removeFromAvailableMixer(mixerStr))
        }
    }
}

const mapState = (state) => {
    return {
        availableMixers: state.availableMixers
    }
}


export default connect(mapState, mapDispatch)(ChecklistMix)
