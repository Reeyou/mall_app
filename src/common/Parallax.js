import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { Block, Text, Header } from '../components'
import { theme } from '../constants'
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Parallax {
  constructor(props) {
    this.props = props
  }
  getRightButton () {
    return (
      <Block row center>
        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Setting')}>
          <Ionicons
            name={'settings-outline'}
            size={22}
            style={{ color: 'white' }}
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Ionicons
            name={'chatbubble-ellipses-outline'}
            size={22}
            style={{ color: 'white', marginLeft: 10 }}
          />
        </TouchableWithoutFeedback>
      </Block>
    );
  }
  goLogin () {
    this.props.navigation.navigate('Login')
  }
  getParallaxConfig () {
    let config = {}
    const statusBar = {
      backgroundColor: 'transparent',
      translucent: true
    };
    const userBlock = <Block row center margin={[0, 0, 0, theme.SIZES.base / 2]}>
      <Text white>登录/注册</Text>
      <Ionicons
        name={'chevron-forward-outline'}
        size={theme.SIZES.base}
        style={{
          color: 'white',
        }}
      />
    </Block>
    // config.renderBackground = () => (
    //   <Block key="background">
    //     <Block block style={{ backgroundColor: '#000' }}></Block>
    //   </Block>
    // )
    config.renderForeground = () => (
      <Block>
        <TouchableWithoutFeedback
          key="parallax-header"
          style={{ height: 200 }}
          onPress={() => this.goLogin()}
        >
          <Block
            row
            center
            block
            margin={[theme.statusBarHeight_android, 0, 0, 0]}
            padding={[0, theme.SIZES.base]}
          >
            <Image
              style={styles.avatar}
              source={require('../assets/images/12.png')}
              resizeMode="cover"
            />
            {userBlock}
          </Block>
        </TouchableWithoutFeedback>
      </Block>
    )
    config.renderStickyHeader = () => (
      <TouchableWithoutFeedback key="sticky-header" onPress={() => this.goLogin()}>
        <Block row center padding={[theme.statusBarHeight_android + 5, theme.SIZES.base * 2, 0]}>
          <Image
            style={{ width: 30, height: 30, borderRadius: 30 }}
            source={require('../assets/images/12.png')}
            resizeMode="cover"
          />
          {userBlock}
        </Block>
      </TouchableWithoutFeedback>
    );
    config.renderFixedHeader = () => (
      <Block key="fixed-header" style={styles.fixedSection}>
        <Header rightContent={this.getRightButton()} statusBar={statusBar} />
      </Block>
    );

    return config
  }
  render (contentView) {
    const parallaxConfig = this.getParallaxConfig()
    return (
      <ParallaxScrollView
        showsVerticalScrollIndicator={false}
        backgroundColor={theme.COLORS.primary}
        contentBackgroundColor="white"
        parallaxHeaderHeight={200}
        stickyHeaderHeight={theme.statusBarHeight_android + 40}
        {...parallaxConfig}>
        {contentView}
      </ParallaxScrollView>
    )
  }
}

const styles = StyleSheet.create({
  stickySectionText: {
    color: 'white',
    fontSize: 20,
    margin: 10,
  },
  fixedSection: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    borderRadius: 50,
    width: 60,
    height: 60
  }
});
