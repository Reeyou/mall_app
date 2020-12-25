import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

import { SIZES, FONTS, COLORS } from "../constants";

export default class Typography extends Component {
  render() {
    const {
      h1,
      h2,
      h3,
      title,
      body,
      header,
      caption,
      small,
      size,
      transform,
      align,
      // styling
      regular,
      bold,
      semibold,
      medium,
      weight,
      light,
      center,
      right,
      spacing, // letter-spacing
      height, // line-height
      // colors
      color,
      accent,
      primary,
      secondary,
      tertiary,
      black,
      black1,
      white,
      gray,
      gray1,
      gray2,
      lightGray,
      style,
      children,
      ...props
    } = this.props;

    const textStyles = [
      styles.text,
      h1 && styles.h1,
      h2 && styles.h2,
      h3 && styles.h3,
      title && styles.title,
      body && styles.body,
      header && styles.header,
      caption && styles.caption,
      small && styles.small,
      size && { fontSize: size },
      transform && { textTransform: transform },
      align && { textAlign: align },
      height && { lineHeight: height },
      spacing && { letterSpacing: spacing },
      weight && { fontWeight: weight },
      regular && styles.regular,
      bold && styles.bold,
      semibold && styles.semibold,
      medium && styles.medium,
      light && styles.light,
      center && styles.center,
      right && styles.right,
      color && styles[color],
      color && !styles[color] && { color },
      // color shortcuts
      accent && styles.accent,
      primary && styles.primary,
      secondary && styles.secondary,
      tertiary && styles.tertiary,
      black && styles.black,
      black1 && styles.black1,
      white && styles.white,
      gray && styles.gray,
      gray1 && styles.gray1,
      gray2 && styles.gray2,
      lightGray && styles.lightGray,
      style // rewrite predefined styles
    ];

    return (
      <Text style={textStyles} {...props}>
        {children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  // default style
  text: {
    fontSize: SIZES.font,
    color: COLORS.black
  },
  // variations
  regular: {
    fontWeight: "normal"
  },
  bold: {
    fontWeight: "bold"
  },
  semibold: {
    fontWeight: "500"
  },
  medium: {
    fontWeight: "500"
  },
  light: {
    fontWeight: "200"
  },
  // position
  center: { textAlign: "center" },
  right: { textAlign: "right" },
  // colors
  accent: { color: COLORS.accent },
  primary: { color: COLORS.primary },
  secondary: { color: COLORS.secondary },
  tertiary: { color: COLORS.tertiary },
  black: { color: COLORS.black },
  black1: { color: COLORS.black1 },
  white: { color: COLORS.white },
  gray: { color: COLORS.gray },
  gray1: { color: COLORS.gray1 },
  gray2: { color: COLORS.gray2 },
  lightGray: { color: COLORS.lightGray },
  // fonts
  h1: FONTS.h1,
  h2: FONTS.h2,
  h3: FONTS.h3,
  title: FONTS.title,
  body: FONTS.body,
  header: FONTS.header,
  caption: FONTS.caption,
  small: FONTS.small
});