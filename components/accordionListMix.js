import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Accordion from 'react-native-collapsible/Accordion'
import { ChecklistMixer } from './'

class AccordionList extends Component {


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
                return <ChecklistMixer item={ item } key={index}/>
                }
                )}
            </View>
        );
    }

    render() {
        const { listItems } = this.props
        const Sections = listItems;
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
      backgroundColor: 'rgba(179, 167, 205, 0.3)',
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
