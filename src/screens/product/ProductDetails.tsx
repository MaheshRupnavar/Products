import { View, Text, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CustomContainer, CustomHeader, Loader } from 'components'
import { useNavigation, useRoute } from '@react-navigation/native'
import axiosInstance from 'services/config/axiosInterceptor'
import { styles } from './styles'
import { COLORS, SIZES } from 'styles/theme'
import ProductImageCarousel from './components/ProductImageCarousel'
import { mvs } from 'react-native-size-matters'
import { GlobalStyles } from 'styles/GlobalStyles'
import Icon from 'react-native-vector-icons/Ionicons'
import { formatNumberToINR } from 'services/CommonUtils'
import StarRating from "components/starRating/StarRating";
import images from 'constants/images'
import moment from 'moment'



const ProductDetails = () => {

  const productId = useRoute<any>().params?.productId;
  const navigation = useNavigation<any>();

  const [productDetails, setProductDetails] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {

    const subscribe = navigation.addListener('focus', () => {
      setLoading(true)
      getData();
    })

    return () => {
      subscribe;
    }
  }, [])


  const getData = () => {

    axiosInstance.get(`/products/${productId}`).then(response => {
      // console.log('response.data', response.data)
      if (response?.data?.hasOwnProperty("id")) {
        setProductDetails(response?.data);
        setLoading(false)
      } else {
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

    // console.log(discountPrice.toFixed(2));

    return formatNumberToINR(discountPrice.toFixed(2));
  }

  const returnStockColor = (status: string) => {

    return status == "In Stock" ? COLORS.green : COLORS.red;
  }

  return (
    <CustomContainer>

      <Loader loading={loading} />
      <CustomHeader
        title={productDetails?.title}
        isBack={true}
        backPress={() => navigation.goBack()} />

      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 20 }} >

        <View style={{ flex: 1, }} >

          <View style={{ height: mvs(210) }} >
            <ProductImageCarousel data={productDetails?.images} />
          </View>

          <View style={styles.productDetailContainer} >

            <Text style={GlobalStyles.title}>{productDetails?.title}({productDetails?.sku})</Text>

            <View style={{ flexDirection: 'row', alignItems: "center", marginVertical: mvs(15) }} >
              <Icon name='arrow-down' size={20} color={COLORS.lightGreen} />
              <Text style={[GlobalStyles.desc, { color: COLORS.green }]} >{productDetails?.discountPercentage}% {"\t\t"}</Text>
              <Text style={[GlobalStyles.desc, { textDecorationLine: 'line-through', color: COLORS.greyTxt }]} >{formatNumberToINR(productDetails?.price)} {"\t\t"}</Text>
              <Text style={GlobalStyles.desc} >{calculateAmt(productDetails?.price, productDetails?.discountPercentage)} {"\t\t"}</Text>
              <Text style={[GlobalStyles.desc, { color: returnStockColor(productDetails?.availabilityStatus) }]} >({productDetails?.availabilityStatus})</Text>
            </View>

            <StarRating
              disabled={true}
              maxStars={5}
              rating={productDetails?.rating || 0}
              starSize={20}
              containerStyle={{ ...styles.starStyle, height: 22 }}
              fullStarColor={COLORS.yellow}
              emptyStarColor={COLORS.yellow}
            />

            <View style={[GlobalStyles.rowAlign, { marginVertical: mvs(15) }]} >
              <Text style={GlobalStyles.title} >Shipping:{"\t\t"}</Text>
              <Text style={GlobalStyles.desc} >{productDetails?.shippingInformation}</Text>
            </View>
            <View style={[GlobalStyles.rowAlign, { marginBottom: mvs(15) }]} >
              <Text style={GlobalStyles.title} >Minimum Order Qty:{"\t\t"}</Text>
              <Text style={GlobalStyles.desc} >{productDetails?.minimumOrderQuantity}</Text>
            </View>

            <Text style={GlobalStyles.title} >Product Details:</Text>

            <View style={[GlobalStyles.rowAlign, { marginTop: mvs(10) }]} >
              <Text style={[GlobalStyles.label, { width: '30%' }]} >Brand:{"\t\t"}</Text>
              <Text style={GlobalStyles.desc} >{productDetails?.brand}</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginVertical: mvs(5) }} >
              <Text style={[GlobalStyles.label, { width: '30%' }]} >Description:{"\t\t"}</Text>
              <Text style={[GlobalStyles.desc, { width: '70%' }]} >{productDetails?.description}</Text>
            </View>

            <View style={[GlobalStyles.rowAlign,]} >
              <Text style={[GlobalStyles.label, { width: '30%' }]} >Warranty:{"\t\t"}</Text>
              <Text style={GlobalStyles.desc} >{productDetails?.warrantyInformation}</Text>
            </View>
            <View style={[GlobalStyles.rowAlign, { marginVertical: mvs(5) }]} >
              <Text style={[GlobalStyles.label, { width: '30%' }]} >Policy:{"\t\t"}</Text>
              <Text style={GlobalStyles.desc} >{productDetails?.returnPolicy}</Text>
            </View>

            <View style={{ marginTop: mvs(15) }} >
              <Text style={GlobalStyles.title} >Reviews:</Text>
            </View>

            {
              productDetails?.reviews && productDetails?.reviews.map((item: any,index:number) => {
                return (
                  <View style={{ marginTop: mvs(15) }} key={index.toString()} >

                    <View style={[GlobalStyles.rowAlign,]} >
                      <Image source={images.user} style={{ height: 25, width: 25 }} />
                      <View style={{ marginLeft: 8 }} >
                        <Text style={GlobalStyles.desc} >{item?.reviewerName}</Text>
                      </View>
                    </View>

                    <View style={{ marginVertical: 10 }} >
                      <Text style={GlobalStyles.comment} >{item?.comment}</Text>
                    </View>
                    <View style={[GlobalStyles.rowAlign,]} >
                      <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={item?.rating || 0}
                        starSize={13}
                        containerStyle={{ ...styles.starStyle }}
                        fullStarColor={COLORS.yellow}
                        emptyStarColor={COLORS.yellow}
                      />
                      <View style={{ marginLeft: 15 }} >
                        <Text style={[GlobalStyles.label, { fontSize: SIZES.f10 }]} >{moment(item?.date).format("DD MMM YYYY")}</Text>
                      </View>
                      <View>
                      </View>
                    </View>

                  </View>

                )
              })
            }

          </View>


        </View>

      </ScrollView>

    </CustomContainer>
  )
}

export default ProductDetails