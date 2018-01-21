import React, { Component } from 'react'
import { StyleSheet, Text, ScrollView, View, FlatList } from 'react-native'
import { Tile } from 'react-native-elements'
import { connect } from 'react-redux'
import { fetchOneCocktailThunk } from '../store'

class SingleCocktail extends Component {

    componentDidMount() {
        this.props.fetchCurrentcocktail(this.props.cocktail.idDrink)
    }

    render() {
        const { currentCocktail } = this.props
        let ingredentList = [], ingredientMeasure = [], directions = currentCocktail.strInstructions
        for (let i = 1; i < 16; i++) {
            let ingredent = `strIngredient${i}`
            if (typeof (currentCocktail[ingredent]) === 'string' && currentCocktail[ingredent].length > 0) {
                ingredentList.push(currentCocktail[ingredent])
            }
        }
        for (let j = 1; j <= ingredentList.length; j++) {
            let measure = `strMeasure${j}`
            ingredientMeasure.push(currentCocktail[measure])
        }
        const imageURL = currentCocktail.strDrinkThumb
        return (
            <View style={{backgroundColor: 'white'}}>
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
                    {ingredentList.map((ingredient, index) => {
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
        height: 650,
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
