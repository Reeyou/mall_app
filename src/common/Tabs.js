import React, { Component } from 'react';
import { TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Block, Text } from '../components';
import OrderTab from '../pages/Order/OrderTab'
import { theme } from '../constants';

const Tab = createMaterialTopTabNavigator();
export default class Tabs extends Component {

  MyTabBar ({ state, descriptors, navigation, position }) {
    // na
    navigation.addListener('state', (data) => {
      // do something
      if (data) {
        // console.log(data.data.state.routes[0].state.index)
        // const positionX = data.data.state.routes[0].state.index*50
        this.scrollview.scrollTo({ x: 10, y: 0, animated: true });
      } else return
      // e.preventDefault();
    });
    navigation.addListener('transitionStart', () => {
      // do something
      console.log(444)
    });
    const onScroll = () => {
      console.log(111)
    };
    const onScrollBeginDrag = () => {
      console.log('onScrollBeginDrag')
    }
    return (
      <Block style={{ height: 40 }} column middle color={'white'}>
        <ScrollView
          ref={(r) => this.scrollview = r}
          horizontal
          showsHorizontalScrollIndicator={false}
          onScroll={onScroll}
          onScrollBeginDrag={onScrollBeginDrag}
        >
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                  ? options.title
                  : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                console.log(222)
                navigation.navigate(route.name);
              }
            };


            const inputRange = state.routes.map((_, i) => i);
            const fontSize = Animated.interpolate(position, {
              inputRange,
              outputRange: inputRange.map(i => (i === index ? 22 : 16)),
            });
            // const textStyle = {
            //   borderBottomWidth: 2,
            //   borderStyle: 'solid',
            //   borderColor: theme.COLORS.primary,
            //   color: theme.COLORS.primary,
            //   fontSize: 22
            // }
            return (
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                style={{ paddingHorizontal: theme.SIZES.base }}
              >
                <Animated.Text
                  style={{ fontSize }}
                >{label}</Animated.Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </Block>
    );
  }
  render () {
    // const MyTabBar = this.MyTabBar()
    return (
      <Tab.Navigator
        tabBarOptions={{
          scrollEnabled: true,
          tabStyle: {padding: 0, width: 68, height: 44, lineHeight: 44 },
          activeTintColor: theme.COLORS.primary,
          inactiveTintColor: theme.COLORS.black,
          indicatorStyle: styles.indicatorStyle,//标签指示器的样式
          labelStyle: styles.labelStyle,//文字的样式
        }}
        lazy={true}
      >
        {/* {

          props.tabOptions && props.tabOptions.map((tab, index) => {
            const comp = () => tab.component()
            return <Tab.Screen key={index} name={tab.name} component={comp} />
          })
        } */}
        <Tab.Screen name={'直播'} component={OrderTab} />
        <Tab.Screen name={'推荐'} component={OrderTab} />
        <Tab.Screen name={'热门'} component={OrderTab} />
        <Tab.Screen name={'追番'} component={OrderTab} />
        <Tab.Screen name={'影视'} component={OrderTab} />
        <Tab.Screen name={'手机数码'} component={OrderTab} />
        <Tab.Screen name={'舞蹈'} component={OrderTab} />
        <Tab.Screen name={'一起看'} component={OrderTab} />
      </Tab.Navigator>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabStyle: {
    // minWidth: 50 //fix minWidth会导致tabStyle初次加载时闪烁
    padding: 0,
  },
  indicatorStyle: {
    height: 2,
    // width: ,
    backgroundColor: theme.COLORS.primary,
  },
  labelStyle: {
    fontSize: 16,
    // fontWeight: 'bold',
    margin: 0,
  },
  indicatorContainer: {
    alignItems: 'center',
  },
  indicator: {
    color: 'red',
    margin: 10,
  },
});