import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home, Category, Discover, ShopCart, User, User1, Login} from '../pages';

import {icons, COLORS} from '../constants';

const Tab = createBottomTabNavigator();


const tabOptions = {
  showLabel: true,
  activeTintColor: 'red',
    labelStyle: {
        fontSize: 10,
        bottom: 4,
    },
  style: {
    height: 48,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
};

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={tabOptions}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          switch (route.name) {
            case 'Home':
              return (
                <Image
                  source={
                    focused ? icons.home : icons.home_off
                  }
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
              );
            case 'Category':
              return (
                <Image
                  source={focused ? icons.category : icons.category_off}
                  resizeMode="contain"
                  style={styles.tabIcon}
                />
              );
            case 'Discover':
              return (
                <Image
                  source={focused ? icons.information : icons.information_off}
                  resizeMode="contain"
                  style={styles.tabIcon}
                />
              );
              case 'ShopCart':
              return (
                <Image
                  source={focused ? icons.cart : icons.cart_off}
                  resizeMode="contain"
                  style={styles.tabIcon}
                />
              );
            case 'User':
              return (
                <Image
                  source={focused ? icons.user : icons.user_off}
                  resizeMode="contain"
                  style={styles.tabIcon}
                />
              );
          }
        },
      })}>
      <Tab.Screen name="Home" component={Home} options={{tabBarLabel: '首页'}} />
      <Tab.Screen name="Category" component={Category} options={{tabBarLabel: '分类'}} />
      <Tab.Screen name="Discover" component={Discover} options={{tabBarLabel: '发现'}} />
      <Tab.Screen name="ShopCart" component={ShopCart} options={{tabBarLabel: '购物车'}} />
      <Tab.Screen name="User" component={User1} options={{tabBarLabel: '我的'}} />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
    tabIcon: {
      width: 26,
      height: 26,
    },
  });
export default Tabs;
