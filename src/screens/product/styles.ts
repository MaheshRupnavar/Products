import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from 'styles/theme';
import { ms, mvs } from 'react-native-size-matters';

export const styles = StyleSheet.create({
    cardStyle: {
        marginBottom: mvs(15),
        flexDirection: 'row',
        alignItems: 'center'
    },
    productImg: {
        height: ms(80),
        width: ms(70),
        borderRadius: SIZES.radius
    },
    starStyle: {
        paddingTop: 0,
        margin: 0,
        width: ms(80),
        height: mvs(15),
    },
    productDetailsImg: {
        width: SIZES.cardWidth,
        height: mvs(180),
        // backgroundColor:COLORS.greyTxt
    },
    productDetailContainer: {
        width: SIZES.cardWidth,
        alignSelf: 'center',
        marginTop: mvs(20),
    }
})