import React, { Component } from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { Header, Block, SearchBar, Swiper, Text, Button, Modal } from '../components'
import { theme } from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Tabs from '../common/Tabs'
import Swiper1 from 'react-native-swiper';

export default class HomeScreen extends Component {
  state = {
    position: 'bottom',
    swiperList: [
      { uri: require('../assets/images/user1.jpg') },
      { uri: require('../assets/images/user2.jpg') },
      { uri: require('../assets/images/user3.jpg') },
      { uri: require('../assets/images/user4.jpg') },
      { uri: require('../assets/images/user5.jpg') },
    ]
  }
  _renderTabIcons () {
    const swiperList = [
      [
        {
          label: '会员领卷'
        },
        {
          label: '华为数码'
        },
        {
          label: '华为智慧屏'
        },
        {
          label: '好物众测'
        },
        {
          label: '以旧换新'
        }
      ],
      [
        {
          label: '邀请有礼'
        },
        {
          label: '智慧生活'
        },
        {
          label: '直播频道'
        },
        {
          label: '积分商城'
        },
        {
          label: '精选特卖'
        },
      ],
    ]
    const content = <Block style={{ height: 78, backgroundColor: '#fff' }} row center >
      <Swiper1
        // height={200}
        autoplay={false}
        dot={<View style={{
          backgroundColor: '#eee',
          borderColor: 'white',
          borderStyle: 'solid',
          borderWidth: 1,
          width: 10,
          height: 4,
          borderRadius: 4,
          marginLeft: 2,
          marginRight: 2
        }} />}
        activeDot={<View style={{
          backgroundColor: '#000',
          borderColor: 'white',
          borderStyle: 'solid',
          borderWidth: 1,
          width: 10,
          height: 4,
          borderRadius: 4,
          marginLeft: 2,
          marginRight: 2
        }} />}
        paginationStyle={{
          right: 0,
          bottom: 10,
        }}>
        {
          swiperList.map((item, index) => (
            <Block key={index} row space={'between'} padding={[theme.SIZES.base / 2, theme.SIZES.base]}>
              {
                item.map((icon, index) => (
                  <Block key={index} center>
                    <Image source={require('../assets/images/3.jpg')} style={{ width: 30, height: 30 }} resizeMode="cover" />
                    <Text caption style={{ marginTop: 4 }}>{icon.label}</Text>
                  </Block>
                ))
              }
            </Block>
          ))
        }
      </Swiper1>
    </Block>
    return content
  }
  _renderNotice () {
    const noticeList = [
      {
        label: "【微信福利】关注华为商城丨免费赢新年礼"
      },
      {
        label: "【0元试用】雷士照明护眼台灯新品试用中，等你来"
      },
      {
        label: "【0元试用】舒华智能走步机新品试用中，等你来"
      },
      {
        label: "【新品开售】华为智选车载智慧屏"
      },
      {
        label: "【运动教练指导你】跟花粉聊聊跑步"
      },
    ]
    const content = <Block row padding={[theme.SIZES.base / 2, theme.SIZES.base]} space={'between'} noWrap style={{ backgroundColor: 'white', height: 40 }}>
      <Block center>
        <Text body bold>商城头条</Text>
      </Block>
      <Block style={{ paddingLeft: 4, width: '74%' }} column>
        <Swiper1
          horizontal={false}
          autoplay={true}
          showsPagination={false}
        >
          {
            noticeList.map((item, index) => (
              <Text key={index} caption numberOfLines={1} ellipsizeMode="tail" style={{ marginTop: 2 }}>{item.label}</Text>
            ))
          }
        </Swiper1>
      </Block>
      <Block >
        <Text caption black1>更多</Text>
      </Block>
    </Block>
    return content
  }
  _renderMainContent () {
    const content = <Block style={{ backgroundColor: '#fff' }} padding={[0, theme.SIZES.base]}>
      <Block row>
        <Block style={{ width: '50%' }}>
          <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate('GoodsDetail') }}>
            <Image source={require('../assets/images/home1.png')} style={{ width: '100%', height: 250 }} resizeMode="cover" />
          </TouchableWithoutFeedback>
        </Block>
        <Block style={{ width: '50%' }} column>
          <Image source={require('../assets/images/home2.png')} style={{ width: '100%', height: 125 }} resizeMode="cover" />
          <Image source={require('../assets/images/home3.jpg')} style={{ width: '100%', height: 125 }} resizeMode="cover" />
        </Block>
      </Block>
      <Block row>
        <Image source={require('../assets/images/home4.jpg')} style={{ width: '50%', height: 125 }} resizeMode="cover" />
        <Image source={require('../assets/images/home5.png')} style={{ width: '50%', height: 125 }} resizeMode="cover" />
      </Block>
      <Block row>
        <Image source={require('../assets/images/home6.png')} style={{ width: '50%', height: 125 }} resizeMode="cover" />
        <Image source={require('../assets/images/home7.png')} style={{ width: '50%', height: 125 }} resizeMode="cover" />
      </Block>
    </Block>
    return content
  }
  _renderCategoryGoods () {
    return <Tabs />
  }
  _renderSearchBar () {
    return <TouchableWithoutFeedback>
      <SearchBar
        onInput={false}
        onPress={() => this.props.navigation.navigate('Search')}
        placeholder="请输入..."
      />
    </TouchableWithoutFeedback>
  }
  _renderLeftContent () {
    return <TouchableWithoutFeedback>
      <Ionicons
        name={'scan-outline'}
        size={theme.SIZES.icon}
        style={{ color: theme.COLORS.black, marginRight: 10 }}
      />
    </TouchableWithoutFeedback>
  }
  _renderRightContent () {
    return <Block row center>
      <TouchableWithoutFeedback
      >
        <Ionicons
          name={'gift-outline'}
          size={theme.SIZES.icon}
          style={{ color: theme.COLORS.black, marginLeft: 10 }}
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Ionicons
          name={'chatbubble-ellipses-outline'}
          size={theme.SIZES.icon}
          style={{ color: theme.COLORS.black, marginLeft: theme.SIZES.base / 2 }}
        />
      </TouchableWithoutFeedback>
    </Block>
  }
  render () {
    const statusBar = {
      backgroundColor: '#fff',
      barStyle: 'dark-content',
      translucent: true
    };
    return (
      <ScrollView
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
      >
        <Header
          style={{ backgroundColor: '#fff' }}
          statusBar={statusBar}
          searchInput={this._renderSearchBar()}
          leftContent={this._renderLeftContent()}
          rightContent={this._renderRightContent()}
        />
        <Block style={{ backgroundColor: '#fff' }} padding={[theme.SIZES.base / 2, 0]}>
          <Block style={{ height: 140 }} row >
            <Swiper swiperList={this.state.swiperList} activeStyle={{ fontSize: theme.FONTS.h3, fontWeight: 'bold' }} />
          </Block>
        </Block>
        {this._renderTabIcons()}
        {this._renderNotice()}
        {this._renderMainContent()}
        <Block block margin={[theme.SIZES.base, 0]}>
          {this._renderCategoryGoods()}
        </Block>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
