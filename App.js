import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Bar, SingleCocktail, AllCocktails, Mixers, SearchCocktails } from './components/index'
import { Router, Scene, Tabs } from 'react-native-router-flux'
import {Provider} from 'react-redux'
import store from './store'

const TabIcon = ({selected, title}) => {
  return(
    <Text style={{color: selected ? 'blue' : 'grey'}}>{title}</Text>
  )
}

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
      <Provider store={store}>
        <Router>
            <Scene key="root">
                {/*<Scene tabs={true} tabBarStyle={{backgroundColor: 'white'}} hideNavBar={true}>
                    <Scene key="mixer" title="Mixer" icon={TabIcon}> */}
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
                      <Scene
                      key="Mixers"
                      component={Mixers}
                      title="The Cabinet"
                      />
                  {/*</Scene>
                  <Scene key="Search" title="Search" icon={TabIcon} >
                      <Scene
                      key="Search"
                      component={SearchCocktails}
                      title="The Book"
                      />
                  </Scene>
                  </Scene>*/}
            </Scene>
        </Router>
      </Provider>
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
