import React, { Component } from 'react';
import { CheckBox } from 'react-native-elements'
import { connect } from 'react-redux'
import { addToAvailableBooze, removeFromAvailableBooze } from '../store'

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
        let lowercaseItem = item.toLowerCase()

        return (
            <CheckBox
            key={lowercaseItem}
            title={lowercaseItem}
            checked={this.state.checked}
            onPress={() => this.setState({checked: !checked}, () => {
                return !checked ? this.props.addBooze(lowercaseItem) : this.props.removeBooze(lowercaseItem)
            })}
            />
        )
    }

}

const mapDispatch = (dispatch) => {
    return {
        addBooze(boozeStr){
            dispatch(addToAvailableBooze(boozeStr))
        },
        removeBooze(boozeStr){
            dispatch(removeFromAvailableBooze(boozeStr))
        }
    }
}

const mapState = (state) => {
    return {
        availableBooze: state.availableBooze
    }
}


export default connect(mapState, mapDispatch)(Checklist)
