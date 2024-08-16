import { View, Text, FlatList, TouchableOpacity, Image, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import axiosInstance from 'services/config/axiosInterceptor';
import { CustomCardContainer, CustomContainer, Loader } from 'components';
import CustomHeader from 'components/CustomHeader';
import { mvs } from 'react-native-size-matters';
import { styles } from './styles';
import { GlobalStyles } from 'styles/GlobalStyles';
import StarRating from "components/starRating/StarRating";
import { COLORS } from 'styles/theme';
import { formatNumberToINR } from 'services/CommonUtils';
import screenNames from 'constants/screenNames';


const Product = () => {

    const navigation = useNavigation<any>();

    const [productData, setProductData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {

        const subscribe = navigation.addListener('focus', () => {
            setLoading(true)
            getProductData();
        })

        return () => {
            subscribe;
        }
    }, [])


    const getProductData = () => {

        axiosInstance.get(`/products`).then((response) => {
            if (response.data?.products.length > 0) {
                // console.log('response.data?.products', response.data?.products)
                setProductData(response.data?.products);
                setLoading(false)
            }else{
                setLoading(false)
            }
        }).catch(error => {
            console.error(error);
            setLoading(false)
         })

    }

    const calculateAmt = (price: number, discountPercentage: number) => {
        const discountAmount = (price * discountPercentage) / 100;
        const discountPrice = price - discountAmount;

        return formatNumberToINR(discountPrice.toFixed(2));
    }

    const returnStockColor = (status: string) => {

        return status == "In Stock" ? COLORS.green : COLORS.red;
    }

    return (
        <CustomContainer>
            
            <Loader loading={loading} />

            <CustomHeader title='Products' />
            
            <FlatList
                data={productData}
                keyExtractor={(item) => `products-${item.id}`}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                    refreshing={false}
                    onRefresh={getProductData}
                    colors={[COLORS.theme]}
                    />
                }
                contentContainerStyle={{ paddingVertical: mvs(20) }}
                renderItem={({ item, index }) => {
                    return (
                        <CustomCardContainer 
                            containerStyle={styles.cardStyle} 
                            onPress={()=>navigation.navigate(screenNames.PRODUCT_DETAILS,{productId:item?.id})}>

                            <Image source={{ uri: item?.thumbnail }} style={styles.productImg} />

                            <View style={{ marginLeft: 20, alignSelf: 'flex-start' }} >

                                <View>
                                    <Text style={GlobalStyles.title} numberOfLines={1}>
                                        {item?.title?.length > 27 ? item?.title?.substring(0, 27) + "..." : item?.title}</Text>
                                </View>

                                <View style={{ marginVertical: 8, }} >
                                    <Text style={[GlobalStyles.desc]} >{item?.brand}</Text>
                                </View>

                                <View style={{ marginBottom: 8, flexDirection: 'row', alignItems: 'center' }} >
                                    <Text style={[GlobalStyles.desc, { textDecorationLine: 'line-through', color: COLORS.greyTxt }]} >{formatNumberToINR(item?.price)} {"\t\t"}</Text>
                                    <Text style={GlobalStyles.desc} >{calculateAmt(item?.price, item?.discountPercentage)} {"\t\t"}</Text>
                                    <Text style={[GlobalStyles.desc, { color: returnStockColor(item?.availabilityStatus) }]} >({item?.availabilityStatus})</Text>
                                </View>

                                <StarRating
                                    disabled={true}
                                    maxStars={5}
                                    rating={item?.rating || 0}
                                    starSize={13}
                                    containerStyle={styles.starStyle}
                                    fullStarColor={COLORS.yellow}
                                    emptyStarColor={COLORS.yellow}
                                />

                            </View>

                        </CustomCardContainer>
                    )
                }}
            />

        </CustomContainer>
    )
}

export default Product