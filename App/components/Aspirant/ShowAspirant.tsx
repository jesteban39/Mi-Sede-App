import React, { useEffect, useState } from 'react'
import {
  TextInput, View, FlatList, Text, Button
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import styles from './styles'
import { aspirant } from '../../@types'
import updateVenues from '../../redux/actions/updateVenues'

export default function ShowAspirant() {
  const dispatch = useDispatch()
  const aspirant: aspirant = useSelector(({ aspirant }: { aspirant: aspirant }) => aspirant)
  useEffect(() => {
    //dispatch(updateVenues(260121))
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{` ${aspirant.name}`}</Text>  
      <Text style={styles.text}>{` ${aspirant.cc}`}</Text>  
      <Text style={styles.text}>{` ${aspirant.email}`}</Text>  
      <Text style={styles.text}>{` ${aspirant.score}`}</Text>
    </View>
  );
}
