import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { AlcoholicIngredient } from '../ingredients'
import { Checklist, AccordionList } from './'
import { availableBooze } from '../store'


class Bar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AlcoholicIngredients: AlcoholicIngredient
        }
    }

    render() {
        const booze = this.state.AlcoholicIngredients
        let { availableBooze } = this.state
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.contentText}>
                        Choose A Base
                    </Text>
                </View>
                <AccordionList booze={booze} addAnAvailbleBooze={this.addAnAvailbleBooze} />
                {console.log(this.props.availableBooze)}
                <View style={styles.container}>
                    <Text style={styles.contentText}
                        onPress={() => Actions.AllCocktails()}
                    >
                        Mix A Drink
                    </Text>
                </View>
            </ScrollView>
        )
    }
}

const mapState = (state) => {
    return {
        availableBooze: state.availableBooze
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    contentText: {
        padding: 20,
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '400',
    }
})


export default connect(mapState)(Bar)
