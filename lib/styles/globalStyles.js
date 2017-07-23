import {
  StyleSheet,
  Dimensions,
  PixelRatio,
  Platform
} from 'react-native'

export const windowWidth = Dimensions.get('window').width
export const windowHeight = Dimensions.get('window').height
export const widthRatio = (width) => (
  windowWidth * (width / 375)
)
export const heightRatio = (height) => (
  windowHeight * (height / 667)
)

export const colors = {
  lightBlue: '#4AA7EF',
  darkBlue: '#4788C8',
  lightGrey: '#E9E9E9'
}
