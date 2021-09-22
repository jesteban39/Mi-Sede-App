import React, { useEffect, useState } from 'react'
import {
  TextInput, View, FlatList, Text, Button
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import styles from './styles'
import { aspirant } from '../../@types'
import updateVenues from '../../redux/actions/updateVenues'

export default function UpdateAspirant() {
  const dispatch = useDispatch()
  const aspirant: aspirant = useSelector(({ aspirant }: { aspirant: aspirant }) => aspirant)
  const [user, serUser] = useState(aspirant)
  useEffect(() => {
    //dispatch(updateVenues(260121))
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.div} >
        <Text style={styles.text}>Documento*:</Text>
        <TextInput
          style={styles.input}
          onChangeText={() => { }}
          value={user.cc}
          placeholder="Numero de Documento"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.div} >
        <Text style={styles.text}>Nombre:</Text>
        <TextInput
          style={styles.input}
          onChangeText={() => { }}
          value={user.name}
          placeholder="Nombre"
        />
      </View>
      <View style={styles.div} >
        <Text style={styles.text}>E-Mail:</Text>
        <TextInput
          style={styles.input}
          onChangeText={() => { }}
          value={user.email}
          placeholder="Correo Electonico"
        />
      </View>
      <Button
        onPress={() => { }}
        title="Aceptar"
        color="#841584"
      />
    </View>
  );
}
