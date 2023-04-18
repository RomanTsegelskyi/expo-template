import { BarCodeScanner } from 'expo-barcode-scanner';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link, useRouter } from 'expo-router';
import { useLoginMutation } from '../generated/graphql';
import { graphQLClient } from '../client';

const BLOCKULA_ID = 'ckrg9j2e804820wjnj18irrfn'

export default function App() {
  const [events, setEvents] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const { mutateAsync: login } = useLoginMutation(graphQLClient)

  const onLogin = async () => {
    const data = await login({
      identifier: 'superadmin',
      password: 'backdoor'
    })
    console.log(data.login.token)
    graphQLClient.setHeader("Authorization", data.login.token)
    setLoggedIn(true)
  }

  const getCommunity = async () => {
    // const data = await graphQLClient.request(query, {
    //   communityId: BLOCKULA_ID
    // })
    // setEvents(data.community.events)
  }


  
  return (
    <View style={styles.container}>
      <Button title={'Login'} onPress={() => void onLogin()} />
      {loggedIn && <Button title={'Get data'} onPress={() => void getCommunity()} />}
      {loggedIn && events.map((event) => (
        <Text key={event.id}>{event.name}</Text>
      ))}
      <Link href="/communities">Go to Details</Link>
    </View>
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
