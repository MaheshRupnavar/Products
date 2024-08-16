import { View, Text, StyleSheet, StyleProp, TextStyle, TouchableOpacity } from 'react-native'
import React from 'react'
import { ms, mvs } from 'react-native-size-matters'
import { COLORS, SIZES } from 'styles/theme'
import { GlobalStyles } from 'styles/GlobalStyles'
import Icon from 'react-native-vector-icons/Ionicons'

type Props = {
  title: string,
  titleStyle?: StyleProp<TextStyle>,
  isBack?: boolean,
  backPress?: () => void
}

const CustomHeader: React.FC<Props> = ({ title, titleStyle, isBack = false, backPress }: Props) => {
  return (
    <View style={styles.container} >

      <View>
        {
          isBack &&
          <TouchableOpacity onPress={backPress}>
            <Icon name='arrow-back' size={30} color={COLORS.white} />
          </TouchableOpacity>
        }

      </View>
      <View>
        <Text style={GlobalStyles.heading}  >{title}</Text>
      </View>

      <View />



    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: mvs(100),
    width: SIZES.width,
    paddingHorizontal: ms(15),
    paddingTop: mvs(20),
    backgroundColor: COLORS.theme
  }
})

export default CustomHeader