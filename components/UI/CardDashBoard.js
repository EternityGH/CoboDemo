
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons'; 

const CardDashBoard = (props) => {
    return (
    <View style={{...props.style}}> 
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#713FFF', '#6665FF', '#5E84FF']} style={styles.linearGradient}>
        <View style={styles.top}>
          <Text style={styles.money}>$30.00</Text>
          <View style={{marginTop: 20, marginLeft: 220}}>
            <Entypo name="eye" color="#A798FB" size={24} />
          </View>
        
        </View>
        <View style="midtop">
          <Text style={styles.btc}>1.0005 BTC</Text>
        </View>
        <View style={styles.midbot}>
          <Text style={styles.titleMoney}>Tài sản khi khả dụng</Text>
          <Text style={styles.titleMoney}>Tài sản khoá</Text>
          <Text style={styles.titleMoney}>Nợ ></Text>
        </View>
        <View style={styles.bot}>
          <Text style={styles.tskkd}>$0.00</Text>
          <Text style={styles.tsk}>$0.00</Text>
          <Text style={styles.n}>$0.00</Text>
          
        </View>
        </LinearGradient>
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
    card:{
      width: 370,
      height: 200,
    },
    linearGradient: {
      shadowColor: 'black',
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 5,
      borderRadius: 10,
      width: 370,
      height: 180,
    },
    money: {
      color: 'white',
      fontSize: 25,
      fontWeight: 'bold',
      marginTop: 20,
      marginLeft: 20
    },
    btc: {
      marginTop: 3,
      marginLeft: 20,
      fontWeight: 'bold',
      color: '#A798FB'
    },
    top:{
      flexDirection: 'row',
    },
    midbot: {
      flexDirection: 'row',
    },
    bot: {
      flexDirection: 'row',
    },
    titleMoney: {
      marginTop: 40,
      fontWeight: 'bold',
      color: '#A798FB',
      marginLeft: 20
    },
    tskkd: {
      marginTop: 3,
      color: 'white',
      fontWeight: 'bold',
      marginLeft: 20
    },
    tsk: {
      marginTop: 3,
      color: 'white',
      fontWeight: 'bold',
      marginLeft: 120
    },
    n: {
      marginTop: 3,
      color: 'white',
      fontWeight: 'bold',
      marginLeft: 60
    }
    
  });

export default CardDashBoard;


