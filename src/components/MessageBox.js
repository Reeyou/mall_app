import React, { Component } from 'react'
import { StyleSheet, View, Modal } from 'react-native'
import { Block, Button, Text } from '../components'
import PropTypes from 'prop-types';
import { theme } from '../constants';

export default class MessageBox extends Component {
  comfirmMessageBox () {
    this.props.comfirm()
  }
  closeMessageBox () {
    this.props.close()
  }
  render () {
    const { visible, title, content, closeText, comfirmText } = this.props
    return (
      <View>
        <Modal
          transparent={true}
          visible={visible}
          animationType={'fade'}
          statusBarTranslucent={true}
          onRequestClose={() => this.closeMessageBox()}
        >
          <Block block center middle style={{ backgroundColor: 'rgba(0,0,0,.58)' }}>
            <Block column radius={8} color={'white'} style={{ width: '80%' }}>
              <Block middle padding={[theme.SIZES.base * 2, theme.SIZES.base]}>
                <Block middle >
                  <Text header bold center>{title}</Text>
                </Block>
                {
                  content ? <Block padding={[theme.SIZES.base / 2, 0, 0, 0]}>
                    <Text body center>{content}</Text>
                  </Block> : null
                }
              </Block>
              <Block row center style={{ borderColor: theme.COLORS.black2, borderStyle: 'solid', borderTopWidth: 1 }}>
                <Button style={{ flex: 1, marginVertical: 0 }} onPress={() => this.closeMessageBox()}>
                  <Text center>{closeText}</Text>
                </Button>
                <Block style={{ height: '50%', width: 1, backgroundColor: theme.COLORS.black2, borderRadius: 4 }}></Block>
                <Button style={{ flex: 1, marginVertical: 0 }} onPress={() => this.comfirmMessageBox()}>
                  <Text primary center>{comfirmText}</Text>
                </Button>
              </Block>
            </Block>
          </Block>
        </Modal>
      </View>
    )
  }
}
MessageBox.propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.string,
  content: PropTypes.string,
  closeText: PropTypes.string,
  comfirmText: PropTypes.string,
}
MessageBox.defaultProps = {
  visible: false,
  closeText: '取消',
  comfirmText: '确认',
};
const styles = StyleSheet.create({})
