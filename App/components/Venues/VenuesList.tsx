import React, { useEffect, useState } from 'react'
import {
  SafeAreaView, View, FlatList, Text, TouchableOpacity
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import styles from './styles'
import { item } from '../../@types'
import updateVenues from '../../redux/actions/updateVenues'

export default function VenuesList() {
  const dispatch = useDispatch()
  const venuesList = useSelector(({ venuesList }: { venuesList: item[] }) => venuesList)
  useEffect(() => {
    dispatch(updateVenues(260121))
  },[])

  const renderItem = ({ item }: { item: item }) => (
    <TouchableOpacity onPress={() => { }} key={item.id} style={styles.item}>
      <Text style={styles.title}>
        {`Juzgado ${item.office}° ${item.appellation} de ${item.town}`}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.list}>
      <FlatList
        data={venuesList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
