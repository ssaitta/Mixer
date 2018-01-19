import React, { Component } from 'react'
import { StyleSheet, Text, View, ListView, Image, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { List, ListItem } from 'react-native-elements'
import { fetchCocktailThunk } from '../store'

class AllCocktails extends Component {
    componentWillMount() {
        if (this.props.availableBooze.length > 0){
            const promiseArray = []
            this.props.availableBooze.forEach((base) => {
                let promise = fetch(`http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${base}`)
                .then(response =>  response.json())
                .then((foundCocktails) => {
                    return foundCocktails.drinks
                })
                promiseArray.push(promise)
            })
            Promise.all(promiseArray)
            .then(resolvedArray => {
                let allCocktails = []
                if (resolvedArray.length === 1){
                    this.props.addCocktail(resolvedArray[0])
                }
                else {
                    resolvedArray.reduce((a, b) => {
                        allCocktails = a.concat(b)
                    })
                    this.props.addCocktail(allCocktails)
                }
            })
        }
    }


    render() {
        const { cocktails } = this.props
        return (
            this.props.availableBooze.length > 0 ?
            //YES YOU HAVE BOOZE
                <ScrollView >
                    <View style={styles.container}>
                        <Text style={styles.contentText}>
                            Here are some drinks you can make
                        </Text>
                    </View>
                    <List containerStyle={{marginTop: 0, padding: 0}}>
                        {
                            cocktails.map((drink, index) => (
                                <ListItem
                                roundAvatar
                                avatar={{uri:drink.strDrinkThumb}}
                                key={index}
                                title={drink.strDrink}
                                onPress={() => Actions.SingleCocktail({cocktailId: cocktails.idDrink})} //key of we want to go to
                                />
                            ))
                        }
                    </List>
                </ScrollView>


                :
                //NO YOU NEED TO GO BUY SOME BOOZE
                <View style={{
                    flex: 1,
                    backgroundColor: '#eee',
                }}>
                    <View style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgb(255,255,255)',
                    }} >
                        <Image style={styles.image} source={require('../assets/booze2.png')} />
                    </View>
                    <View style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        justifyContent: 'center',
                    }}
                    >
                        <Text style={styles.imageText} >
                            Looks like it's time to hit the liquor store
                    </Text>
                    </View>
                </View>
        )
    }
}

const mapDispatch = (dispatch) => {
    return {
        addCocktail(cocktailList){
            dispatch(fetchCocktailThunk(cocktailList))
        }
    }
}

const mapState = (state) => {
    return {
        availableBooze: state.availableBooze,
        availableMixers: state.availableMixers,
        cocktails: state.cocktails,
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
    imageText: {
        padding: 20,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '400',
        bottom: '40%',
    },
    image: {
        flex: 1,
        width: '100%',
        resizeMode: 'center',
        top: '5%',
        opacity: 0.8
    }
})


export default connect(mapState, mapDispatch)(AllCocktails)
