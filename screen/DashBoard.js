
import React, {useState} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import CardDashBoard from '../components/UI/CardDashBoard';
import WHeader from '../components/UI/WHeader';
import Guinhanhoidoai from '../components/UI/Guinhanhoidoai';
import ListMoney from '../components/UI/ListMoney';

const DashBoard = () => {
  const [list, setList] = useState([
    {text: 'BTC',  icon: '/Users/xijiawei/DemoCobo/assets/BTC.png', key: '1'},
    {text: 'ETH', icon: '/Users/xijiawei/DemoCobo/assets/ETH.png', key: '2'},
    {text: 'USDT', icon: '/Users/xijiawei/DemoCobo/assets/USDT.png', key: '3'},
    {text: 'TRX', icon: '/Users/xijiawei/DemoCobo/assets/TRX.png', key: '4'}

  ]);
    return (
        <View style={styles.container}>
            <WHeader style={styles.WHeader}/>
            <CardDashBoard style={styles.CardDashBoard}/>
            <Guinhanhoidoai style={styles.Guinhanhoidoai}/>
            <View>
            <FlatList
                    data={list}
                    renderItem={({item}) => (
                    <ListMoney  
                        item={item} /> 
                    )}
                    />
            </View>
         </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F7FB'
      },
      Guinhanhoidoai: {
        marginTop: 25,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 20
      },
      WHeader: {
        marginTop: 60,
        marginLeft: 25,
      },
      CardDashBoard: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
      },
      ListMoney: {
        
      }
});
export default DashBoard;

