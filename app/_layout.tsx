<<<<<<< HEAD
import React from "react";
import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()
  
export default function Layout() {
  return <QueryClientProvider client={queryClient}>
    <Stack screenOptions={{
    headerShown: false
  }} /></QueryClientProvider>
=======
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Stack } from "expo-router"
import React, { useEffect } from "react"

import { AuthProvider } from "../context/auth"

const queryClient = new QueryClient()

const AppLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </AuthProvider>
    </QueryClientProvider>
  )
>>>>>>> 62297aa (Tooling: eslint, prettier, etc)
}
