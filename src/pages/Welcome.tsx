
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen'

export default function WelcomeScreen (props: any) {

    let timer: any = null
    useEffect(() => {
        SplashScreen.hide()
        timer = setTimeout(() => {
            
            props.navigation.navigate('Home')
          }, 300)
        return function cleanup() {
            timer && clearTimeout(timer)
        }
    })

    return null
    // return (
    //     <View style={styles.container}>
    //         <Text style={styles.title}>Welcome</Text>
    //     </View>
    // );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
