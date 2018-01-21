import React, { Component } from 'react'
import { StyleSheet, Text, View, ListView, Image, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { FilteredCocktails } from './'
import { fetchCocktailThunk } from '../store'

class AllCocktails extends Component {

    componentDidMount() {
        const available = this.props.availableBooze
        this.props.fetchCocktails(available)
    }

    render() {
        const { cocktails } = this.props
        return (
            this.props.availableBooze.length > 0 ?
                //YES YOU HAVE BOOZE
                <FilteredCocktails />
                //<FilteringDown />
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

const styles = StyleSheet.create({
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
