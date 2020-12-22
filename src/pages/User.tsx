
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {Header} from 'react-native-elements'
import {Spin} from '../components'


export default function ShopCartScreen() {
  return (
    <View style={{flex: 1,backgroundColor: '#fff'}}>
        <Header
            placement="left"
            statusBarProps={{ barStyle: 'dark-content' }}
            backgroundColor="#f9f9f9"
            centerComponent={{ text: '购物车', style: { color: '#000', fontSize: 18, fontWeight: 'bold' } }}
        />
      <View style={{flex: 1,backgroundColor: '#fff'}}>
        <Spin />
        {/* <Text style={styles.title}>ShopCart</Text> */}
      </View>
     
    </View>
  );
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
