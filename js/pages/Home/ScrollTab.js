import React,{Component} from 'react'
import {
  TouchableOpacity,
  View,
  Text
} from 'react-native'

export default class ScrollTab extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TouchableOpacity>
        <Text>{this.props.tabLable}</Text>
      </TouchableOpacity>
    )
  }
}