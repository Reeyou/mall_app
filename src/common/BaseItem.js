import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { Block, Text } from '../components'
import { theme } from '../constants'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class BaseItem {

  static _renderBaseItem (callback, text, showBorder = true, showIcon = true, isExpand) {
    const itemStyle = [
      styles.setting_item_container,
      showBorder && styles.showBorder
    ]
    return (
      <TouchableWithoutFeedback
        onPress={callback}
        style={itemStyle}
      >
        <Text>{text}</Text>
        {
          showIcon ? <Ionicons
            name={isExpand ? isExpand : 'chevron-forward-outline'}
            size={theme.SIZES.base}
            style={{
              alignSelf: 'center',
              color: theme.COLORS.gray,
            }} /> : null
        }
      </TouchableWithoutFeedback>
    )
  }

  static _renderSettingItem (callback, item, showBorder, showIcon, isExpand) {
    return BaseItem._renderBaseItem(callback, item.name, showBorder, showIcon, isExpand)
  }
}

const styles = StyleSheet.create({
  setting_item_container: {
    paddingHorizontal: theme.SIZES.base,
    height: 44,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  showBorder: {
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.COLORS.gray2,
  }
})
