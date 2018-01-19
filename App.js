import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Bar, SingleCocktail, AllCocktails } from './components/index'
import { Router, Scene } from 'react-native-router-flux'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      cocktails: [],
      AlcoholicIngredients: [],
    }
  }

  render() {
    return (
      <Router>
          <Scene key="root">
              <Scene
              key="Bar"
              component={Bar}
              title="The Bar"
              initial
              />
              <Scene
              key="SingleCocktail"
              component={SingleCocktail}
              title="SingleCocktail"
              />
              <Scene
              key="AllCocktails"
              component={AllCocktails}
              title="Cocktails"
              />
          </Scene>
      </Router>
  )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
