import React, { Component } from 'react'
import { StyleSheet, Text, View, ListView, Image, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { FilteredCocktails, FilteringDown } from './'
import { fetchCocktailThunk } from '../store'

class Filtering extends Component {



}

const mapDispatch = (dispatch) => {
    return {
        fetchCocktails (booze){
            dispatch(fetchCocktailThunk(booze))
        }
    }
}

const mapState = (state) => {
    return {
        availableBooze: state.availableBooze,
        availableMixers: state.availableMixers,
        cocktails: state.cocktails
    }
}

export default connect(mapState, mapDispatch)(Filtering)