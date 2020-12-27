import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Block, Header, Text, SearchBar } from '../components'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { theme } from '../constants'
import Utils from '../utils/utils'

export default class Search extends Component {

  _renderRecentView (title, showHandle = true) {
    return <Block cloumn margin={[theme.SIZES.base / 2,0]}>
      <Block row space={'between'}>
        <Text header bold>{title}</Text>
        {
          showHandle ?
            <Block row center>
              <Text body black1>清除</Text>
              <Ionicons
                name={'trash-outline'}
                size={theme.SIZES.body}
                style={{ color: theme.COLORS.black1 }}
              />
            </Block>
            : null
        }
      </Block>
      <Block row wrap margin={[0, 0, 0, -theme.SIZES.base / 2]}>
        <Text caption style={styles.recent_item}>mate30</Text>
        <Text caption style={styles.recent_item}>mate30</Text>
        <Text caption style={styles.recent_item}>mate30</Text>
        <Text caption style={styles.recent_item}>mate30</Text>
        <Text caption style={styles.recent_item}>mate30</Text>
        <Text caption style={styles.recent_item}>mate30</Text>
      </Block>
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
            <TouchableWithoutFeedback onPress={() => Utils.goBack(this.props.navigation)}>
              <Ionicons
                name={'arrow-back-outline'}
                size={theme.SIZES.icon}
                style={{ color: theme.COLORS.black }}
              />
            </TouchableWithoutFeedback>
          }
          rightContent={
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('SearchResult')}>
              <Text>搜索</Text>
            </TouchableWithoutFeedback>
          }
        />
        <Block block padding={[theme.SIZES.base / 2, theme.SIZES.base]} color={'white'}>
          {this._renderRecentView('最近搜索')}
          {this._renderRecentView('搜索发现', false)}
        </Block>
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  recent_item: {
    backgroundColor: theme.COLORS.gray1,
    borderRadius: 50,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginTop: theme.SIZES.base,
    marginLeft: theme.SIZES.base / 2,
    color: theme.COLORS.black,
  }
})
