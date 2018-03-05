import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { nonAlcoholicIngredient } from '../ingredientsUpdate'
import { Checklist, AccordionListMix } from './'
import { availableMixers } from '../store'


class Mixers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nonAlcoholicIngredient: nonAlcoholicIngredient
        }
    }

    render() {
        const mixers = this.state.nonAlcoholicIngredient
        let { availableMixers } = this.state
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.contentText}>
                        Choose Some Mixers
                    </Text>
                </View>
                <AccordionListMix listItems={mixers} addToAvailableMixer={this.addToAvailableMixer} />
                {console.log(this.props.availableMixers)}
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
        availableMixers: state.availableMixers
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


export default connect(mapState)(Mixers)