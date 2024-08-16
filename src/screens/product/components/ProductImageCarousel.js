import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
  View,
  Linking,
} from 'react-native';
import { ms, mvs } from 'react-native-size-matters';
import { COLORS, SIZES } from 'styles/theme';

const D_WIDTH = Dimensions.get('window').width;

export default class ProductImageCarousel extends Component {
  scrollRef = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      props: this.props,
      selectedIndex: 0,
      storeID: '',
      Nav: false,
    };
  }

//   componentDidMount() {
//     setInterval(() => {
//       this.setState(
//         prev => ({
//           selectedIndex:
//             prev?.selectedIndex == this.props?.data?.length - 1
//               ? 0
//               : prev?.selectedIndex + 1,
//         }),
//         () => {
//           this.scrollRef.current.scrollTo({
//             animated: true,
//             y: 0,
//             x: D_WIDTH * this.state?.selectedIndex,
//           });
//         },
//       );
//     }, 4000);
//   }

  componentWillUnmount() {
    this.setState({ selectedIndex: 0 });
  }

  setSelectedIndex = event => {
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    const contentOffset = event.nativeEvent.contentOffset.x;
    const selectedIndex = Math.floor(contentOffset / viewSize);
    this.setState({ selectedIndex: selectedIndex });
  };

  render() {
    return (
      <>
        <ScrollView
          ref={this.scrollRef}
          onMomentumScrollEnd={this.setSelectedIndex}
          horizontal
          pagingEnabled
          scrollEnabled={this.props?.data?.length>1}
          contentContainerStyle={{ paddingRight: mvs(10) }}
          showsHorizontalScrollIndicator={false}>
          {this.props?.data &&
            this.props?.data.map((image, index) => (
              <View key={index.toString()} style={styles.cardView} >
                <Image
                  style={styles.image}
                  resizeMode='contain'
                  source={{ uri: image }}
                />
              </View>
            ))}
        </ScrollView>
        {
            this.props?.data?.length>1 &&

            <View style={styles.dotView}>
          {this.props?.data && this.props?.data.map((image, index) => (
            <View
              key={index.toString()}
              style={{
                //opacity: this.state.selectedIndex == index ? 1 : 0.4,
                height: ms(6),
                width: ms(6),
                borderRadius: ms(2),
                marginLeft: ms(4),
                backgroundColor: this.state.selectedIndex == index ? COLORS.yellow : COLORS.greyTxt,
              }}
            />
          ))}
        </View>

        }
       
      </>
    );
  }
}

const styles = StyleSheet.create({
  dotView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  cardView: {
    flex: 1,
    width: SIZES.width - ms(20),
    height: mvs(180),
    marginHorizontal: mvs(10),
    // marginLeft: mvs(20),
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.transparent
    // shadowColor: COLORS.shadow,
    // shadowOffset: {width: 0, height: 0.6},
    // shadowOpacity: 0.3,
    // shadowRadius: 2,
    // elevation: 6,
  },

  image: {
    width: SIZES.cardWidth,
    height:mvs(180),
    // borderRadius: SIZES.radius,
  },
});
