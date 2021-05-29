const React = require('react-native')
const { Platform, Dimensions } = React

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

export default {

  layout: {
    flex: 1,
    width: '100%'
  },
  navImg: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    margin: 2
  },
  nav: {
    flex: 1,
    width: '100%'
  },
  navProfile: {
    width: '100%',
    borderBottomWidth: 3
  },
  navRow: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 100
  },
  navAvatar: {
    width: 64,
    height: 64,
    borderRadius: 37
  },
  navName: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    color: '#000',
    marginTop: 10,
    marginLeft: 10,
  },
  navMenu: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255,1)',
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 0

  },
  navHeader: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: '#333',
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 20,
    borderTopWidth: 1,
    borderColor: 'rgba(0,0,0,0.04)',
    paddingTop: 20
  },
  profileItem: {
    marginTop: 10,
    marginBottom: 10
  },
  navBtn: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  navBtnLeft: {
    width: 30,
    alignItems: 'center',
    marginRight: 20
  },
  navBtnIcon: {
    fontSize: 24,
    color: '#000'
  },

  navBtnText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: 'rgba(0,0,0,0.8)'
  },
  profileMenuIcon: {
    color: '#333'
  },
}
