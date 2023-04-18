import { BarCodeScanner } from "expo-barcode-scanner"
import { Link, useRouter } from "expo-router"
import { useEffect, useState } from "react"
import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"

import { graphQLClient } from "../../client"
import { useAuth } from "../../context/auth"
import { useLoginMutation } from "../../generated/graphql"

const BLOCKULA_ID = "ckrg9j2e804820wjnj18irrfn"

export default function App() {
  const [events, setEvents] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const { mutateAsync: login } = useLoginMutation(graphQLClient)
  const router = useRouter()
  const { user, signIn } = useAuth()

  const onLogin = async () => {
    const data = await login({
      identifier: "superadmin",
      password: "backdoor",
    })
    console.log(data.login.token)
    graphQLClient.setHeader("Authorization", data.login.token)
    signIn(data.login.user)
    void router.push("/communities")
  }

  return (
    <View style={styles.container}>
      <Button onPress={() => void onLogin()} title={"Login"} />
      {loggedIn && events.map((event) => <Text key={event.id}>{event.name}</Text>)}
      {user?.username && <Text>{user.username}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
