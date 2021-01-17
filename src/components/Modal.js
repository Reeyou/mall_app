
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Dimensions,
  ViewPropTypes as RNViewPropTypes,
  StatusBar
} from 'react-native'
import { Block, Button, Text } from './index'
import PropTypes from 'prop-types';
import { theme } from '../constants';
const ViewPropTypes = RNViewPropTypes || View.propTypes;
export const DURATION = {
  LENGTH_SHORT: 1000,
  FOREVER: 0,
};

const { height, width } = Dimensions.get('window');

export default class Modal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      text: '',
      opacityValue: new Animated.Value(this.props.opacity),
    }
  }

  show (text, duration, callback) {
    this.duration = typeof duration === 'number' ? duration : DURATION.LENGTH_SHORT;
    this.callback = callback;
    this.setState({
      isShow: true,
      text: text,
    });

    this.animation = Animated.timing(
      this.state.opacityValue,
      {
        toValue: this.props.opacity,
        duration: this.props.fadeInDuration,
        useNativeDriver: true
      }
    )
    this.animation.start(() => {
      this.isShow = true;
      // if (duration !== DURATION.FOREVER) this.close();
    });
  }

  close (duration) {
    let delay = typeof duration === 'undefined' ? this.duration : duration;

    if (delay === DURATION.FOREVER) delay = this.props.defaultCloseDelay || 250;

    if (!this.isShow && !this.state.isShow) return;
    this.timer && clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.animation = Animated.timing(
        this.state.opacityValue,
        {
          toValue: 0.0,
          duration: this.props.fadeOutDuration,
          useNativeDriver: true
        }
      )
      this.animation.start(() => {
        this.setState({
          isShow: false,
        });
        this.isShow = false;
        if (typeof this.callback === 'function') {
          this.callback();
        }
      });
    }, delay);
  }

  componentWillUnmount () {
    this.animation && this.animation.stop()
    this.timer && clearTimeout(this.timer);
  }
  btnClick () {
    console.log(111111)
    this.close()
    console.log(22222)
  }
  render () {
    let pos;
    switch (this.props.position) {
      case 'top':
        pos = this.props.positionValue;
        break;
      case 'center':
        pos = height / 2 - this.props.positionValue/2;
        break;
      case 'bottom':
        pos = height - this.props.positionValue*1.2;
        break;
    }

    const statusBar = {
      backgroundColor: 'transparent',
      barStyle: 'light-content',
      translucent: true
    };
    const view = this.state.isShow ?
      <View
        style={[styles.container]}
        pointerEvents="none"
      >
        <StatusBar {...statusBar}/>
        <Animated.View
          style={[styles.content, { opacity: this.state.opacityValue, top: pos }, this.props.style]}
        >
          <Block column>
            <Block padding={[theme.SIZES.base/2,theme.SIZES.base]}>
              <Text header bold>确认删除此订单？</Text>
            </Block>
            <Block padding={[theme.SIZES.base/2,theme.SIZES.base]}>
              <Text body>订单删除后将无法恢复，请谨慎操作！</Text>
            </Block>
            <Block row center margin={[theme.SIZES.base,0,0,0]} style={{borderColor: theme.COLORS.black2, borderStyle: 'solid', borderTopWidth: 1}}>
              <Button style={{flex: 1, marginVertical: 0}} onPress={() => this.close()}>
                <Text center>取消</Text>
              </Button>
              <Block style={{height: '50%', width: 1, backgroundColor: theme.COLORS.black2, borderRadius: 4}}></Block>
              <Button style={{flex: 1, marginVertical: 0}} onPress={() => this.btnClick()}>
                <Text primary center>确认</Text>
              </Button>
            </Block>
          </Block>
        </Animated.View>
      </View> : null;
    return view;
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    // elevation: 999,
    width: '100%', height: '100%',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.38)',
    // zIndex: 10000,
  },
  content: {
    width: width*0.8,
    backgroundColor: '#fff',
    borderRadius: 6,
    paddingTop: theme.SIZES.base,
  },
  text: {
    color: 'white'
  }
});

Modal.propTypes = {
  style: ViewPropTypes.style,
  position: PropTypes.oneOf([
    'top',
    'center',
    'bottom',
  ]),
  // textStyle: Text.propTypes.style,
  positionValue: PropTypes.number,
  fadeInDuration: PropTypes.number,
  fadeOutDuration: PropTypes.number,
  opacity: PropTypes.number
}

Modal.defaultProps = {
  position: 'bottom',
  textStyle: styles.text,
  positionValue: 120,
  fadeInDuration: 500,
  fadeOutDuration: 500,
  opacity: 1
}
