import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'

const Cuatoi = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/cuatoi.png')}  style={{width: '100%', height: '100%'}}>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    },
    loginForm: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
})
export default Cuatoi;


