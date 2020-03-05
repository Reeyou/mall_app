'use strict'

import {
  Dimensions
} from 'react-native'

const viewPortWidth = 750;//这里是设计稿的宽度
export const Px2dp = (px) => {
  return px * Dimensions.get('window').width / viewPortWidth
}
