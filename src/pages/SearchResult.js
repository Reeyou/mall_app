import React, { Component } from 'react'
import { StyleSheet, Image, Dimensions } from 'react-native'
import { Header, SearchBar, Block, Text } from '../components'
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { theme } from '../constants'
import MockData from '../constants/Mock.json'

const { width } = Dimensions.get('window')

export default class SearchResult extends Component {
  state = {
    layout: true,
    goodsList: MockData.goodsList
  }
  _renderSearchTabs () {
    return <Block row space={'between'} padding={[theme.SIZES.base]}>
      <Text body style={{ color: theme.COLORS.primary }}>综合</Text>
      <Text body>最新</Text>
      <Text body>评论数</Text>
      <Block row center>
        <Text body>价格</Text>
        <Block cloumn center middle>
          <Ionicons
            name={'caret-up-outline'}
            size={theme.SIZES.icon/2.5}
            style={{ marginTop: 2, color: theme.COLORS.black1 }}
          />
          <Ionicons
            name={'caret-down-outline'}
            size={theme.SIZES.icon/2.5}
            style={{ marginTop: -4,color: theme.COLORS.black1 }}
          />
        </Block>
      </Block>
      <Block row>
        <Block style={{width: 1.5, height: '100%', backgroundColor: theme.COLORS.black2, right: 16}}></Block>
        <Text body>筛选</Text>
      </Block>
    </Block>
  }
  _renderGoodsList () {
    return <Block padding={[0, theme.SIZES.base / 2]}>
      {
        this.state.goodsList.map((item, index) => {
          return <Block key={index} row center style={index > 0 ? { marginTop: theme.SIZES.base / 2 } : null}>
            <Block style={{ width: 130, height: 130, borderRadius: theme.SIZES.radius }} center middle color={theme.COLORS.gray1}>
              <Image
                style={{ width: 80, height: 80 }}
                source={require("../assets/images/3.jpg")}
                resizeMode='cover'
              />
            </Block>
            <Block block colunm padding={[0, 0, 0, theme.SIZES.base]}>
              <Block row wrap padding={[theme.SIZES.base / 4, theme.SIZES.base / 4, 0, 0]}>
                <Text body>{item.goods_name}</Text>
              </Block>
              <Text small black1 style={{ marginTop: theme.SIZES.base / 4 }}>{item.goods_label}</Text>
              <Block row margin={[theme.SIZES.base, 0, 0, 0]} style={{ alignItem: 'flex-end' }}>
                <Text secondary>￥</Text>
                <Text h3 bold secondary>{item.goods_price}</Text>
              </Block>
              <Block row padding={[theme.SIZES.base / 4, 0]}>
                {
                  item.goods_promotion && item.goods_promotion.map(pro => {
                    return <Text small accent style={styles.item_border}>{pro}</Text>
                  })
                }
              </Block>
              <Block row>
                <Text small black1>{item.comment_count} 人评价</Text>
                <Text small black1 style={{ marginLeft: theme.SIZES.base / 2 }}>{item.praise_percent} 好评</Text>
              </Block>
            </Block>
          </Block>
        })
      }
    </Block>
  }
  _renderGoodsGrid () {
    return <Block block wrap row padding={[0, theme.SIZES.base / 2]}>
      {
        this.state.goodsList.map((item, index) => {
          return <Block key={index} column center style={[(index + 1) % 2 === 0 ? { paddingLeft: theme.SIZES.base / 4 } : { paddingRight: theme.SIZES.base / 4 }, { maxWidth: '50%', paddingBottom: theme.SIZES.base }]}>
            <Block style={{ width: '100%', height: 170, borderRadius: theme.SIZES.radius }} center middle color={theme.COLORS.gray1}>
              <Image
                style={{ width: 80, height: 80 }}
                source={require("../assets/images/3.jpg")}
                resizeMode='cover'
              />
            </Block>
            <Block block colunm>
              <Block row margin={[theme.SIZES.base / 4, theme.SIZES.base / 4, 0, 0]}>
                <Text numberOfLines={1} ellipsizeMode="tail" body>{item.goods_name}</Text>
              </Block>
              <Block row margin={[theme.SIZES.base / 4, 0, 0, 0]} style={{ alignItem: 'flex-end' }}>
                <Text secondary>￥</Text>
                <Text h3 bold secondary>{item.goods_price}</Text>
              </Block>
              <Block row padding={[theme.SIZES.base / 4, 0]}>
                {
                  item.goods_promotion && item.goods_promotion.map(pro => {
                    return <Text small accent style={styles.item_border}>{pro}</Text>
                  })
                }
              </Block>
              <Block row>
                <Text small black1>{item.comment_count} 人评价</Text>
                <Text small black1 style={{ marginLeft: theme.SIZES.base / 2 }}>{item.praise_percent} 好评</Text>
              </Block>
            </Block>
          </Block>
        })
      }
    </Block>
  }
  render () {
    const statusBar = {
      backgroundColor: '#fff',
      barStyle: 'dark-content',
      translucent: true
    };
    return (
      <Block block>
        <Header
          style={{ backgroundColor: '#fff' }}
          statusBar={statusBar}
          searchInput={<SearchBar placeholder="请输入..." />}
          leftContent={
            <TouchableWithoutFeedback onPress={() => _utils.goBack(this.props.navigation)}>
              <Ionicons
                name={'chevron-back-outline'}
                size={theme.SIZES.icon}
                style={{ color: theme.COLORS.black }}
              />
            </TouchableWithoutFeedback>
          }
          rightContent={
            <TouchableWithoutFeedback onPress={() => this.setState({ layout: !this.state.layout })}>
              {
                this.state.layout ?
                  <Ionicons
                    name={'list-outline'}
                    size={theme.SIZES.icon}
                    style={{ color: theme.COLORS.black }}
                  />
                  : <Ionicons
                    name={'grid-outline'}
                    size={theme.SIZES.icon}
                    style={{ color: theme.COLORS.black }}
                  />
              }
            </TouchableWithoutFeedback>
          }
        />
        <Block color={'white'} block>
          {this._renderSearchTabs()}
          <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            {this.state.layout ? this._renderGoodsList() : this._renderGoodsGrid()}
          </ScrollView>
        </Block>
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  item_border: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.COLORS.primary,
    borderRadius: 50,
    paddingHorizontal: theme.SIZES.base / 4,
    marginRight: theme.SIZES.base / 2,
  }
})
