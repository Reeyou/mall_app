import React, { Component } from 'react';
import { DeviceInfo, StyleSheet, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { Block, Header, Text } from '../components'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { WebView } from 'react-native-webview';
import { theme } from '../constants'
import { StackActions } from '@react-navigation/native';
import BackPress from '../common/BackPress';

const popAction = StackActions.pop(1);
export default class WebViewScreen extends Component {
  constructor(props) {
    super(props);
    this.params = this.props.route.params;
    console.log(this.params)
    const { title, url } = this.params;
    this.state = {
      title: title,
      url: url,
      canGoBack: false,
    };
    this.backPress = new BackPress({ backPress: () => this.onBackPress() });
  }

  componentDidMount () {
    this.backPress.componentDidMount();
  }

  componentWillUnmount () {
    this.backPress.componentWillUnmount();
  }
  onBack () {
    if (this.state.canGoBack) {
      this.webView.goBack();
    } else {
      this.props.navigation.dispatch(popAction)
    }
  }
  onBackPress () {
    this.onBack();
    return true;
  }
  _renderLeftContent () {
    return (
      <TouchableOpacity onPress={() => this.onBackPress()}>
        <Ionicons
          name={'return-down-back-outline'}
          size={theme.SIZES.base * 1.5}
          style={{ color: theme.COLORS.black }}
        />
      </TouchableOpacity>
    );
  }
  onNavigationStateChange (navState) {
    console.log(navState)
    this.setState({
      canGoBack: navState.canGoBack,
      url: navState.url,
    });
  }
  renderLoading() {
    return (
      <Block block center>
        <ActivityIndicator size={38} color={theme.COLORS.secondary} />
        <Text height={20} small gray>加载中...</Text>
      </Block>
    )
  }
  render () {
    const statusBar = {
      backgroundColor: '#fff',
      barStyle: 'dark-content',
    };
    return (
      <View style={{flex: 1}}>
        <Header
          title={this.state.title}
          statusBar={statusBar}
          leftContent={this._renderLeftContent()}
          style={{ backgroundColor: '#fff' }}
        />
        <WebView
          ref={webView => this.webView = webView}
          startInLoadingState={true}
          renderLoading={() => this.renderLoading()}
          onNavigationStateChange={e => this.onNavigationStateChange(e)}
          source={{ uri: this.state.url }}
        />
      </View>
      // <WebView source={{ uri: 'https://reactnative.dev/' }} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: DeviceInfo.isIPhoneX_deprecated ? 30 : 0,
  },
});