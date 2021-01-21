import React, { Component } from 'react'
import { Alert, StyleSheet, View, TouchableOpacity, Image, Linking } from 'react-native'
import { Header, Button, Block, Input, Text, Spin, Toast } from "../../components";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { theme } from '../../constants'
import { SETTING_MENU } from '../../config'
import BaseItem from '../../common/BaseItem'
import ViewUtil from '../../utils/ViewUtil';

export default class Setting extends Component {
  state = {
    username: '登录/注册'
  }
  _handleClick (item) {
    const { navigation } = this.props;
    let RouteName
    switch (item) {
      case SETTING_MENU.Address:
        RouteName = 'Address';
        break;
      case SETTING_MENU.Clear_Cache:
        // const { onShowCustomThemeView } = this.props;
        // onShowCustomThemeView(true);
        break;
      case SETTING_MENU.About_Author:
        RouteName = 'AboutMe';
        break;
      case SETTING_MENU.About_App:
        RouteName = 'AboutApp';
        break;
      case SETTING_MENU.Feedback:
        const url = 'mailto://crazycodeboy@gmail.com';
        Linking.canOpenURL(url)
          .then(support => {
            if (!support) {
              console.log('Can\'t handle url: ' + url);
            } else {
              Linking.openURL(url);
            }
          }).catch(e => {
            console.error('An error occurred', e);
          });
        break;
      case SETTING_MENU.CodePush:
        RouteName = 'CodePush';
        break;
    }
    if (RouteName) {
      navigation.navigate(RouteName)
    }
  }

  handleClick (val) {
    console.log(val)
    switch (val.label) {
      case '退出登录':
        Alert.alert(
          "退出账号",
          "确定退出当前帐号",
          [
            {
              text: "确定",
              onPress: () => {
                // navigation.navigate("Browse");
              }
            }
          ],
          { cancelable: false }
        );
        break;
      default:
        break;
    }
  }
  _renderUserInfo () {
    // const { username } = this.state
    return (
      <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Login')}>
        <Block style={styles.borderStyle} color={'white'} row center space={'between'} padding={[theme.SIZES.base * 1.8, theme.SIZES.base, theme.SIZES.base * 1.3]}>
          <Block row center>
            <Image
              style={{ width: 50, height: 50, borderRadius: 50 }}
              source={require('../../assets/images/12.png')}
              resizeMode="cover"
            />

            <Text style={{ marginLeft: theme.SIZES.base }}>登录/注册</Text>
          </Block>
          <Ionicons name={'chevron-forward-outline'} size={theme.SIZES.base} style={{ color: theme.COLORS.gray }} />

        </Block>
      </TouchableWithoutFeedback>

    );
  }
  _renderItem (item, showBorder, showIcon) {
    return BaseItem._renderSettingItem(() => this._handleClick(item), item, showBorder, showIcon)
  }
  render () {
    const statusBar = {
      backgroundColor: '#fff',
      barStyle: 'dark-content',
    };
    return (
      <Block>
        <Header
          title={"账户设置"}
          style={{ backgroundColor: '#fff' }}
          statusBar={statusBar}
          leftContent={ViewUtil.getLeftBackButton(() => _utils.goBack(this.props.navigation))}
        />

        <Block color={'white'} radius={[0, theme.SIZES.radius]}>
          {this._renderUserInfo()}
          {this._renderItem(SETTING_MENU.Address, false)}
        </Block>
        <Block color={'white'} card margin={[theme.SIZES.base / 2, 0, 0, 0]}>
          {this._renderItem(SETTING_MENU.Clear_Cache, false)}
          {this._renderItem(SETTING_MENU.About_Author)}
          {this._renderItem(SETTING_MENU.About_App, false)}
        </Block>
        <Block color={'white'} card style={{ backgroundColor: '#fff' }} margin={[theme.SIZES.base / 2, 0, 0, 0]}>
          <Block center>
            {this._renderItem(SETTING_MENU.Logout, false, false)}
          </Block>
        </Block>
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  borderStyle: {
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.COLORS.gray2,
  }
})
