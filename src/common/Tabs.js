import React from 'react';
import {TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Block, Text } from '../components';

const Tab = createMaterialTopTabNavigator();
export default class Tabs {
  
  MyTabBar ({ state, descriptors, navigation, position }, activeStyle) {
    return (
      <Block row>
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
              navigation.navigate(route.name);
            }
          };


          const inputRange = state.routes.map((_, i) => i);
          const opacity = Animated.interpolate(position, {
            inputRange,
            outputRange: inputRange.map(i => (i === index ? 1 : 0)),
          });
          const textStyle = [
            activeStyle,
            {
              borderBottomWidth: 2,
              borderStyle: 'solid',
              borderColor: theme.COLORS.primary,
              color: theme.COLORS.primary
            }
          ]
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={{ flex: 1 }}
            >
              <Block center color={'white'}>
                <Block>
                  <Text
                    style={[isFocused ? textStyle : null, { paddingVertical: theme.SIZES.base / 2 }]}
                    center
                  >{label}</Text>
                </Block>
              </Block>
            </TouchableOpacity>
          );
        })}
      </Block>
    );
  }
  render (tabOptions, activeStyle) {
    return (
      <Tab.Navigator tabBar={props => this.MyTabBar({ ...props }, activeStyle)}>
        {

          tabOptions && tabOptions.map((tab, index) => {
            const comp = () => tab.component()
            return <Tab.Screen key={index} name={tab.name} component={comp} />
          })
        }
      </Tab.Navigator>
    )
  }
}
