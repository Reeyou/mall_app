import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { Block, Text } from '../components'
import { theme } from '../constants'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class ViewUtil {

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
    return ViewUtil._renderBaseItem(callback, item.name, showBorder, showIcon, isExpand)
  }
  /**
    * 获取左侧返回按钮
    * @param callback
    * @returns {XML}
    */
  static getLeftBackButton (callback, color = theme.COLORS.black) {
    return <TouchableWithoutFeedback
      onPress={callback}>
      <Ionicons
        name={'chevron-back-outline'}
        size={theme.SIZES.icon}
        style={{ color }} />
    </TouchableWithoutFeedback>;
  }

  static getRightBackButton (callback, color) {
    return <TouchableWithoutFeedback
      onPress={callback}>
      <Ionicons
        name={'chevron-forward-outline'}
        size={theme.SIZES.icon}
        style={{ color }} />
    </TouchableWithoutFeedback>;
  }

  /**
   * 获取右侧文字按钮
   * @param title
   * @param callback
   * @returns {XML}
   */
  static getRightButton (title, callback) {
    return <TouchableWithoutFeedback
      style={{ alignItems: 'center' }}
      onPress={callback}>
      <Text style={{ fontSize: 20, color: '#FFFFFF', marginRight: 10 }}>{title}</Text>
    </TouchableWithoutFeedback>;
  }
  /**
     * 获取分享按钮
     * @param callback
     * @returns {XML}
     */
  static getShareButton (callback, color) {
    return <TouchableWithoutFeedback
      underlayColor={'transparent'}
      onPress={callback}
    >
      <Ionicons
        name={'share-outline'}
        size={theme.SIZES.icon}
        style={{ color }} />
    </TouchableWithoutFeedback>;
  }
   /**
     * 获取更多按钮
     * @param callback
     * @returns {XML}
     */
    static getMoreButton (callback, color) {
      return <TouchableWithoutFeedback
        underlayColor={'transparent'}
        onPress={callback}
      >
        <Ionicons
          name={'ellipsis-horizontal'}
          size={theme.SIZES.icon}
          style={{ color }} />
      </TouchableWithoutFeedback>;
    }
}
 

const styles = StyleSheet.create({
  setting_item_container: {
    // alignSelf
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
