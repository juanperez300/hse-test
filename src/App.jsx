import React from 'react'
import Users from "../src/pages/users"
import AppProvider from './context/AppProvideer'
export default function App() {
  return (
    <AppProvider>
      <Users />
    </AppProvider>
   
  )
}
