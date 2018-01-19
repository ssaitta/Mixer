import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Accordion from 'react-native-collapsible/Accordion'
import { Checklist } from './'

class AccordionList extends Component {
    constructor(props){
        super(props);
        this.state = {
            category: ''
        }
    }

    header(section) {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{section.parent}</Text>
            </View>
        );
    }

    content(section) {
        return (
            <View style={styles.content}>
                {section.children.map((item, index) => {
                return <Checklist item={ item } key={index}/>
                }
                )}
            </View>
        );
    }


    render() {
        const { booze } = this.props
        const { category } = this.state
        const Sections = booze;
        return (
            <Accordion
               sections={Sections}
               renderHeader={this.header}
               renderContent={this.content}
            />
        )
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#F5FCFF',
    },
    header: {
      backgroundColor: 'rgb(220,241,240)',
      padding: 10,
    },
    headerText: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: '500',
    },
    content: {
      padding: 20,
      backgroundColor: '#fff',
    },
  })

export default AccordionList
