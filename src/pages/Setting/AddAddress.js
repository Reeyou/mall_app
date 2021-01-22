import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Header, Input, Block, Text, Button, Switch } from '../../components';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ViewUtil from '../../utils/ViewUtil';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { theme } from '../../constants';

export default class AddAddress extends Component {
  state = {
    toggle: 0
  }
  setToggle = (switchValue) => {
    this.setState({
      toggle: switchValue,
    })
  }
  _renderAddressForm () {
    return <Block
      column
      color={'white'}
      padding={[0, theme.SIZES.base]}
    >
      <Block style={styles.line}>
        <Input
          row
          label="收货人"
          labelWidth={60}
          labelStyle={{ fontSize: theme.SIZES.caption, marginRight: 10 }}
          placeholder="请输入收货人名称"
          // error={hasErrors("username")}
          style={styles.input}
        // onChangeText={text => this.setState({ username: text })}
        />
      </Block>
      <Block style={styles.line}>
        <Input
          row
          label="手机号码"
          labelWidth={60}
          labelStyle={{ fontSize: theme.SIZES.caption }}
          placeholder="请输入手机号码"
          style={styles.input}
        // onChangeText={text => this.setState({ password: text })}
        />
      </Block>
      <Block style={styles.line}>
        <Input
          row
          label="所在地区"
          labelWidth={60}
          labelStyle={{ fontSize: theme.SIZES.caption }}
          placeholder="请选择所在地区"
          style={styles.input}
          rightIcon={
            <Ionicons
              name={'location-outline'}
              size={theme.SIZES.icon1}
              style={{ color: theme.COLORS.black }}
            />
          }
        // onChangeText={text => this.setState({ password: text })}
        />
      </Block>
      <Block style={styles.line}>
        <Input
          row
          label="详细地址"
          labelWidth={60}
          labelStyle={{ fontSize: theme.SIZES.caption }}
          placeholder="小区，门牌号等"
          style={styles.input}
          rightIcon={
            <Ionicons
              name={'search-outline'}
              size={theme.SIZES.icon1}
              style={{ color: theme.COLORS.black }}
            />
          }
        // onChangeText={text => this.setState({ password: text })}
        />
      </Block>
      <Block
        row
        center
        space={'between'}
        padding={[theme.SIZES.base / 1.5, 0]}
      >
        <Text caption>设为默认地址</Text>
        <Switch
          value={this.state.toggle}
          onValueChange={(switchValue) => this.setToggle(switchValue)}
        />
      </Block>
    </Block>
  }
  _renderActionArea () {
    return <Block
      block
      row
      padding={[0, theme.SIZES.base]}
      margin={[theme.SIZES.base, 0]}
    >
      <Block block>
        <Button style={{ borderRadius: 50, textAlign: 'center' }}>
          <Text center>取消</Text>
        </Button>
      </Block>
      <Block block style={{ marginLeft: theme.SIZES.base }}>
        <Button style={{ borderRadius: 50 }} gradient>
          <Text center white>确认</Text>
        </Button>
      </Block>
    </Block>
  }
  render () {
    const statusBar = {
      backgroundColor: 'transparent',
      barStyle: 'dark-content',
      translucent: true
    };
    return (
      <Block block>
        <Header
          status={statusBar}
          leftContent={ViewUtil.getLeftBackButton(() => { })}
          title="新增收货地址"
          style={{ backgroundColor: '#fff' }}
        />
        <Block block>
          {this._renderAddressForm()}
          {this._renderActionArea()}
        </Block>
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: 'transparent',
  },
  hasErrors: {
    borderBottomColor: theme.COLORS.accent
  },
  line: {
    // height: 1,
    width: '100%',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.COLORS.black2,
    paddingVertical: theme.SIZES.base / 2
    // backgroundColor: theme.COLORS.black2
  }
})
