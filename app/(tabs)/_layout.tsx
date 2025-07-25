import { Tabs } from 'expo-router'
import React from 'react'

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen name="Profile" options={{ title: "Profile Page" }} />
        <Tabs.Screen name="Settings" options={{ title: "Settings Page" }} />

    </Tabs>
  )
}

export default _layout
