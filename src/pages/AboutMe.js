import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Block, Text } from '../components'
import About, { ABOUT_TYPE } from '../common/About';
import { SETTING_MENU } from '../config'
import MockData from '../constants/Mock';
import ViewUtil from '../utils/ViewUtil'
import { theme } from '../constants';

export default class AboutMe extends Component {
  constructor(props) {
    super(props);
    // this.params = this.props.navigation.state.params;
    this.aboutCommon = new About({
      // ...this.params,
      navigation: this.props.navigation,
      about_type: ABOUT_TYPE.me,
    }, data => this.setState({ ...data }),
    );
    this.state = {
      data: MockData,
      showContact: true,
    };
  }
  componentDidMount () {
    // this.aboutCommon.componentDidMount();
  }

  UNSAFE_componentWillUnmount () {
    this.aboutCommon.UNSAFE_componentWillUnmount();
  }
  _handleClick (item) {
    if (!item) {
      return;
    }

    if (item.url) {
      const params = {
        title: item.name,
        url: item.url,
      }
      this.props.navigation.navigate('WebView', params)
      return;
    }
  }

  _renderItem (data, isShow, key) {
    return ViewUtil._renderSettingItem(() => {
      key ? this.setState({
        [key]: !this.state[key],
      }) : this._handleClick(data)
    }, data, true, true, isShow ? 'chevron-down-outline' : 'chevron-forward-outline');
  }
  _renderCollapseItem (dic, isShowAccount) {
    if (!dic) {
      return null;
    }
    let views = [];
    for (let i in dic) {
      let title = isShowAccount ? dic[i].title + ':' + dic[i].account : dic[i].title;
      views.push(
        <Block padding={[0, theme.SIZES.base]} key={i}>
          {ViewUtil._renderBaseItem(() => this._handleClick(dic[i]), title, true, false)}
        </Block>,
      );
    }

    return views
  }
  render () {
    const { data, showBlog, showContact } = this.state
    const renderContent = <Block block>
      <Block color={'white'}>
        {this._renderItem(data.aboutMe.Blog)}
        {this._renderItem(data.aboutMe.Contact, showContact, 'showContact')}
        {showContact ? this._renderCollapseItem(data.aboutMe.Contact.items, showContact) : null}
      </Block>
    </Block>
    return this.aboutCommon.render(renderContent, data.author)
  }
}

const styles = StyleSheet.create({})
