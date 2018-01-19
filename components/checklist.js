import React, { Component } from 'react';
import { CheckBox } from 'react-native-elements'
import { connect } from 'react-redux'
import store, { addBoozeThunk, removeBoozeThunk } from '../store'

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
            onPress={() => this.setState({checked: !checked}, () => {
                return !checked ? this.props.addBooze(item) : this.props.removeBooze(item)
            })}
            />
        )
    }

}

const mapDispatch = (dispatch) => {
    return {
        addBooze(boozeStr){
            dispatch(addBoozeThunk(boozeStr))
        },
        removeBooze(boozeStr){
            dispatch(removeBoozeThunk(boozeStr))
        }
    }
}

const mapState = (state) => {
    return {
        availableBooze: state.availableBooze
    }
}


export default connect(mapState, mapDispatch)(Checklist)
