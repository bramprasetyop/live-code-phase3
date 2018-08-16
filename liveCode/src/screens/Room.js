//import liraries
import React, { Component } from 'react';
import { Button,View, Text, StyleSheet } from 'react-native';

// create a component
class MainRoom extends Component {
    constructor(props){
        super(props)
        this.state ={
            random:0
        }
    }

    randomDice(){
        this.setState({
            random: Math.floor(Math.random()*6)
        })
    }

    render() {
        // return(
        //     <View style={styles.containers}>
        //     {
        //         this.state.number.map((num)=>{
        //         return(
        //             <View style={styles.container}>
        //                         <View style={{margin:5,width: 50, height: 50, backgroundColor: 'black'}}>
        //     <Text style={styles.text}>{num}</Text>
        //     </View>
        //             </View>
        //         )
        //     })
        // }
        // </View>
        // )
        console.log(this.state.random);

        return (
            <View style={styles.containers}>
            <View style={styles.container}>
            <View style={{margin:5,width: 50, height: 50, backgroundColor: 'black'}}>
            <Text style={styles.text}>21</Text>
            </View>
            <View style={{margin:5,width: 50, height: 50, backgroundColor: 'black'}}>
            <Text style={styles.text}>22</Text>
            </View>
            <View style={{margin:5,width: 50, height: 50, backgroundColor: 'black'}}>
            <Text style={styles.text}>23</Text>
            </View>
            <View style={{margin:5,width: 50, height: 50, backgroundColor: 'black'}}>
            <Text style={styles.text}>24</Text>
            </View>
            <View style={{margin:5,width: 50, height: 50, backgroundColor: 'black'}}>
            <Text style={styles.text}>25</Text>
            </View>
    
          </View>
          <View style={styles.container}>
            <View style={{margin:5,width: 50, height: 50, backgroundColor: 'black'}}>
            <Text style={styles.text}>20</Text>
            </View>
            <View style={{margin:5,width: 50, height: 50, backgroundColor: 'black'}}>
            <Text style={styles.text}>19</Text>
            </View>
            <View style={{margin:5,width: 50, height: 50, backgroundColor: 'black'}}>
            <Text style={styles.text}>18</Text>
            </View>
            <View style={{margin:5,width: 50, height: 50, backgroundColor: 'black'}}>
            <Text style={styles.text}>17</Text>
            </View>
            <View style={{margin:5,width: 50, height: 50, backgroundColor: 'black'}}>
            <Text style={styles.text}>16</Text>
            </View>
    
          </View>
          <View style={styles.container}>
            <View style={{margin:5,width: 50, height: 50, backgroundColor: 'black'}}>
            <Text style={styles.text}>11</Text>
            </View>
            <View style={{margin:5,width: 50, height: 50, backgroundColor: 'black'}}>
            <Text style={styles.text}>12</Text>
            </View>
            <View style={{margin:5,width: 50, height: 50, backgroundColor: 'black'}}>
            <Text style={styles.text}>13</Text>
            </View>
            <View style={{margin:5,width: 50, height: 50, backgroundColor: 'black'}}>
            <Text style={styles.text}>14</Text>
            </View>
            <View style={{margin:5,width: 50, height: 50, backgroundColor: 'black'}}>
            <Text style={styles.text}>15</Text>
            </View>
    
          </View>
          <View style={styles.container}>
            <View style={{margin:5,width: 50, height: 50, backgroundColor: 'black'}}>
            <Text style={styles.text}>10</Text>
            </View>
            <View style={{margin:5,width: 50, height: 50, backgroundColor: 'black'}}>
            <Text style={styles.text}>9</Text>
            </View>
            <View style={{margin:5,width: 50, height: 50, backgroundColor: 'black'}}>
            <Text style={styles.text}>8</Text>
            </View>
            <View style={{margin:5,width: 50, height: 50, backgroundColor: 'black'}}>
            <Text style={styles.text}>7</Text>
            </View>
            <View style={{margin:5,width: 50, height: 50, backgroundColor: 'black'}}>
            <Text style={styles.text}>6</Text>
            </View>
    
          </View>
          <View style={styles.container}>
            <View style={{margin:5,width: 50, height: 50, backgroundColor: 'black'}}>
            <Text style={styles.text}>1</Text>
            </View>
            <View style={{margin:5,width: 50, height: 50, backgroundColor: 'black'}}>
            <Text style={styles.text}>2</Text>
            </View>
            <View style={{margin:5,width: 50, height: 50, backgroundColor: 'black'}}>
            <Text style={styles.text}>3</Text>
            </View>
            <View style={{margin:5,width: 50, height: 50, backgroundColor: 'black'}}>
            <Text style={styles.text}>4</Text>
            </View>
            <View style={{margin:5,width: 50, height: 50, backgroundColor: 'black'}}>
            <Text style={styles.text}>5</Text>
            </View>
    
          </View>

          <Button
            onPress={this.randomDice.bind(this)}
            title="Let's Roll"
            color="#841584"
          />
            <Text style={styles.number}>{ this.state.random}</Text>
          </View>
          
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97efee',
        flexDirection: 'row'
        
    },
    containers: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97efee',
    },
    text:{
        color:'white',
        color:"white",
        marginTop:"auto",
        marginRight:"auto",
        marginLeft:"auto",
        marginBottom:"auto",
    },
    number:{
        fontSize:20
    }
});

//make this component available to the app
export default MainRoom;
