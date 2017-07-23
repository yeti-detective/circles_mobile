import React from 'react'
import { Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors, heightRatio, widthRatio } from 'circles/lib/styles/globalStyles'

class LookupScreen extends React.Component {
  static navigatorStyle = {
    navBarHidden: true
  }
  constructor () {
    super()
    this.state = {
      value: ''
    }
    this.updateValue = this.updateValue.bind(this)
  }
  updateValue (value) {
    this.setState({value})
  }
  getLocation () {
    navigator.geolocation.getCurrentPosition((location) => console.log(location))
  }
  componentDidMount () {
    this.getLocation()
  }
  render () {
    return (
      <View style={{flex: 1, alignItems: 'center', backgroundColor: colors.lightBlue}}>
        <View style={{width: widthRatio(375), height: heightRatio(160), alignItems: 'center', backgroundColor: colors.darkBlue}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: heightRatio(40), width: widthRatio(315)}}>
            <TextInput
              style={{height: heightRatio(40), width: widthRatio(265), borderColor: 'gray', borderWidth: 1, backgroundColor: '#ffffff'}}
              onChangeText={(value) => this.setState({value})}
              value={this.state.value}
              keyboardType={'default'}
              placeholder={'Search'}
            />
            <TouchableOpacity onPress={() => this.props.navigator.push({
              screen: 'LookupScreen',
              navigatorStyle: {
                navBarHidden: true
              }
            })}>
              <Icon
                name='ios-search-outline'
                style={{fontSize: 40}}
              />
            </TouchableOpacity>
          </View>
          <Text style={{color: colors.lightGrey, fontSize: 14, fontFamily: 'avenir', width: widthRatio(325), marginTop: heightRatio(20)}}>
            Search for names, phone numbers, vendors, and locations.
          </Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <TouchableHighlight style={{
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
            shadowOffset: {width: 0, height: 4},
            shadowColor: 'rgba(7, 7, 7, 0.5)',
            shadowOpacity: 0.2,
            backgroundColor: '#ffffff',
            width: widthRatio(274),
            height: heightRatio(40),
            // elevation: 5
          }}>
            <Text style={{color: colors.lightBlue }}>
              + Invite your friends to Circles
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

export default LookupScreen
