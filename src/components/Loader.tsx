import { StyleSheet, View, Modal, ActivityIndicator, Image, Text } from 'react-native';
import React, { useEffect } from 'react'
import { COLORS, SIZES } from 'styles/theme';
import { ms, mvs } from 'react-native-size-matters';

type Props = {
  loading: boolean
}

const Loader = ({ loading }: Props) => {

  return (
    <Modal
      transparent={true}
      animationType={'none'}
      //  visible={TRUE}
      visible={loading}
      onRequestClose={() => {

      }}>

      <View style={[StyleSheet.absoluteFillObject, styles.container,]}>
        {/* <View style={{ height: mvs(120), width: ms(120), borderRadius: SIZES.radius15, backgroundColor: COLORS.white, alignItems: 'center', justifyContent: 'center', }} > */}

          <ActivityIndicator
            size={40}
            color={COLORS.white}
            style={{ margin: 15 }} />

        {/* </View> */}

      </View>
    </Modal>

  )
}


const styles = StyleSheet.create({
  container: {

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    //backgroundColor: BG,

  },
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040'
  },

});
export default Loader