import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from "./screens/LoginPage"
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
       
       
        {/* <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen name="Profile" options={{title:"Profile"}} component={Profile} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;