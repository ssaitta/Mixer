import React, { Component } from 'react'
import { StyleSheet, Text, View, ListView, ScrollView, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { List, ListItem } from 'react-native-elements'
import { fetchCocktailThunk, setCurrentCocktail, filterCockatils } from '../store'

class FilteredCocktails extends Component {
    constructor(props){
    super(props);
    this.state = {
        filtered: false
    }
}

    // shouldComponentUpdate(nextProps, nextState){
    //     if(nextProps.filtered !== nextState.filtered){
    //         return false
    //     }
    //     else{
    //         return true
    //     }
    // }

    componentDidUpdate() {
        console.log("THIS STATE FILTERED ", this.state.filtered)
        if( this.props.cocktails.length > 0 && this.state.filtered === false){
            this.props.cocktails.forEach( drink => {
                this.props.filterDownCocktails(drink)
            })
            this.setState({filtered: true})
        }
    }


    render() {
        const { cocktails, availableBooze } = this.props
        //console.log("COCKTAILS: ", cocktails)
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
                            cocktails.map((drink, index) => (

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
                   //(this.state.NoDrinksFound) ?
                    // <View style={[styles.container, styles.horizontal]}>
                    //     <Text style={styles.loadingText}>
                    //         Sorry, no drinks were found with only those ingredients
                    //     </Text>
                    // </View>
                    //:
                    <View style={[styles.container, styles.horizontal]}>
                        <ActivityIndicator size="large" color="#0000ff" />
                        <Text style={styles.loadingText}>
                            Finding the perfect drinks
                        </Text>
                    </View>
        )
    }
}

const mapDispatch = (dispatch) => {
    return {
        // fetchCocktails(drink) {
        //     dispatch(fetchCocktailThunk(drink))
        // },
        // makeCurrentCocktail(evt){
        //     dispatch(setCurrentCocktail(e))
        // },
        filterDownCocktails(cocktailObj){
            dispatch(filterCockatils(cocktailObj))
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


export default connect(mapState, mapDispatch)(FilteredCocktails)
