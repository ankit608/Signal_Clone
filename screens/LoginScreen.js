import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import React from 'react'
import { View, Text,StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Button,Input,Image } from 'react-native-elements';

const LoginScreen = ({navigation}) => {
     const [email,setEmail] = useState("");
     const [password,setPassword]  = useState("");

     const signIn = () =>{}
    
    return (
        <KeyboardAvoidingView style={styles.container}>
            <StatusBar style="light"/>
            <Image source={{uri:"https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",}} 
             style={{width:200,height:200}} 
            />
           
               <View style={styles.inputContainer}>
                 <Input placeholder="email" autoFocus type ="Email" value= {email} onChangeText={Text=>setEmail(Text)}/>
                  <Input placeholder="password" secureTextEntry type = "password" value={password} onChangeText={(text)=>setPassword(text)}/>
                    
               </View>
           <Button containerStyle={styles.button} onPress={signIn} title='Login'/>
           <Button  onPress={()=>navigation.navigate("Register")} containerStyle={styles.button} type="outLine" title="Register"/>
           <View style={{height:100}}/>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen
const styles=  StyleSheet.create({
   
   inputContainer:{
       width:300,
   },
   button:{
     width:200,
     marginTop:10,



   },
   container:{
     flex:1,
     alignItems:"center",   
     justifyContent:"center",
     padding:10,

     
   },

});