import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import React from 'react'
import { View, Text,StyleSheet, KeyboardAvoidingView } from 'react-native';
import {Input,Button} from  'react-native-elements';

const RegisterScreen = ({navigation}) => {

   const [name,setName] = useState("")  
   const [Email,setEmail] = useState("")  
   const [password,setPassword] = useState("")  
   const [imageUrl,setImageUrl]= useState("")

   const Register=()=>{};   
    return (
       <KeyboardAvoidingView behavior="padding" style={styles.container}>
         <StatusBar style="light"></StatusBar>
        <Text h3 style ={{marginBottom:50}}>
         Create signal Account      
       </Text>  
         <View style={styles.inputContainer}>

           <Input 
           placeholder="FullName" 
            autofocus 
            type="text" 
           value={name}  
           onChangeText={(text)=>setName(text)}/>
           
           <Input 
           placeholder="Email" 
            autofocus type= 'text' 
           value={Email}  
           onChangeText={(text)=>setEmail(text)}/>
           
           <Input 
           placeholder="Password" 
           secureTextEntry
           autofocus 
           type = "text"
           value={password}  
           onChangeText={(text)=>setPassword(text)}/>
           
           <Input 
           placeholder="Profile Picture URL" 
            autofocus 
            type = "text" 
           value={imageUrl}  
           onChangeText={(text)=>setImageUrl(text)}
           onSubmitEditing={Register}
           />
           
         </View>
         
         <Button containerStyle={styles.button}  raised onPress={Register} title="Register"/>
      <view style={{height:100}}/>
       </KeyboardAvoidingView>
    )
}

export default RegisterScreen;
const styles = StyleSheet.create({

container:{

  flex:1,
  alignItems:"center",
  justifuContent:"center",
  padding:10,
  backgroundColor:"white",

},

button:{
width:200,
marginTop:10,
},

inputContainer:{

  width:300,

},
});
