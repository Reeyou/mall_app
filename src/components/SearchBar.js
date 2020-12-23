import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  TextInput,
  StyleSheet,
  View,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { COLORS } from '../constants'

export default class SearchBar extends Component {

  static propTypes = {
    placeholder: PropTypes.string,
  };

  onChangeText (val) {
    this.props.handleClick(val)
  }
  render () {
    return (
      <View>
        <EvilIcons name={'search'} size={26} style={styles.search} />
        <TextInput
          style={styles.TextInput}
          onChangeText={(val) => this.onChangeText(val)}
          placeholder={this.props.placeholder}
          placeholderTextColor={COLORS.bgGray}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  TextInput: {
    fontSize: 13,
    color: '#000',
    height: 34,
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
