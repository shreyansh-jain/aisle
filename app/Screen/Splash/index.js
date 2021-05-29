import React from 'react'
import { StatusBar, Image, Dimensions, ActivityIndicator, AsyncStorage, BackHandler } from 'react-native'
import { Container, Content, Text, View, Header } from 'native-base'

import NavigationService from '@Service/Navigation'


import Style from '@Theme/Style'
import Styles from '@Screen/Login/Style'

export default class extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    try {
      let ref = this;
      ref.props.navigation.addListener('didFocus', async () => {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress.bind(ref))
        let token = await AsyncStorage.getItem('@token');
        if (token != undefined && token != null && token != '' && token != 'null') {
          NavigationService.navigate('Home')
        } else {
          setTimeout(function () {
            NavigationService.navigate('Login')
          }, 1000)
        }
      })
      ref.props.navigation.addListener('didBlur', async () => {
        BackHandler.removeEventListener('hardwareBackPress');
      })
    }
    catch (e) {
      console.log(e)
    }
  }

  handleBackPress(){
    BackHandler.exitApp()
    return true
  }

  render() {
    return <Container>
      <Content style={{ height: Dimensions.get('screen').height, width: Dimensions.get('screen').width }}>
        <View style={{ flex: 1, alignContent: 'center', alignContent: 'center', height: Dimensions.get('screen').height, width: Dimensions.get('screen').width, backgroundColor: '#fff', top: '30%' }}>
          <Image source={require('@Asset/images/logo.png')} style={{ resizeMode: 'center', height: Dimensions.get('window').height / 4.5, width: '100%' }} />
          <ActivityIndicator style={{ top: '10%', alignContent: 'center', alignSelf: 'center', textDecorationLine: 'underline' }} />
          <Text style={{ top: '35%', alignContent: 'center', alignSelf: 'center', textDecorationLine: 'underline' }}>v0.1</Text>
        </View>
      </Content>
    </Container>
  }
}