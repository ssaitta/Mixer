import React, { Component } from 'react'
import { StyleSheet, Text, View, ListView, Image, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { List, ListItem } from 'react-native-elements'
import { fetchCocktailThunk } from '../store'

class FilteredCocktails extends Component {


    render() {
        // console.log("INSIDE THE FILTERED COCKTAILS" , this.props)
         const { cocktails, availableBooze } = this.props
         
         // if (cocktails.length>0){
        //         this.props.fetchIngredients(cocktails[0])
        //     }
        console.log("ALL COCKTAILS ",this.props.cocktails)
        return (
            (cocktails.length > 0) ?
            <ScrollView >
                    <View style={styles.container}>
                        <Text style={styles.contentText}>
                            Here are some drinks you can make
                        </Text>
                    </View>
                    <List containerStyle={{marginTop: 0, padding: 0}}>
                        {
                            cocktails.map((drink, index) => (
                                //drink.strDrinkThumb = drink.strDrinkThumb || `http://www.thecocktaildb.com/images/ingredients/ice-Small.png`
                                <ListItem
                                roundAvatar
                                avatar={{uri: drink.strDrinkThumb}}
                                key={index}
                                title={drink.strDrink}
                                onPress={() => Actions.SingleCocktail({cocktailId: cocktails.idDrink})} //key of we want to go to
                                />
                            ))
                        }
                    </List>
            </ScrollView>
                :
                    <Text>
                    This is a temporary loading screen
                    </Text>
        )
    }
}

const mapDispatch = (dispatch) => {
    return {
        fetchCocktails(drink){
            dispatch(fetchCocktailThunk(drink))
        }
    }
}

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
    // imageText: {
    //     padding: 20,
    //     textAlign: 'center',
    //     fontSize: 20,
    //     fontWeight: '400',
    //     bottom: '40%',
    // },
    // image: {
    //     flex: 1,
    //     width: '100%',
    //     resizeMode: 'center',
    //     top: '5%',
    //     opacity: 0.8
    // }
})


export default connect(mapState, mapDispatch)(FilteredCocktails)
