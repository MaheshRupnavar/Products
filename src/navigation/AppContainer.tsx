import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { COLORS } from 'styles/theme';
import screenNames from 'constants/screenNames';
import { Product, ProductDetails } from 'screens';


const Stack = createStackNavigator();

const AppContainer = () => {
    return (
        <NavigationContainer>
            <View style={{ flex: 1 }} >

                <StatusBar
                    translucent
                    backgroundColor={COLORS.theme}
                    barStyle={"light-content"}
                />

                <Stack.Navigator screenOptions={{ cardShadowEnabled: true }}>
                    <Stack.Group screenOptions={{
                        detachPreviousScreen: false,
                        cardStyle: { backgroundColor: COLORS.white },
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                    }}>
                        <Stack.Screen
                            name={screenNames.PRODUCT}
                            component={Product}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name={screenNames.PRODUCT_DETAILS}
                            component={ProductDetails}
                            options={{ headerShown: false }}
                        />

                    </Stack.Group>
                </Stack.Navigator>

            </View>
        </NavigationContainer>
    )
}

export default AppContainer