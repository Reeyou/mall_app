import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
    // base colors
    accent: "#F3534A",
    primary: '#e93b3d', // red
    secondary: '#e43130', // Gray
    tertiary: '#cacfd9', //

    // colors
    black: '#323643',
    white: '#FFFFFF',
    lightGray: '#C5CCD6',
    gray: '#8b9097',
};
export const SIZES = {
    // global sizes
    base: 16,
    font: 14,
    radius: 6,
    padding: 24,

    // font sizes
    largeTitle: 50,
    h1: 26,
    h2: 20,
    h3: 18,
    title: 18,
    header: 16,
    body: 14,
    caption: 12,
    small: 10,
    // app dimensions
    width,
    height,
};
export const FONTS = {
    largeTitle: {
        fontFamily: 'Roboto-Black',
        fontSize: SIZES.largeTitle,
        lineHeight: 55,
    },
    h1: {fontFamily: 'Roboto-Black', fontSize: SIZES.h1},
    h2: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h2},
    h3: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h3},
    body: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body},
    title: {fontFamily: 'Roboto-Regular', fontSize: SIZES.title},
    caption: {fontFamily: 'Roboto-Regular', fontSize: SIZES.caption},
    small: {fontFamily: 'Roboto-Regular', fontSize: SIZES.small},
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
