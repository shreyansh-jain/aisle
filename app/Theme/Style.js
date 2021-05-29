const React = require('react-native')
const { Platform } = React

export default {
  // *** Header *** //

  /** * Action Bar - Text, Icon, Button ***/
  nav: {
    paddingTop: 10,
    paddingBottom: 10,
    height: 90,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FDCB44',
    borderWidth: 0
  },
  navBarItems: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: -10,
    paddingHorizontal: 5,
    borderBottomWidth: 0
  },
  navBarLeft: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  navBarMiddle: {
    flex: 10,
    alignItems: 'center'
  },
  navMiddleDesc: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 20,
    color: 'rgba(255, 255, 255, 1)',
    letterSpacing: 2
  },
  navMiddleDescSm: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: 'rgba(255, 255, 255, 1)',
    letterSpacing: 2
  },
  navBarRight: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  navBarIcon: {
    fontSize: 24,
    color: 'rgba(255, 255, 255, 1)'
  },
  navBarMiddleItems: {
    flex: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  navMiddleSubDesc: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 10,
    color: 'rgba(255, 255, 255, 0.5)',
    marginTop: 5,
    letterSpacing: 2
  },
  cartBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    width: 16,
    height: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 18, 33, 1)',
    borderColor: '#FF0000',
    borderWidth: 1
  },
  cartAddedDesc: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: 'rgba(255, 255, 255, 1)'
  },

  // *** Content *** //
  layoutDefault: {
    flexGrow: 1
  },

  // *** Footer *** //
  fItems: {
    width: '100%',
    height: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 3,
    borderColor: 'rgba(0, 0, 0, 1)'
  },
  fBtn: {
    flex: 1,
    alignItems: 'center'
  },

  fBtnIconActive: {
    fontSize: 24,
    color: 'rgba(0, 0, 0, 1)',
    paddingBottom: 5
  },
  fBtnIcon: {
    fontSize: 24,
    color: 'rgba(0, 0, 0, 0.4)',
    paddingBottom: 5
  },
  fBtnText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 8,
    color: 'rgba(0,0,0,0.4)'
  },
  fBtnTextActive: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 8,
    color: 'rgba(0, 0, 0, 1)'
  },
  fBtnCircleIcon: {
    fontSize: 36,
    color: 'rgba(255,255,255,1)',
    paddingBottom: 5
  },
  fBtnCircleText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 10,
    color: 'rgba(255,255,255,1)'
  },
  botPop: {
    flex: 1,
    justifyContent: 'center'
  },
  botPopBtn: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    bottom: 25
  },
  botPopWhBg: {
    width: 94,
    height: 94,
    borderRadius: 47,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  botPopSearch: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },

  sortBtns: {
    flexDirection: 'row',
    backgroundColor: 'rgba(219, 219, 219, 0.4)',
    borderTopWidth: 3,
    borderColor: 'rgba(239, 188, 14, 1)',
    paddingVertical: 10
  },
  sortItem: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fSortIcon: {
    color: 'rgba(0,0,0,0.4)',
    paddingRight: 5
  },

  fTab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.07)'
  },
  fIconsRow: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 15
  },
  iconFtabActive: {
    color: 'rgba(0,0,0,0.5)',
    fontSize: 20
  },
  textFtabActive: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: 'rgba(0,0,0,0.8)',
    marginLeft: 5
  }
}
