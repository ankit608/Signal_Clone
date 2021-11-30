
import "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

const  Stack = createStackNavigator();
const   GlobalScreenOptions = {
headerStyle: {backgroundColor: "#2C6BED"},
headerTitleStyle:{color:"White"},
headerTintColor:"white",


}
export default function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator> 
      <Stack.Screen screenOptions={{GlobalScreenOptions}} name="Login" component={LoginScreen} />
      <Stack.Screen screenOptions={{GlobalScreenOptions}} name="Register" component={RegisterScreen}/>
      </Stack.Navigator>
     </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
