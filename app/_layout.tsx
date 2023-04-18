import React from "react";
import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
  
export default function Layout() {
  return <Stack screenOptions={{
    headerShown: false
  }} />
}
