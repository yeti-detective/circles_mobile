import React from 'react'

import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
// Store
import store from 'circles/lib/store/store'
import Icon from 'react-native-vector-icons/Ionicons'

import KeypadScreen from 'circles/lib/components/KeypadScreen'
import LoginScreen from 'circles/lib/containers/LoginContainer'

class ProfileScreen extends React.Component {
  render () {
    return (
      <View style={{flex: 1, alignItems: 'center', borderWidth: 1}}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', width: 335, marginTop: 20, maxHeight: 40}}>
          <TouchableHighlight onPress={() => this.props.navigator.pop({
          })} style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#50E3C2', width: 40, height: 40, borderRadius: 8}}>
            <Text style={{fontSize: 20}}>X</Text>
          </TouchableHighlight>
        </View>
        <Icon
          name='ios-contact'
          style={{fontSize: 120}}
        />
        <View style={{flex: 1}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Ashoka</Text>
          <Text>Balance: 100</Text>
        </View>
      </View>
    )
  }
}
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
class LookupScreen extends React.Component {
  render () {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Login</Text>
      </View>
    )
  }
}

class SearchScreen extends React.Component {
  render () {
  }
}
Navigation.registerComponent('LoginScreen', () => LoginScreen, store, Provider)
Navigation.registerComponent('KeypadScreen', () => KeypadScreen)
Navigation.registerComponent('ProfileScreen', () => ProfileScreen)
Navigation.startSingleScreenApp({
  screen: {
    screen: 'LoginScreen'
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
