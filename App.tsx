import React from 'react';
// import Password from './src/Components/Password';
// import PasswordGene from './Components/PasswordGene';

// Navigation

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screen

import Home from './src/screen/home';
import Details from './src/screen/details';

export type RootStackParamList = {
  Home: undefined;
  Details: {product: undefined};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Trending Products'}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{title: 'Details Products'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
