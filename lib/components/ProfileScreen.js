import React from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

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
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{this.props.user.name}</Text>
          <Text>Balance: 100</Text>
        </View>
      </View>
    )
  }
}

export default ProfileScreen
