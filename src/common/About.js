import React, { Component } from 'react'
import { StyleSheet, View, Dimensions, DeviceInfo, Image } from 'react-native'
import { Block, Header, Text } from '../components'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { theme } from '../constants'
import { SETTING_MENU } from '../config'
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import ViewUtil from '../utils/ViewUtil'

const window = Dimensions.get('window');
const AVATAR_SIZE = 90;
const PARALLAX_HEADER_HEIGHT = 270;
const TOP = (Platform.OS === 'ios') ? 20 + (DeviceInfo.isIPhoneX_deprecated ? 24 : 0) : 0;
const STICKY_HEADER_HEIGHT = (Platform.OS === 'ios') ? theme.nav_bar_height_ios + TOP : theme.nav_bar_height_android;

export const ABOUT_TYPE = { app: 'about_app', me: 'about_me' };
export default class About {
  constructor(props, updateState) {
    this.props = props;
    this.updateState = updateState;
  }
  // componentDidMount () {
  //   fetch('https://www.devio.org/io/GitHubPopular/json/github_app_config.json')
  //     .then(response => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       throw new Error('Network Error');
  //     })
  //     .then(config => {
  //       if (config) {
  //         this.updateState({
  //           data: config,
  //         });
  //       }
  //     })
  //     .catch(e => {
  //       console(e);
  //     });
  // }
  render (contentView, params) {
    const statusBar = {
      backgroundColor: '#fff',
      barStyle: 'dark-content',
    };
    const { about_type } = this.props
    const result = about_type === ABOUT_TYPE.app
    const radiusStyle = {
      borderRadius: result ? theme.SIZES.base : 50
    }
    const title = result ? SETTING_MENU.About_App.name : SETTING_MENU.About_Author.name
    return (
      <Block block>
        <Header
          title={title}
          style={{ backgroundColor: '#fff' }}
          statusBar={statusBar}
          leftContent={ViewUtil.getLeftBackButton(() => this.props.navigation.dispatch(popAction))}
        />
        <Block center padding={[theme.SIZES.base * 1.5, 0]}>
          <Image style={[styles.avatar, radiusStyle]}
            source={{ uri: params.avatar }} />
          <Block margin={[theme.SIZES.base, 0, 0, 0]}>
            <Text header black2 center>{params.name}</Text>
            {
              result ?
                <Text caption gray center>当前版本:{params.version}</Text>
                :
                <Text caption gray center>{params.description}</Text>
            }
          </Block>
        </Block>
        {contentView}
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  avatar: {
    width: 80,
    height: 80
  },
});
