import React from 'react'

import { Alert, Image, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from 'react-native'
import { Navigation } from 'react-native-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

import KeypadScreen from 'circles/lib/components/KeypadScreen'
// console.log('importing uport-connect')
// const Eth = require('circles/node_modules/ethjs-query/dist/ethjs-query.js')
// // const UportConnect = require('circles/node_modules/uport-connect/src/Connect')
//
// // import { ConnectCore } from 'uport-connect'
// // import UportConnect from 'uport-connect'
// // import { ConnectCore } from 'circles/vendor/uport-connect/src/index'
// // const Connect = UportConnect.ConnectCore
// // console.log('##############################')
// // console.log(Connect)
// // let uport = new Connect('Circles')
//
// // uport.requestCredentials().then((credentials) => {
// //   console.log(credentials)
// // })
// // onPress={() => uport.requestCredentials().then((credentials) => {
// //   Alert.alert(credentials)
// // })}>
class HomeScreen extends React.Component {
  static navigatorStyle = {
    navBarHidden: true
  }

  render () {
    return (
      <View style={{flex: 1, alignItems: 'center', backgroundColor: 'black'}}>
        <Image source={require('circles/images/logo.png')} style={{ width: 275, height: 275, marginTop: 40 }} />
        <Text style={{marginTop: 20, fontSize: 40, color: 'white'}}>Circles</Text>
        <TouchableHighlight onPress={() => this.props.navigator.push({
          screen: 'KeypadScreen',
          navigatorStyle: {
            navBarHidden: true
          }
        })} style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#50E3C2', width: 275, height: 60, marginTop: 125, borderRadius: 8}}>
          <Text style={{fontSize: 20}}>Login With uPort</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
// class LoginScreen extends React.Component {
//   render () {
//     return (
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <Text>Login</Text>
//       </View>
//     )
//   }
// }

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
Navigation.registerComponent('HomeScreen', () => HomeScreen)
Navigation.registerComponent('KeypadScreen', () => KeypadScreen)
Navigation.registerComponent('ProfileScreen', () => ProfileScreen)
// Navigation.startSingleScreenApp({
//   screen: {
//     screen: 'HomeScreen',
//     // title: 'Circles'
//   }
// })

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Transfer',
      screen: 'KeypadScreen'
    },
    {
      label: 'Profile',
      screen: 'ProfileScreen'
    }
  ]
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
