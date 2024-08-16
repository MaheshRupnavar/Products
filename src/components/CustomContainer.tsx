import {
    StyleProp,
    View,
    ViewStyle,
} from 'react-native';
import React from 'react';
import { COLORS } from 'styles/theme';

type Props = {
    containerStyle?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
};


const CustomContainer: React.FC<Props> = ({
    containerStyle,
    children,

}) => {

    return (
        <View style={[{ flex: 1, backgroundColor: COLORS.bg }, containerStyle]}>
            {children}
        </View>
    );
};

export default CustomContainer;
