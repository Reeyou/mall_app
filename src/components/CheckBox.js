import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Block } from './index'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

export default class CheckBox extends Component {
  constructor(props) {
    super()
    const { isCheck } = props
    this.state = {
      isCheck
    }
  }
  checkBoxPress (val) {
   this.props.onPress(val)
  }
  render () {
    const {
      isCheck
    } = this.state

    const topStyle = { top: isCheck ? -72 : -52 }
    return (
      <TouchableWithoutFeedback onPress={(val) => this.checkBoxPress(val)}>
        <Block color={'white'} style={styles.CheckBox}>
          <Image
            style={[{ position: 'absolute', left: 0, width: 20 }, topStyle]}
            source={require('../assets/images/check.png')}
            resizeMode="contain"
          />
        </Block>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  CheckBox: {
    width: 20,
    height: 20,
    borderRadius: 20,
    position: 'relative',
    overflow: 'hidden'
  }
})
