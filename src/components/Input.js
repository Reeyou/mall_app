import React, { Component } from "react";
import { StyleSheet, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import Text from "./Text";
import Block from "./Block";
import Button from "./Button";
import { SIZES, COLORS } from "../constants";

export default class Input extends Component {
  state = {
    toggleSecure: false
  };

  renderLabel () {
    const { label, error, labelWidth, labelStyle } = this.props;

    return (
      <Block flex={false} style={labelWidth ? { width: labelWidth } : null}>
        {label ? (
          <Text black={!error} accent={error} style={labelStyle}>
            {label}
          </Text>
        ) : null}
      </Block>
    );
  }

  renderToggle () {
    const { secure, rightLabel } = this.props;
    const { toggleSecure } = this.state;

    if (!secure) return null;

    return (
      <Button
        style={styles.toggle}
        onPress={() => this.setState({ toggleSecure: !toggleSecure })}
      >
        {rightLabel ? (
          rightLabel
        ) : (
            <Ionicons
              color={COLORS.gray}
              size={SIZES.font * 1.35}
              name={!toggleSecure ? "md-eye" : "md-eye-off"}
            />
          )}
      </Button>
    );
  }

  renderRight () {
    const { rightLabel, rightIcon, rightStyle, disabled, onRightPress } = this.props;

    if (!rightLabel&&!rightIcon) return null;

    return (
      rightLabel&&!rightIcon
        ? <Button
          disabled={disabled}
          style={[styles.toggle, rightStyle]}
          onPress={() => onRightPress && onRightPress()}
        >
          {rightLabel}
        </Button>
        : <Block style={[styles.suffix, rightStyle]}>
          {rightIcon}
        </Block>
    );
  }

  render () {
    const { row, email, phone, number, secure, error, placeholder, style, ...props } = this.props;

    const { toggleSecure } = this.state;
    const isSecure = toggleSecure ? false : secure;

    const inputStyles = [
      styles.input,
      error && { borderColor: COLORS.accent },
      style
    ];

    const inputType = email
      ? "email-address"
      : number
        ? "numeric"
        : phone
          ? "phone-pad"
          : "default";

    return (
      <Block
        center
        style={row ? { flexDirection: 'row' } : null}
      // margin={[SIZES.base, 0]}
      >
        {this.renderLabel()}
        <TextInput
          style={inputStyles}
          secureTextEntry={isSecure}
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType={inputType}
          placeholder={placeholder}
          placeholderTextColor={COLORS.lightGray}
          {...props}
        />
        {this.renderToggle()}
        {this.renderRight()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.black,
    borderRadius: SIZES.radius,
    fontSize: SIZES.caption,
    fontWeight: "500",
    color: COLORS.black,
    height: SIZES.base * 2,
    paddingHorizontal: SIZES.base / 2,
    paddingVertical: 0,
    // marginTop: SIZES.base / 2
  },
  toggle: {
    position: "absolute",
    alignItems: "center",
    width: SIZES.base * 2,
    height: SIZES.base * 2,
    top: SIZES.base * 1.7,
    right: SIZES.base / 2,
    backgroundColor: 'transparent'
  },
  suffix: {
    position: "absolute",
    alignItems: "center",
    width: SIZES.base * 2,
    height: SIZES.base * 2,
    top: SIZES.base/2,
    right: 0,
  }
});