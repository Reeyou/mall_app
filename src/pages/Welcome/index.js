import React,{Component} from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class Welcome extends Component {
  componentDidMount() {
    this.timer = setTimeout(() => {
      this.props.navigation.navigate('Main')
    },200)
  }
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome</Text>
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