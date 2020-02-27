import React,{Component} from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class ShopCart extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Text>ShopCart</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})