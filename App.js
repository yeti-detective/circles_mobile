import React from 'react'

import { Text, View } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
// Store
import store from 'circles/lib/store/store'

import KeypadScreen from 'circles/lib/components/KeypadScreen'
import LoginScreen from 'circles/lib/containers/LoginContainer'
import ProfileScreen from 'circles/lib/containers/ProfileContainer'
import LookupScreen from 'circles/lib/containers/LookupContainer'

class QRScreen extends React.Component {
  render () {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>QR</Text>
      </View>
    )
  }
}
class CameraScreen extends React.Component {
  render () {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Camera</Text>
      </View>
    )
  }
}

Navigation.registerComponent('LoginScreen', () => LoginScreen, store, Provider)
Navigation.registerComponent('KeypadScreen', () => KeypadScreen)
Navigation.registerComponent('ProfileScreen', () => ProfileScreen, store, Provider)
Navigation.registerComponent('LookupScreen', () => LookupScreen, store, Provider)
Navigation.startSingleScreenApp({
  screen: {
    screen: 'KeypadScreen'
    // title: 'Circles'
  }
})

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })
