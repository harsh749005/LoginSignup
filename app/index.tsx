import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { router } from 'expo-router'
const index = () => {
    
  return (
    <SafeAreaProvider>
        <View style={styles.container}>
            <View></View>
            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.text}>Welcome to Study!</Text>
            <Text style={styles.subtext}>All Study at one place</Text>
            </View>
        <View style={{ width: '100%' ,justifyContent: 'center', alignItems: 'center'}}>
            <Pressable  style={styles.button} onPress={() => {}}>
                <Text style={{color:"black",fontWeight:"600",fontSize:18}}>Reigister</Text>
            </Pressable>
            <Pressable  style={styles.loginbutton} onPress={() => {
                router.push('./(auth)/Login');
            }}>
                <Text style={{color:"white",fontWeight:"600",fontSize:18}}>Login</Text>
            </Pressable>
        </View>
        </View>
    </SafeAreaProvider>
  )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "#181818ff",
        paddingVertical:50
    },
    text: {
        width:'80%',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 32,
        color: '#ffffff',
        fontWeight: '900',
    },
    subtext: {
        width:'80%',
        textAlign: 'center',
        fontSize: 18,
        color: '#ffffff',
        fontWeight: '400',
        marginTop: 10,
    },
    button: {
        width: '80%',
        height: 50,
        backgroundColor: '#ffffffff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginTop: 20,

    },
    loginbutton:{
        width: '80%',
        height: 50,
        backgroundColor: '#0c69f5ff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginTop: 20,
        
    }
})