import React,{Component} from 'react'
import {
  TouchableOpacity,
  View,
  Text
} from 'react-native'
import Recommend from './Demo'

export default class ScrollTab extends Component {
  constructor(props) {
    super(props)
  }

  renderView() {
    switch(this.props.tabLable) {
      case '推荐':
        return <Recommend />;
      default:
        break;
    }
  }
  render() {
    console.log(this.props)
    return (
      <View>
        {this.renderView()}
      </View>
    )
  }
}