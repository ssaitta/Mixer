import React, { Component } from 'react'
import { StyleSheet, Text, ScrollView, View, ActivityIndicator } from 'react-native'
import { Tile } from 'react-native-elements'
import { connect } from 'react-redux'
import { fetchOneCocktailThunk } from '../store'

class SingleCocktail extends Component {

    componentDidMount() {
        this.props.fetchCurrentcocktail(this.props.cocktail.idDrink)
        
    }

    render() {
        let { currentCocktail } = this.props
        let ingredientsList = currentCocktail.ingredientList
        let ingredientMeasure = currentCocktail.measurementList
        let directions = currentCocktail.directions
        return (
            (Object.keys(currentCocktail).length > 0) ?
            <View style={{backgroundColor: 'white'}}>
                <ScrollView >
                    <Tile
                        imageSrc={{ uri: currentCocktail.strDrinkThumb }}
                        title={currentCocktail.strDrink}
                        contentContainerStyle={{ height: 40 }}
                    >
                        <Text style={styles.Tile}>{currentCocktail.strGlass}</Text>
                    </Tile>
                    <ScrollView style={{ 
                        top: 40
                    }}>  
                    <View style={{flex: 1}}>
                        <View style={styles.ingredientList}>
                        {ingredientsList.map((ingredient, index) => {
                            return (
                                <View style={{flex:1, flexDirection: 'row'}} key={index}>
                                    <Text style={styles.ingredientMeasure}>
                                        {ingredientMeasure[index]}
                                    </Text>
                                    <Text style={styles.ingredientItem}>
                                        {ingredient}
                                    </Text>
                                </View>
                            )
                        })}
                        </View>
                        
                        <View style={styles.container}>
                                <Text style={styles.directionsText}>
                                {directions}
                                </Text>
                        </View>
                        </View>
                    </ScrollView>
                    </ScrollView>
                </View>
            :
            <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text style={styles.loadingText}>
                    Mixing up your drink
                </Text>
            </View>
            )
        }
}

const mapDispatch = (dispatch) => {
    return {
        fetchCurrentcocktail(cocktailId) {
            dispatch(fetchOneCocktailThunk(cocktailId))
        }
    }
}

const mapState = (state) => {
    return {
        cocktails: state.cocktails,
        ingredients: state.ingredietns,
        currentCocktail: state.currentCocktail
    }
}

const styles = StyleSheet.create({
    container: {
        top: 0,
        height: 350,
    },
    Tile: {
        textAlign: 'left',     
    },
    ingredientList: {
        flex: 1,
        top: 0,
        backgroundColor: 'rgba(218,240,239,1)',
        justifyContent: 'flex-start',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
    },
    ingredientItem: {
        width: 150,
        padding: 5,
        flexWrap: 'wrap',
        fontSize: 20,
        fontWeight: '400',
        top: 0,
    },
    ingredientMeasure: {
        padding: 5,
        width: 150,
        flexWrap: 'wrap',
        fontSize: 20,
        fontWeight: '400',
        top: 0,
        bottom: 100,
    },
    directionsText: {
        backgroundColor: 'rgba(218,240,239,1)',
        flex: 1,
        padding: 20,
        fontSize: 20,
        fontWeight: '300',
    }
})

export default connect(mapState, mapDispatch)(SingleCocktail)
