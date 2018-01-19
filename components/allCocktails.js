import React, { Component } from 'react'
import { StyleSheet, Text, View, ListView } from 'react-native'
import { Actions } from 'react-native-router-flux' 

const SingleCocktail = () => {
    return (
        <View>
            <Text
            onPress={() => Actions.SingleCocktail()} //key of we want to go to
            >
                Here's your one drink
            </Text>
        </View>
    )
}

export default SingleCocktail
