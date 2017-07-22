import React from 'react'
import { Image, Linking, Text, View, TouchableHighlight } from 'react-native'
import { Provider } from 'react-redux'
const Eth = require('circles/node_modules/ethjs-query/dist/ethjs-query.js')
const UportConnect = require('circles/vendor/uport-connect')
const Connect = UportConnect.ConnectCore
const SimpleSigner = UportConnect.SimpleSigner
var randomString = require('random-string')
import URL from 'url-parse'
import qs from 'qs'

const rpcUrl = 'https://rinkeby.infura.io/dgC6Vl5Qvg79AZi8C39h'
const circlesUport = '2odDf3tfWkap1kPqAHYm7ow2B1m2SisVK5M' // clientId from app manager
const circlesKP = {
  privateKey: '93f02803e9de795913463b64285da23629892995e19691fe544ae4680c0ac671' // private key from app manager
}

const circlesSigner = SimpleSigner(circlesKP.privateKey)
// used to redirect the app link to uport application
const uriHandler = (url) => {
  // console.log(url)
  Linking.openURL(url)
}

export const uport = new Connect('Circles', {
  clientId: circlesUport,
  signer: circlesSigner,
  mobileUrlHandler: uriHandler,
  uriHandler: uriHandler,
  rpcUrl
})

uport.topicFactory = (name) => {
  const id = randomString({length: 10})
  const path = `/uport/${id}`
  const url = `stream.circles.app:${path}`
  let handler
  let cancel
  const topic = new Promise((resolve, reject) => {
    handler = (event) => {
      if (event.url) {
        const url = URL(event.url, true)
        if (url.pathname === path) {
          if (url.hash) {
            const params = qs.parse(url.hash.slice(1))
            Linking.removeEventListener('url', handler)
            resolve(params[name])
          } else {
            console.log('no hash')
            reject()
          }
        } else {
          console.log('ignoring request')
        }
      }
    }
    Linking.addEventListener('url', handler)

    cancel = () => {
      Linking.removeEventListener('url', handler)
      resolve()
    }
  })
  topic.url = url
  topic.cancel = cancel
  return topic
}

export const eth = new Eth(uport.getProvider())
const req = {requested: ['name']}

import { Navigation } from 'react-native-navigation'

class LoginScreen extends React.Component {
  static navigatorStyle = {
    navBarHidden: true
  }
  constructor (props) {
    super(props)
    this._switchToTabBased = this._switchToTabBased.bind(this)
  }

  _switchToTabBased() {
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
  }


  render () {
    return (
      <View style={{flex: 1, alignItems: 'center', backgroundColor: 'black'}}>
        <Image source={require('circles/images/logo.png')} style={{ width: 275, height: 275, marginTop: 40 }} />
        <Text style={{marginTop: 20, fontSize: 40, color: 'white'}}>Circles</Text>
        <TouchableHighlight onPress={() => uport.requestCredentials(req).then((credentials) => {
          this.props.storeUser(credentials)
          // this._switchToTabBased()
          this.props.navigator.resetTo({
            screen: 'KeypadScreen',
            navigatorStyle: {
              navBarHidden: true
            }
          })


        })} style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#50E3C2', width: 275, height: 60, marginTop: 125, borderRadius: 8}}>
          <Text style={{fontSize: 20}}>Login With uPort</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default LoginScreen
