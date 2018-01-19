import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native'
import { Actions } from 'react-native-router-flux' //this is how we actualy navigate between screens, how we know where we want to go is based on the sceen key
import { AlcoholicIngredient, nonAlcoholicIngredient} from '../ingredients'
import { Checklist, AccordionList} from './'

class Bar extends Component {
    constructor(props){
        super(props);
        this.state = {
          isLoading: true,
          cocktails: [],
          AlcoholicIngredients: AlcoholicIngredient
        }
      }

    render() {
        const booze = this.state.AlcoholicIngredients
        return (
            <ScrollView>
               <AccordionList booze={ booze } />
                <Text
                onPress={() => Actions.AllCocktails()} //key of we want to go to
                >
                   All the drinks!
                </Text>
            </ScrollView>
        )
    }
}

export default Bar
