import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import { COLORS, SIZES } from "../constants";

export default class Block extends Component {
  handleMargins () {
    const { margin } = this.props;
    if (typeof margin === "number") {
      return {
        marginTop: margin,
        marginRight: margin,
        marginBottom: margin,
        marginLeft: margin
      };
    }

    if (typeof margin === "object") {
      const marginSize = Object.keys(margin).length;
      switch (marginSize) {
        case 1:
          return {
            marginTop: margin[0],
            marginRight: margin[0],
            marginBottom: margin[0],
            marginLeft: margin[0]
          };
        case 2:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[0],
            marginLeft: margin[1]
          };
        case 3:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[2],
            marginLeft: margin[1]
          };
        default:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[2],
            marginLeft: margin[3]
          };
      }
    }
  }

  handlePaddings () {
    const { padding } = this.props;
    if (typeof padding === "number") {
      return {
        paddingTop: padding,
        paddingRight: padding,
        paddingBottom: padding,
        paddingLeft: padding
      };
    }

    if (typeof padding === "object") {
      const paddingSize = Object.keys(padding).length;
      switch (paddingSize) {
        case 1:
          return {
            paddingTop: padding[0],
            paddingRight: padding[0],
            paddingBottom: padding[0],
            paddingLeft: padding[0]
          };
        case 2:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[0],
            paddingLeft: padding[1]
          };
        case 3:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[2],
            paddingLeft: padding[1]
          };
        default:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[2],
            paddingLeft: padding[3]
          };
      }
    }
  }
  handleRadius () {
    const { radius } = this.props;
    if (typeof radius === "number") {
      return {
        borderTopStartRadius: radius,
        borderBottomStartRadius: radius,
        borderTopEndRadius: radius,
        borderBottomEndRadius: radius
      };
    }
    if (typeof radius === "object") {
      const radiusSize = Object.keys(radius).length;
      switch (radiusSize) {
        case 1:
          return {
            borderTopStartRadius: radius[0],
            borderBottomStartRadius: radius[0],
            borderTopEndRadius: radius[0],
            borderBottomEndRadius: radius[0]
          };
        case 2:
          return {
            borderTopStartRadius: radius[0],
            borderBottomStartRadius: radius[1],
            borderTopEndRadius: radius[0],
            borderBottomEndRadius: radius[1]
          };
        case 3:
          return {
            borderTopStartRadius: radius[0],
            borderBottomStartRadius: radius[1],
            borderTopEndRadius: radius[2],
            borderBottomEndRadius: radius[1]
          };
        default:
          return {
            borderTopStartRadius: radius[0],
            borderBottomStartRadius: radius[1],
            borderTopEndRadius: radius[2],
            borderBottomEndRadius: radius[3]
          };
      }
    }
  }
  render () {
    const {
      block,
      flex,
      row,
      column,
      center,
      middle,
      left,
      right,
      top,
      bottom,
      card,
      radius,
      shadow,
      color,
      space,
      padding,
      margin,
      animated,
      wrap,
      style,
      children,
      ...props
    } = this.props

    const blockStyles = [
      block && styles.block,
      flex && { flex },
      flex === false && { flex: 0 }, // reset / disable flex
      row && styles.row,
      column && styles.column,
      center && styles.center,
      middle && styles.middle,
      left && styles.left,
      right && styles.right,
      top && styles.top,
      bottom && styles.bottom,
      margin && { ...this.handleMargins() },
      padding && { ...this.handlePaddings() },
      radius && { ...this.handleRadius() },
      card && styles.card,
      shadow && styles.shadow,
      space && { justifyContent: `space-${space}` },
      wrap && { flexWrap: "wrap" },
      color && styles[color], // predefined styles colors for backgroundColor
      color && !styles[color] && { backgroundColor: color }, // custom backgroundColor
      style // rewrite predefined styles
    ];

    if (animated) {
      return (
        <Animated.View style={blockStyles} {...props}>
          {children}
        </Animated.View>
      );
    }
    return (
      <View style={blockStyles} {...props}>
        {children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  block: {
    flex: 1
  },
  row: {
    flexDirection: "row"
  },
  column: {
    flexDirection: "column"
  },
  card: {
    borderRadius: SIZES.radius
  },
  center: {
    alignItems: "center"
  },
  middle: {
    justifyContent: "center"
  },
  left: {
    justifyContent: "flex-start"
  },
  right: {
    justifyContent: "flex-end"
  },
  top: {
    justifyContent: "flex-start"
  },
  bottom: {
    justifyContent: "flex-end"
  },
  shadow: {
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 13,
    elevation: 2
  },
  accent: { backgroundColor: COLORS.accent },
  primary: { backgroundColor: COLORS.primary },
  secondary: { backgroundColor: COLORS.secondary },
  tertiary: { backgroundColor: COLORS.tertiary },
  black: { backgroundColor: COLORS.black },
  white: { backgroundColor: COLORS.white },
  gray: { backgroundColor: COLORS.gray },
  lightGray: { backgroundColor: COLORS.lightGray }
})
