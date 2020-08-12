import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';

const Guinhanhoidoai = (props) => {
    return (
        <View style={{...props.style}}>
     <View style={styles.actionContainer}>
      <TouchableOpacity>
        <Image
          style={styles.guidi}
          source={require('../../assets/guidi.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.nhan}
          source={require('../../assets/nhan.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.hoidoai}
          source={require('../../assets/hoidoai.png')}
        />
      </TouchableOpacity>           
    </View>            
        </View>
    )
}
const styles = StyleSheet.create({
    actionContainer: {
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: 'white',
        paddingTop: 15,
        paddingBottom: 15,
      },
      guidi: {
        width: 35,
        height: 45,
        marginRight: 70,
        marginLeft: 50
      },
      nhan: {
        marginTop: 5,
        width: 30,
        height: 38,
        marginRight: 70,
      },
      hoidoai: {
        width: 42,
        height: 40,
        marginTop: 3
      }
})
export default Guinhanhoidoai


