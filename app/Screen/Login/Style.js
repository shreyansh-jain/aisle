import { Dimensions } from 'react-native'

const default_font = "Montserrat-Regular" //Montserrat-Regular
const default_font_bold = "Montserrat-SemiBold"
const default_font_semibold = "Montserrat-Regular"
const default_font_medium = "Montserrat-Regular"

export default {
  layoutDefault: {
    flexGrow: 1,
    backgroundColor: 'rgba(0,0,0,0.02)'
  },
  titleDisplay: {
    marginLeft: 30,
    marginTop: Dimensions.get("screen").height / 8,
    fontSize: 18
  },
  getOTP: { fontWeight: "500", fontFamily: 'Gilroy-SemiBold' },
  subTitleDisplay: {
    fontWeight: '800',
    fontSize: 30
  },
  InputDiv: {
    flexDirection: 'row',
    marginTop: 10
  },
  inputA: {
    fontFamily: default_font,
    color: "rgba(0,0,0,0.9)",
    height: 40,
    fontSize: 18,
    borderWidth: 2,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: "rgba(0,0,0,0.7)",
    borderRadius: 8,
    flex: 0.1,
    fontWeight: '700',
    paddingHorizontal: 10,
  },
  inputB: {
    fontFamily: default_font,
    color: "rgba(0,0,0,0.9)",
    height: 40,
    fontSize: 18,
    borderWidth: 2,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: "rgba(0,0,0,0.7)",
    borderRadius: 8,
    flex: 0.4,
    marginLeft: 5,
    fontWeight: '700',
    paddingHorizontal: 10,
  },
  viewA: { flexDirection: 'row', marginTop: 5 },
  continueBtn: {
    backgroundColor: '#FDCB44',
    borderRadius: 20,
    paddingVertical: 10,
    opacity: 1.0,
    marginVertical: 15,
    flex: .3
  },
  continueDesc: {
    textAlign: 'center',
    fontFamily: default_font_semibold,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  OTPHead: { flexDirection: 'row' },
  OTPPhone: { fontWeight: "500", fontFamily: default_font_bold, flex: 0.6 },
  OTPEdit: { fontWeight: "500", fontFamily: 'Gilroy-SemiBold', flex: 1, fontSize: 20 },
  inputC: {
    fontFamily: default_font,
    color: "rgba(0,0,0,0.9)",
    height: 40,
    fontSize: 18,
    borderWidth: 2,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: "rgba(0,0,0,0.7)",
    borderRadius: 8,
    flex: 0.17,
    marginLeft: 5,
    fontWeight: '700',
    paddingHorizontal: 10,
  },
  ctnFlex: { flexDirection: 'row', marginTop: 5 },
}
