import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Block } from '../components'
import Spinner from 'react-native-spinkit'
import PropTypes from 'prop-types';

const HEIGHT = Dimensions.get('window').height
const defaultColor = "rgba(0,0,0,.54)"
export default class Spin extends Component {

  render () {
    const { size, isVisible, showBackground, spinText } = this.props
    return (
      this.props.isVisible ? <View style={styles.container}>
        <Block
          center
          middle
          radius={8}
          style={[
            { width: 140, height: 140 },
            showBackground ? { backgroundColor: 'rgba(0,0,0,.58)' } : null
          ]}>
          <Spinner
            style={styles.spinner}
            isVisible={isVisible}
            size={size}
            type={'Circle'}
            color={showBackground ? '#fff' : defaultColor}
          />
          <Text
            style={[
              styles.spin_text,
              showBackground ? { color: '#fff' } : null
            ]}>{spinText}</Text>
        </Block>
      </View> : null
    )
  }
}
Spin.propTypes = {
  size: PropTypes.number,
  showBackground: PropTypes.bool,
  spinText: PropTypes.string
}
Spin.defaultProps = {
  size: 70,
  showBackground: false,
  spinText: '正在加载'
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#d35400',
  },
  spin_text: {
    color: defaultColor,
    fontSize: 13,
  },
  spinner: {
    marginBottom: 10
  },
});
