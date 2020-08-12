
import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity, Text } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const ListMoney = (props) => {
  const leftActionHandler = () => {
    return (
      <View style={styles.iconContainerL}>
        <Image style={styles.iconss} source={require('../../assets/Receive.png')} />
      </View>
    )
  }
  const rightActionHandler = () => {
    return (
      <View style={styles.iconContainerR}>
        <Image style={styles.iconss} source={require('../../assets/Send.png')} />
      </View>
    )
  }
    return (
      <Swipeable
        renderLeftActions={leftActionHandler}
        renderRightActions={rightActionHandler}
      >
        <View style={{...props.style}}>
              <TouchableOpacity>
              <View style={styles.listContainer}>
              <Image
                  style={styles.btc}
                  source={{
                    uri: props.item.icon,
                  }}
              />

                  <Text style={styles.nameUnit}>{props.item.text}</Text>
                  <View style={styles.money}>
                  <Text style={styles.top}>0.00000</Text>
                  <Text style={styles.bot}>$0.00</Text>
                  </View>
              </View>
          </TouchableOpacity>
          </View>
        </Swipeable>

    )
}

const styles = StyleSheet.create({

    listContainer: {
      flexDirection: 'row',
      shadowRadius: 8,
      elevation: 5,
      borderRadius: 10,
      backgroundColor: 'white',
      marginLeft: 30,
      marginRight: 30,
      marginTop: 5,
      paddingTop: 15,
      paddingLeft: 10,
      paddingBottom: 15,
      
    },
    btc: {
      width: 50,
      height: 50
    },
    nameUnit: {
      fontWeight: 'bold',
      marginLeft: 10,
      marginTop: 15
    },
    money: {
      marginLeft: 180,
      marginTop: 15
    },
    top: {
      fontWeight: 'bold',
    },
    bot: {
      color: '#AAAAAA',
      paddingLeft: 20
    },
    iconContainerL: {
      marginTop: 20,
      marginLeft: 30
    },
    iconContainerR: {
      marginTop: 20,
      marginRight: 20
    },
    iconss: {
      width: 60,
      height: 60
    }
  })
  
export default ListMoney;
