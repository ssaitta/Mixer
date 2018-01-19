import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { AlcoholicIngredient } from '../ingredients'
import { Checklist, AccordionList} from './'
import { availableBooze } from '../store'


class Bar extends Component {
    constructor(props){
        super(props);
        this.state = {
          AlcoholicIngredients: AlcoholicIngredient
        }
      }

    render() {
        const booze = this.state.AlcoholicIngredients
        let { availableBooze } = this.state
        return (
            <ScrollView>
               <AccordionList booze={ booze } addAnAvailbleBooze={this.addAnAvailbleBooze} />
               {console.log(this.props.availableBooze)} 
               <Text
                onPress={() => Actions.AllCocktails()} 
                >
                   All the drinks!
                </Text>
            </ScrollView>
        )
    }
}

const mapState = (state) => {
    return {
        availableBooze: state.availableBooze
    }
}

export default connect(mapState)(Bar)
