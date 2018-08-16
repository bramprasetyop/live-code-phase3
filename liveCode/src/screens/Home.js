//import liraries
import React, { Component } from "react";
import { Button, View, Text, StyleSheet, TouchableOpacity } from "react-native";



// create a component
class Welcome extends Component {
    constructor(props){
        super(props)
    }

    letsPlay(){
        this.props.navigation.navigate('Main')
    }


  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.letsPlay.bind(this)}
        >
          <Text style={styles.text}>Let's Play</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97efee"
  },
  text:{
    color:"white",
    marginTop:"auto",
    marginRight:"auto",
    marginLeft:"auto",
    marginBottom:"auto",
},
  button: {
    marginTop: 60,
    borderWidth: 1,
    backgroundColor: "black",
    width: 100,
    height: 50,
    margin: 3,
    borderColor: "white",
    borderWidth: 4
  }
});

//make this component available to the app
export default Welcome;
