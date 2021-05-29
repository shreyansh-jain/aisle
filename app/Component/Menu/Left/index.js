import React, { Component } from 'react'
import { Image, TouchableOpacity, ScrollView, ImageBackground, AsyncStorage } from 'react-native'
import { Text, Icon, View } from 'native-base'

import Styles from './Style'
import NavigationService from '@Service/Navigation'

import * as MENU from './Menu'

class MenuLeft extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    }
    this.renderMenuList = this.renderMenuList.bind(this)
  }

  renderMenuList(menus) {
    return menus.map((menu) => {
      return (menu.name === 'Logout')
        ?
        <TouchableOpacity style={Styles.profileItem} underlayColor='transparent' onPress={() => {
          NavigationService.closeDrawer()
          AsyncStorage.clear();
          NavigationService.navigate(menu.route)
        }}>
          <View style={Styles.navBtn}>
            <View style={Styles.navBtnLeft}>
              <Icon name={menu.iconName} type={menu.iconType} style={Styles.navBtnIcon} />
            </View>
            <Text style={Styles.navBtnText}>{menu.name}</Text>
          </View>
        </TouchableOpacity>
        :
        <TouchableOpacity style={Styles.profileItem} underlayColor='transparent' onPress={() => {
          NavigationService.closeDrawer()
          NavigationService.navigate(menu.route)
        }}>
          <View style={Styles.navBtn}>
            <View style={Styles.navBtnLeft}>
              <Icon name={menu.iconName} type={menu.iconType} style={Styles.navBtnIcon} />
            </View>
            <Text style={Styles.navBtnText}>{menu.name}</Text>
          </View>
        </TouchableOpacity>
    })
  }
  render() {
    return (
      <View style={Styles.nav}>
        <View style={Styles.navProfile}>
          <ImageBackground source={require('@Asset/images/logo.png')} resizeMode='contain' style={Styles.navImg} >
            <View style={Styles.navRow}>
              <Text style={Styles.navName}></Text>
            </View>
          </ImageBackground>
        </View>
        <View style={Styles.navMenu}>
          <ScrollView>
            {this.renderMenuList(MENU.Data1)}
          </ScrollView>
        </View>
      </View>

    )
  }
}

export default MenuLeft
