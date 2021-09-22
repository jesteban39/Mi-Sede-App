import React from 'react';
import { Provider } from 'react-redux'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from '../../redux'
import VenuesList from '../Venues/VenuesList'
import UpdateAspirant from '../Aspirant/UpdateAspirant';
import ShowAspirant from '../Aspirant/ShowAspirant';
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Sedes" component={VenuesList} />
          <Stack.Screen name="Aspirant" component={ShowAspirant} />
          <Stack.Screen name="Update" component={UpdateAspirant} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar/>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
