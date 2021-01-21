import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import Animated from 'react-native-reanimated';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Header, SearchBar, Block, Text } from '../components';
import Parallax from '../common/Parallax'
import Spinner from 'react-native-spinkit'
import OrderItem from './Order/OrderTab'
import { theme } from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Tab = createMaterialTopTabNavigator();
class recommend extends Component {
  renderIconTab () {
    const iconTabList = [
      {
        label: '直播间'
      },
      {
        label: '好物众测'
      },
      {
        label: '0元试用'
      },
      {
        label: '邀请有礼'
      },
      {
        label: '商城公告'
      }
    ]
    const content = <Block color={'white'} row space={'between'} padding={[theme.SIZES.base]}>
      {
        iconTabList.map((item, index) => (
          <Block key={index} center>
            <Image source={require('../assets/images/3.jpg')} style={{ width: 30, height: 30 }} resizeMode="cover" />
            <Text caption style={{ marginTop: 4 }}>{item.label}</Text>
          </Block>
        ))
      }
    </Block>
    return content
  }
  _renderNews () {
    return (
      <Block color={'white'}>
        <Block center>
          <Text title>商城头条</Text>
        </Block>
        <Block>
          <TouchableWithoutFeedback style={{paddingTop: theme.SIZES.base/2, paddingHorizontal: theme.SIZES.base}}>
            <Image source={require('../assets/images/user1.jpg')} style={{ width: '100%', height: 200, borderRadius: 8 }} resizeMode="cover" />
            <Block padding={[theme.SIZES.base / 2, 0]}>
              <Text header>【微信福利】关注华为商城丨免费赢新年礼</Text>
              <Text caption style={{ paddingVertical: 4 }}>关注【华为商城】微信公众号回复【新年礼】即有机会赢取大奖</Text>
              <Block>
                <Text caption black1>2020-10-29</Text>
              </Block>
            </Block>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback style={{paddingTop: theme.SIZES.base/2, paddingHorizontal: theme.SIZES.base}}>
            <Image source={require('../assets/images/user1.jpg')} style={{ width: '100%', height: 200, borderRadius: 8 }} resizeMode="cover" />
            <Block padding={[theme.SIZES.base / 2, 0]}>
              <Text header>【微信福利】关注华为商城丨免费赢新年礼</Text>
              <Text caption style={{ paddingVertical: 4 }}>关注【华为商城】微信公众号回复【新年礼】即有机会赢取大奖</Text>
              <Block>
                <Text caption black1>2020-10-29</Text>
              </Block>
            </Block>
          </TouchableWithoutFeedback>
        </Block>
      </Block>
    )
  }
  render () {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {this.renderIconTab()}
        {this._renderNews()}
      </ScrollView>
    )
  }
}

class show extends Component {
  render () {
    return (
      <Block>
        <Text>show</Text>
      </Block>
    )
  }
}
export default class DiscoverScreen extends Component {
  constructor(props) {
    super()
  }
  _renderTab () {
    return (
      <Tab.Navigator
        tabBarOptions={{
          scrollEnabled: true,
          tabStyle: { padding: 0, width: 68, height: 44, lineHeight: 44 },
          activeTintColor: theme.COLORS.primary,
          inactiveTintColor: theme.COLORS.black,
          indicatorStyle: styles.indicatorStyle,//标签指示器的样式
          labelStyle: styles.labelStyle,//文字的样式
        }}
        lazy={true}
      >
        <Tab.Screen name={'推荐'} component={recommend} />
        <Tab.Screen name={'晒一晒'} component={show} />
      </Tab.Navigator>
    )
  }
  _renderLeftContent () {
    return (
      <Text title bold>发现</Text>
    );
  }
  _renderRightContent () {
    return (
      <Block row center>
        <TouchableOpacity onPress={() => { }}>
          <Ionicons
            name={'chatbubble-ellipses-outline'}
            size={theme.SIZES.icon}
            style={{ color: theme.COLORS.black }}
          />
        </TouchableOpacity>
        <TouchableWithoutFeedback>
          <Image
            style={{ width: theme.SIZES.icon, marginLeft: 10, height: theme.SIZES.icon, borderRadius: theme.SIZES.icon }}
            source={require('../assets/images/12.png')}
            resizeMode="cover"
          />
        </TouchableWithoutFeedback>
      </Block>
    );
  }

  render () {
    const statusBar = {
      backgroundColor: 'transparent',
      barStyle: 'dark-content',
      translucent: true
    };
    return (
      <Block block>
        <Header status={statusBar}
          leftContent={this._renderLeftContent()}
          rightContent={this._renderRightContent()}
          style={{ backgroundColor: '#fff' }}
        />

        {this._renderTab()}
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#d35400',
  },
  spin_text: {
    // color: '#fff',
    fontSize: 13,
  },
  spinner: {
    marginBottom: 10
  },
  indicatorStyle: {
    height: 0,
    // width: ,
    backgroundColor: 'transparent',
    // paddingVertical
  },
  labelStyle: {
    fontSize: 16,
    // fontWeight: 'bold',
    margin: 0,
  },
});
