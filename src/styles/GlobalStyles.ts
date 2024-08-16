import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from './theme';
import { ms, mvs } from 'react-native-size-matters';

export const GlobalStyles = StyleSheet.create({

    rowAlign:{
         flexDirection: 'row', alignItems: 'center'
    },

    heading: {
        color: COLORS.white,
        fontSize: SIZES.f18,
        fontFamily: FONTS.semiBold,
    },
    title: {
        color: COLORS.darkTxt,
        fontSize: SIZES.f16,
        fontFamily: FONTS.semiBold,
    },
    label: {
        color: COLORS.greyTxt,
        fontSize: SIZES.f14,
        fontFamily: FONTS.medium,
    },
    desc: {
        color: COLORS.darkTxt,
        fontSize: SIZES.f14,
        fontFamily: FONTS.medium,
    },
    comment: {
        color: COLORS.darkTxt,
        fontSize: SIZES.f14,
        fontFamily: FONTS.regular,
    },

})