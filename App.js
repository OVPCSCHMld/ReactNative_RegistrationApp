import React, { Component } from 'react';  
import { Alert, AppRegistry, Button, StyleSheet, View, Image, TextInput, Text, Linking} from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ButtonBasics extends Component {  
    onPressButton() {  
        Alert.alert('You clicked the button!')  
    }  

   handlePassword = (text) => {
      this.setState({ password: text })
   }

    render() {  
        return (  
 

            <View style={styles.Container}>  

                <View style={styles.AppBar1}>
                   <Text style={styles.AppBar2}>React Native Tutorial</Text>
                </View>

                <View style={styles.stretch1}>  
                   <Image
                       style={styles.stretch2}
                               source={require('./images/CuriosityRover.jpg')}
                    /> 
                </View> 

                <View style={styles.AppBar1}>
                   <Text style={styles.AppBar2}>Proxima b Arrival Registration</Text>
                </View>
                
                <View >  
                <TextInput
                   style={styles.input} 
                   placeholder="ID"
                   keyboardType="numeric"
                   onChangeText = {this.handlePassword}
                />
                </View> 
                
                 <View >  
                <TextInput
                   style={styles.input} 
                   placeholder="usename"
                   keyboardType="numeric"
                   onChangeText = {this.handlePassword}
                />
                </View> 
                 <View >  
                <TextInput
                   style={styles.input} 
                   placeholder="Password"
                   keyboardType="numeric"
                   onChangeText = {this.handlePassword}
                />
                </View> 

                <View style={styles.buttonContainer}>  
                    <Button  
                        onPress={this.onPressButton}  
                        title="Log In"  
                        color="#009933"  
                    />  
                </View> 


                <View style={styles.AppBar1}>
                   <Text style={styles.AppBar2}>Forgot Password?</Text>
                </View>


                <View style={styles.AppBar1}>
                   <Text style={styles.AppBar2}>New USer? Sign Up</Text>
                </View>



                <View style={styles.Iconn}>
                   <Icon name="instagram" size={80} color="#bf1313" />
                   <Icon name="youtube" size={80} color="#bf1313" />  
                   <Icon name="twitter" size={80} color="#bf1313" 
                    //  onPress={() => alert('Login with Facebook')}
                        onPress={() => Linking.openURL('https://www.twitter.com')} 
                   />    
                   {/* icons: instagram youtube google  facebook twitter  */}
                </View>

            </View>  
        );  
    }  
}  
  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center',  
    },  
    buttonContainer: {  
        margin: 20  
    },  
    multiButtonContainer: {  
        margin: 20,  
        flexDirection: 'row',  
        justifyContent: 'space-between'  
    }  ,
        stretch: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 700,
        height: 200,
        margin: 10,
        resizeMode: 'stretch',
    },
    stretch1: {
        justifyContent: 'center',
        alignItems: 'center',
    },
        stretch2: {
        width: 700,
        height: 200,
        margin: 10,
        resizeMode: 'stretch',
    },
      input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    },
        AppBar1: {
	//		 flex: 1,
    appen: 1,
        justifyContent: 'center',
     //  alignItems: 'center',
		//textcolor: 'red',
      //  alignItems:'center',
       // justifyContent:'center',
		backgroundColor: '#ecf0f1',
		//color: 'red', 
		//fontSize: 26 ,
    },
    AppBar2: {


    flex: 1,
    margin: 5,
    padding: 1,
        alignItems: 'center',
    fontWeights: 'bold',
     justifyContent: 'center',

    fontSize: 15,
   // backgroundColor: 'pink',
    width: 600,
    height: 400,
    },
      Iconn: {
        margin: 20,  
        flexDirection: 'row',  
        justifyContent: 'space-between' , 
      },
})  
