import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native'
import {
  backgroundDoubleCell,
  backgroundSingleCell,
  doubleCell,
  singleCell
} from './BaseCard'
import { styles } from './goodsStyle'
import BaseCard from './BaseCard'

export default class GoodsCard extends BaseCard {

  // 每日购
  _renderDayCard() {
    return (
      <View style={styles.base_item}>
        <Image
          style={styles.itemPic}
          source={require('../Demo/item/day.png')}
          resizeMode='contain'
        />
        <View style={styles.topContainer}>
          {this.doubleCell({ marginRight: 2 })}
          {this.doubleCell()}
        </View>
      </View>
    )
  }

  // 品质生活
  _renderLifeCard() {
    return (
      <View style={styles.base_item}>
        <Image
          style={styles.itemPic}
          source={require('../Demo/item/life.png')}
          resizeMode='contain'
        />
        <View style={styles.topContainer}>
          {this.backgroundSingleCell({ marginRight: 2 })}
          {this.backgroundDoubleCell()}
        </View>
        <View style={styles.bottomContainer}>
          {this.singleCell({ marginRight: 2 })}
          {this.singleCell({ marginRight: 2 })}
          {this.singleCell({ marginRight: 2 })}
          {this.singleCell()}
        </View>
      </View>
    )
  }
  // 潮玩先锋
  _renderComputerCard() {
    return (
      <View style={styles.base_item}>
        <Image
          style={styles.itemPic}
          source={require('../Demo/item/computer.png')}
          resizeMode='contain'
        />
        <View style={styles.topContainer}>
          {this.backgroundSingleCell({ marginRight: 2 })}
          {this.backgroundDoubleCell()}
        </View>
        <View style={styles.bottomContainer}>
          {this.singleCell({ marginRight: 2 })}
          {this.singleCell({ marginRight: 2 })}
          {this.singleCell({ marginRight: 2 })}
          {this.singleCell()}
        </View>
      </View>
    )
  }

  // 摩登时尚
  _renderFashionCard() {
    return (
      <View style={styles.base_item}>
        <Image
          style={styles.itemPic}
          source={require('../Demo/item/fashion.png')}
          resizeMode='contain'
        />
        <View style={styles.topContainer}>
          {this.backgroundSingleCell({ marginRight: 2 })}
          {this.backgroundDoubleCell()}
        </View>
        <View style={styles.bottomContainer}>
          {this.doubleCell({ marginRight: 2, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 })}
          {this.doubleCell({ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 })}
        </View>
        <View style={styles.bottomContainer}>
          {this.singleCell({ marginRight: 2 })}
          {this.singleCell({ marginRight: 2 })}
          {this.singleCell({ marginRight: 2 })}
          {this.singleCell()}
        </View>
      </View>
    )
  }

  // 吃喝玩乐
  _renderDrinkCard() {
    return (
      <View style={styles.base_item}>
        <Image
          style={styles.itemPic}
          source={require('../Demo/item/drink.png')}
          resizeMode='contain'
        />
        <View style={styles.topContainer}>
          {this.backgroundSingleCell({ marginRight: 2 })}
          {this.backgroundDoubleCell()}
        </View>
        <View style={styles.bottomContainer}>
          {this.doubleCell({ marginRight: 2 })}
          {this.doubleCell()}
        </View>
      </View>
    )
  }

  render() {
    console.log(this.props.goodsCardType)
    return (
      <View>
        {
          this.props.goodsCardType == 'day' ?
            this._renderDayCard()
            : this.props.goodsCardType == 'life' ?
              this._renderLifeCard()
              : this.props.goodsCardType == 'computer' ?
                this._renderComputerCard()
                : this.props.goodsCardType == 'fashion' ?
                  this._renderFashionCard()
                  : this.props.goodsCardType == 'drink' ?
                    this._renderDrinkCard()
                    : null
        }
      </View>
    )
  }
}