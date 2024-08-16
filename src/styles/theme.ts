import { Dimensions } from 'react-native';
import {
  scale as sc,
  moderateScale as ms,
  moderateVerticalScale as mvs,
  verticalScale as vs,
} from 'react-native-size-matters';
const { width, height, fontScale } = Dimensions.get('window');

const COLORS = {
  theme: "#7A87FF",

  yellow: "#F8D335",

  card: "#FAFAFA",
  bg: "#FAFAFA",

  lightGreen: '#C2E3D3',

  red: "#FF5C5C",
  green: "#41D37C",
  borderColor: "#E7ECED",
  disable: "#E7ECED",

  darkTxt: "#111B3E",
  greyTxt: '#969696',
  lightGrey: '#F8F8F8',

  white: '#FFFFFF',
  black: '#000000',

  transparent: 'transparent',
};

const SIZES = {
  // global sizes

  radius8: ms(8),
  radius: ms(10),
  radius12: ms(12),
  radius15: ms(15),
  radius20: ms(20),

  padding20: ms(20),
  padding15: ms(15),
  padding: ms(10),

  largeTitle: ms(40),
  f30: ms(30),
  f24: ms(24),
  f22: ms(22),
  f20: ms(20),
  f18: ms(18),
  f16: ms(16),
  f14: ms(14),
  f12: ms(12),
  f10: ms(10),
  f8: ms(8),

  // app dimensions
  width,
  height,

  //card
  cardWidth: width - ms(20),


  marginVertical: mvs(20),
  paddingHorizontal: ms(15),
};

const FONTS = {
  light: 'Inter-Light',
  regular: 'Inter-Regular',
  medium: 'Inter-Medium',
  semiBold: 'Inter-SemiBold',
  bold: 'Inter-Bold',
};

export { COLORS, FONTS, SIZES };
