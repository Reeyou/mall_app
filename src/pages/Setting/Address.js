import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Header, CheckBox, Block, Text, Button } from '../../components';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ViewUtil from '../../utils/ViewUtil';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { theme } from '../../constants';
export default class Address extends Component {

  _renderAddressItem () {
    return <Block
      color={'white'}
      margin={[theme.SIZES.base / 2, theme.SIZES.base / 2, 0]}
      radius={8}
    >
      <Block
        padding={[theme.SIZES.base]}
        style={{ borderStyle: 'solid', borderBottomWidth: 1, borderColor: theme.COLORS.black2 }}
      >
        <Block row>
          <Text>贺军 </Text>
          <Text>13925053812</Text>
        </Block>
        <Text style={{ marginTop: 4 }} small black1>广东广州市天河区棠下街道塘尾里九号</Text>
      </Block>
      <Block row space={'between'} padding={[theme.SIZES.base / 2, theme.SIZES.base]}>
        <Block row center>
          <CheckBox isCheck={true} />
          <Text small style={{ marginLeft: 8 }}>默认地址</Text>
        </Block>
        <Block row style={{ marginTop: 6 }}>
          <Block row center>
            <Ionicons
              name={'create-outline'}
              size={theme.SIZES.icon}
              style={{ color: theme.COLORS.black }}
            />
            <Text small>编辑</Text>
          </Block>
          <Block row center style={{ marginLeft: 10 }}>
            <Ionicons
              name={'trash-outline'}
              size={theme.SIZES.icon}
              style={{ color: theme.COLORS.black }}
            />
            <Text small>删除</Text>
          </Block>
        </Block>
      </Block>
    </Block>
  }

  _renderAddArea () {
    return <Block block style={{ width: '100%' }} center style={styles.addArea}>
      <Button
        style={{ width: '100%' }}
        gradient
        onPress={() => this.props.navigation.navigate('AddAddress')}
      >
        <Block row center middle>
          <Text white> + </Text>
          <Text white>新增收货地址</Text>
        </Block>
      </Button>
    </Block>
  }
  render () {
    const statusBar = {
      backgroundColor: 'transparent',
      barStyle: 'dark-content',
      translucent: true
    };
    return (
      <Block block style={{ position: 'relative' }}>
        <Header
          status={statusBar}
          leftContent={ViewUtil.getLeftBackButton(() => { })}
          title="管理收货地址"
          style={{ backgroundColor: '#fff' }}
        />
        { this._renderAddressItem()}
        { this._renderAddressItem()}
        { this._renderAddArea()}
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  addArea: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    textAlign: 'center',
    paddingHorizontal: theme.SIZES.base,
  }
})
