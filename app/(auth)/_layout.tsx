import { StyleSheet} from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack screenOptions={{
        headerShown: true,
        title: "",
        
        headerStyle:styles.header,
        headerTintColor:"white"
    }}>
        <Stack.Screen name='Login' />
    </Stack>
  )
}

export default _layout

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#181818ff",
    elevation: 0,        // Android
    shadowOpacity: 0,    // iOS
    borderBottomWidth: 0
  },
});