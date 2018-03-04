import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { AlcoholicIngredient } from '../ingredientsUpdate'
import { Checklist, AccordionListBooze } from './'
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
                        Choose A Booze
                    </Text>
                </View>
                <AccordionListBooze listItems={booze} addAnAvailbleBooze={this.addAnAvailbleBooze} />
                {console.log(this.props.availableBooze)}
                <View style={styles.container}>
                    <Text style={styles.contentText}
                        onPress={() => Actions.Mixers()}
                    >
                        Pick your Mixers
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
