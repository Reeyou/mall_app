import React, { Component } from 'react'
import { StyleSheet, Linking } from 'react-native'
import { Block, Text } from '../components'
import About, { ABOUT_TYPE } from '../common/About';
import { SETTING_MENU } from '../config'
import MockData from '../constants/Mock';
import ViewUtil from '../utils/ViewUtil'
import { theme } from '../constants';

export default class AboutApp extends Component {
  constructor(props) {
    super(props);
    // this.params = this.props.navigation.state.params;
    this.aboutCommon = new About({
      // ...this.params,
      navigation: this.props.navigation,
      about_type: ABOUT_TYPE.app,
    }, data => this.setState({ ...data }),
    );
    this.state = {
      data: MockData,
    };
  }
  componentDidMount () {
    // this.aboutCommon.componentDidMount();
  }

  UNSAFE_componentWillUnmount () {
    this.aboutCommon.UNSAFE_componentWillUnmount();
  }
  _handleClick (item) {
    switch (item) {
      case SETTING_MENU.Feedback:
        const url = '993830137@qq.com';
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
        break;
    }
  }
  _renderItem (item, showBorder) {
    return ViewUtil._renderSettingItem(() => this._handleClick(item), item, showBorder)
  }
  render () {
    const renderContent = <Block block column>
      <Block block>
        <Block color={'white'}>
          {this._renderItem(SETTING_MENU.Feedback)}
          {this._renderItem(SETTING_MENU.CodePush, false)}
        </Block>
      </Block>
      <Block center bottom padding={theme.SIZES.base}>
        <Text gray caption>Copyright©2020-2021</Text>
        <Text gray caption>Reeyou版权所有</Text>
      </Block>
    </Block>
    return this.aboutCommon.render(renderContent, this.state.data.app)
  }
}

const styles = StyleSheet.create({})
