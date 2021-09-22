import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';

import VenuesList from '../Venues/VenuesList'
import UpdateAspirant from '../Aspirant/UpdateAspirant';
import ShowAspirant from '../Aspirant/ShowAspirant';

const Tab = createBottomTabNavigator()

const icon = (name: string) => {
  return {
    tabBarIcon: ({ color, size }: any) => (
      <MaterialCommunityIcons name={name} color={color} size={size} />
    )
  }
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Sedes" component={VenuesList}
          options={icon('list-circle-outline')}
        />
        <Tab.Screen name="Perfil" component={ShowAspirant}
          options={icon('person-outline')}
        />
        <Tab.Screen name="Editar" component={UpdateAspirant}
          options={icon('person-add-outline')}
        />
      </Tab.Navigator>
      <StatusBar />
    </NavigationContainer>
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
