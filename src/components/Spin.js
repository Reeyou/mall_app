import React, {Component} from 'react';
import { StyleSheet, View, Text,Dimensions } from 'react-native';
import Spinner from 'react-native-spinkit'

const HEIGHT = Dimensions.get('window').height
export default class Spin extends Component {
  constructor(props) {
    super()
    this.state = {
      size: 80,
      color: "#aaa",
      // isVisible: true
    }
  }

  render () {
    return (
      this.props.isVisible ?  <View style={styles.container}>
        <Spinner style={styles.spinner} isVisible={this.state.isVisible} size={this.state.size} type={'Circle'} color={this.state.color} />
        <Text style={[styles.spin_text,{color: this.state.color}]}>正在加载</Text>
      </View> : null
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#d35400',
  },
  spin_text: {
    // color: '#fff',
    fontSize: 13,
  },
  spinner: {
    marginBottom: 10
  },
});
