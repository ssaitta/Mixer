import React, { Component } from 'react'
import { StyleSheet, Text, View, ListView, ScrollView, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { List, ListItem } from 'react-native-elements'
import { booze } from '../ingredients'
import { fetchCocktailThunk, setCurrentCocktail, filterCockatils } from '../store'

class FilteredCocktails extends Component {

    render() {
        let { cocktails, availableBooze } = this.props
        let filteredCocktails = []
        if (cocktails.length > 0){
            filteredCocktails = cocktails.slice()
            cocktails.forEach((drink) => {
                // console.log("drink to test ", drink)
                boozyIngredients = drink.ingredientListA
                boozyIngredients.forEach(ingredient => {
                    //console.log("booze to test ", ingredient)
                    if( availableBooze.indexOf(ingredient) === -1 ){
                       //console.log("booze to reject", ingredient)
                        filteredCocktails.splice(filteredCocktails.indexOf(drink), 1)
                    }
                })
            })
        }
        return (
            (cocktails.length > 0) ?
            <ScrollView >
                    <View style={styles.container}>
                        <Text style={styles.contentText}>
                            Here are some drinks you can make
                        </Text>
                    </View>
                    <List containerStyle={{ marginTop: 0, padding: 0 }}>
                        {
                            filteredCocktails.map((drink, index) => (

                                <ListItem
                                    roundAvatar
                                    avatar={{ uri: drink.strDrinkThumb }}
                                    key={index}
                                    title={drink.strDrink}
                                    onPress={(evt) => {
                                        Actions.SingleCocktail({ cocktail: drink }) //key of we want to go to
                                    }
                                    }
                                />
                            ))
                        }
                    </List>
                </ScrollView>
                :
                    <View style={[styles.container, styles.horizontal]}>
                        <ActivityIndicator size="large" color="#0000ff" />
                        <Text style={styles.loadingText}>
                            Finding the perfect drinks
                        </Text>
                    </View>
        )
    }
}

// const mapDispatch = (dispatch) => {
//     return {
//         filterDownCocktails(cocktailObj){
//             dispatch(filterCockatils(cocktailObj))
//         }

//     }
// }

const mapState = (state) => {
    return {
        availableBooze: state.availableBooze,
        availableMixers: state.availableMixers,
        cocktails: state.cocktails,
        ingredients: state.ingredietns
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    contentText: {
        flex: 1,
        padding: 30,
        fontSize: 20,
        fontWeight: '400',
    },
    loadingText: {
        padding: 20,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '500',
        bottom: '40%',
    },
    horizontal: {
        justifyContent: 'space-around',
        padding: 10
    }
})


export default connect(mapState)(FilteredCocktails)
