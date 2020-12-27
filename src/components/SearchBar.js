import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  TextInput,
  StyleSheet,
  View,
} from 'react-native';
import { Block, Text } from '../components'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { COLORS } from '../constants'

export default class SearchBar extends Component {

  static propTypes = {
    placeholder: PropTypes.string,
    onInput: PropTypes.bool,
  };

  static defaultProps = {
    onInput: true
  }

  onChangeText (val) {
    this.props.onChangeText(val)
  }
  onPress () {
    this.props.onPress()
  }
  render () {
    return (
      <TouchableWithoutFeedback>
        <EvilIcons name={'search'} size={26} style={styles.search} />
        {
          this.props.onInput ?
            <TextInput
              style={styles.TextInput}
              onChangeText={(val) => this.onChangeText(val)}
              placeholder={this.props.placeholder}
              placeholderTextColor={COLORS.gray}
            />
            : <TouchableWithoutFeedback
              style={styles.TextInput}
              onPress={() => this.onPress()}
            >
              <Text color={'#bbb'}>{this.props.placeholder}</Text>
            </TouchableWithoutFeedback>
        }
      </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
  TextInput: {
    fontSize: 13,
    color: '#000',
    height: 34,
    justifyContent: 'center',
    borderRadius: 14,
    padding: 0,
    paddingLeft: 34,
    paddingRight: 10,
    backgroundColor: '#f8f8f8',
    zIndex: -999,
  },
  search: {
    color: '#bbb',
    position: 'absolute',
    top: 6,
    left: 8,
    zIndex: 999,
  },
});
