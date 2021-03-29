import React from "react";
import {View, TouchableOpacity, TextInput, Alert} from "react-native";
import db from '../config';
import firebase from 'firebase';


export default class SignupLogin extends React{
    constructor(){
        super();
        this.state = {
            emailId: '',
            password: '',
        }
    }

    userSignUp = (emailId, password) =>{
          firebase.auth().createUserWithEmailAndPassword(emailId, password)
          .then((response)=>{
              return Alert.alert("User Added Successfully")
          })
          .catch((error)=> {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage)
          });
      }

      userLogin = (emailId, password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(()=>{
            return Alert.alert("Successfully Login")
        })
        .catch((error)=> {
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage)
        })
      }

    render(){
        return(
            <View>
                <TextInput
                style = {styles.loginBox}
                placeholder = "Enter email address"
                keyboardType = 'email-address'
                onChangeText = {(text) => {
                    this.setState({
                        email: text
                    })
                }}
                />
        
                <TextInput
                 style = {styles.loginBox}
                 placeholder = "Enter password"
                 onChangeText = {(text) => {
                     this.setState({
                         password: text
                     })
                 }}
                 />

                 <TouchableOpacity
                    style = {styles.signupButton}
                    onPress = {()=>{
                        this.userLogin(this.state.emailId, this.state.password)
                    }}>
                        <Text style={styles.buttonText}>Login</Text>

                 </TouchableOpacity>

                 <TouchableOpacity
                    style={styles.button}
                    onPress={()=>{
                        this.userSignUp(this.state.emailId, this.state.password)
                    }}
                    >
                    <Text style={styles.buttonText}>SignUp</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
