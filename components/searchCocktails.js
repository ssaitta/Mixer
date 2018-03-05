import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { AlcoholicIngredient } from '../ingredientsUpdate'
import { Checklist, AccordionListBooze } from './'
import { availableBooze } from '../store'


class SearchCocktails extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Text style={styles.contentText}>
                Search By Cocktail
            </Text>
        )
    }
}

const mapState = (state) => {
    return {
        availableBooze: state.availableBooze
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    contentText: {
        padding: 20,
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '400',
    }
})


export default connect(mapState)(SearchCocktails)
