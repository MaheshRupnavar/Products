import {
    StyleProp,
    StyleSheet,
    TouchableOpacity,
    ViewStyle,
} from 'react-native';
import React from 'react';
import { ms, mvs } from 'react-native-size-matters';
import { COLORS, SIZES } from 'styles/theme';

type Props = {
    containerStyle?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
    onPress?: () => void;
};


const CustomCardContainer: React.FC<Props> = ({
    containerStyle,
    children,
    onPress
}) => {

    return (
        <TouchableOpacity
            disabled={onPress ? false : true}
            onPress={onPress}
            activeOpacity={0.4}
            style={[styles.cardStyle, containerStyle]}>
            {children}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardStyle:{
        alignSelf: 'center',
        width:SIZES.cardWidth,
        paddingHorizontal:mvs(10),
        paddingVertical:mvs(10),
        minHeight:mvs(50),
        borderRadius:SIZES.radius,
        borderWidth:ms(1),
        borderColor:COLORS.borderColor,
        backgroundColor:COLORS.white
    }
})

export default CustomCardContainer;
