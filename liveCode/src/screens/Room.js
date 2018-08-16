//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class MainRoom extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>MainRoom</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97efee',
    },
});

//make this component available to the app
export default MainRoom;
