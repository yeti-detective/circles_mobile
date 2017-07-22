import React from 'react'
import { Image, StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { heightRatio, widthRatio } from 'circles/lib/styles/globalStyles'

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    alignItems: 'center',
    width: widthRatio(375),
    height: heightRatio(300)
  }
})
class ActivityFeed extends React.Component {
  render () {
    return (
      <View style={[styles.panel]}>
        <Text>Activity</Text>
      </View>
    )
  }
}

class Groups extends React.Component {
  render () {
    return (
      <View style={[styles.panel]}>
        <Text>Groups</Text>
      </View>
    )
  }
}

class Organizations extends React.Component {
  render () {
    return (
      <View style={[styles.panel]}>
        <Text>Organizations</Text>
      </View>
    )
  }
}
class ProfileScreen extends React.Component {
  static navigatorStyle = {
    navBarHidden: true
  }
  constructor (props) {
    super(props)
    this.state = {
      index: 0
    }
    this.updateScreen = this.updateScreen.bind(this)
  }

  updateScreen (index) {
    this.setState({index})
  }

  render () {
    const imageAddress = 'https://ipfs.infura.io' + this.props.user.image.contentUrl
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', width: widthRatio(365), marginTop: heightRatio(20), maxHeight: heightRatio(40)}}>
          <TouchableHighlight onPress={() => this.props.navigator.pop({
          })} style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#50E3C2', width: widthRatio(40), height: heightRatio(40), borderRadius: 8}}>
            <Text style={{fontSize: 20}}>X</Text>
          </TouchableHighlight>
        </View>
        { typeof this.props.user.image !== 'undefined'
          ? <Image style={{height: 120, width: 120, backgroundColor: 'blue'}} source={{'uri': imageAddress}} />
          : <Icon
            name='ios-contact'
            style={{fontSize: 120}}
          />
        }
        <View style={{flex: 1, alignItems: 'center', maxHeight: heightRatio(50)}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{this.props.user.name}</Text>
          <Text>{`Balance: ${this.props.user.balance}`}</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', width: widthRatio(267), maxHeight: heightRatio(35), borderWidth: 1}}>
          <TouchableHighlight style={[{width: widthRatio(89), height: heightRatio(35), alignItems: 'center'}, (this.state.index === 0 ? {backgroundColor: '#4AA7EF'} : null)]} onPress={() => this.updateScreen(0)}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={[{textAlign: 'center', color: '#4AA7EF'}, (this.state.index === 0 ? {color: '#FFFFFF'} : null)]}>Feed</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={[{width: widthRatio(89), height: heightRatio(35), alignItems: 'center'}, (this.state.index === 1 ? {backgroundColor: '#4AA7EF'} : null)]} onPress={() => this.updateScreen(1)}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={[{textAlign: 'center', color: '#4AA7EF'}, (this.state.index === 1 ? {color: '#FFFFFF'} : null)]}>Groups</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={[{width: widthRatio(89), height: heightRatio(35), alignItems: 'center'}, (this.state.index === 2 ? {backgroundColor: '#4AA7EF'} : null)]} onPress={() => this.updateScreen(2)}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={[{textAlign: 'center', color: '#4AA7EF'}, (this.state.index === 2 ? {color: '#FFFFFF'} : null)]}>Orgs</Text>
            </View>
          </TouchableHighlight>
        </View>
        {(() => {
          switch (this.state.index) {
            case 0:
              return (
                <ActivityFeed />
              )
            case 1:
              return (
                <Groups />
              )
            case 2:
              return (
                <Organizations />
              )
            default:
          }
        })()}
      </View>
    )
  }
}

export default ProfileScreen
