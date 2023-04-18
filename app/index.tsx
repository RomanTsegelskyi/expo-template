import { BarCodeScanner } from 'expo-barcode-scanner';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
// import { request, gql, GraphQLClient } from 'graphql-request'
import React from 'react';
import { useRouter } from 'expo-router';

const API_ENDPOINT = "https://qg37bb3opc.execute-api.eu-central-1.amazonaws.com/test/graphql"
const BLOCKULA_ID = 'ckrg9j2e804820wjnj18irrfn'

export default function App() {
  const [events, setEvents] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const router = useRouter()
  // const graphQLClient = new GraphQLClient(API_ENDPOINT)

  const login = async () => {
    void router.push('/communities')
    // const data = await graphQLClient.request(mutation, {
    //   identifier: 'superadmin',
    //   password: 'backdoor'
    // })
    // console.log(data.login.token)
    // graphQLClient.setHeader("Authorization", data.login.token)
    // setLoggedIn(true)
  }

  const getCommunity = async () => {
    // const data = await graphQLClient.request(query, {
    //   communityId: BLOCKULA_ID
    // })
    // setEvents(data.community.events)
  }


  
  return (
    <View style={styles.container}>
      <Button title={'Login'} onPress={() => void login()} />
      {loggedIn && <Button title={'Get data'} onPress={() => void getCommunity()} />}
      {loggedIn && events.map((event) => (
        <Text key={event.id}>{event.name}</Text>
      ))}
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
