import { Dimensions } from "react-native";
import { default_font_bold, default_font_regular } from "@Service/Constant";

export default {
  // *** Footer *** //
  fItems: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "#000"
  },
  fBtn: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
    height: 50
  },
  fBtnActive: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#FFF",
    justifyContent: "center",
    height: 50,
  },

  fBtnIconActive: {
    fontSize: 24,
    color: '#000',
    // paddingBottom: 5
  },
  fBtnIcon: {
    fontSize: 24,
    color: '#808080',
    // paddingBottom: 5
  },
  fBtnText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 8,
    color: '#808080'
  },
  fBtnTextActive: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 8,
    color: '#000'
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
  },

  // Custom-Styles -----------------------------------------

  defaultButton: { backgroundColor: "#FDCB44", marginTop: 10, justifyContent: 'center', alignItems: 'center', alignSelf: "center", width: "90%" },
  defaultButtonText: { color: "#000", textAlign: "center", padding: 10, fontFamily: default_font_bold, width: '100%', fontSize: 15 },
  bikeImage: { alignSelf: "center", resizeMode: "center" },
  imageContainerView: { justifyContent: "center", flex: 9 },
  tabHeading: { backgroundColor: "#000000" },
  tabText: { color: '#fff', fontFamily: default_font_bold, },
  currentCardText: { color: "#000", fontFamily: default_font_regular, fontSize: 14 },
  currentCardTextName: { color: "#000", fontFamily: default_font_bold, fontSize: 16 },
  currentCardHeaderText: { color: "#000", fontFamily: default_font_bold, fontSize: 20 },
  currentCardItem: { backgroundColor: "#FDCB44", borderRadius: 10 },

  planCardItem: { backgroundColor: "#ffffff", borderRadius: 10, },
  planCardHeaderText: { color: "#000", fontFamily: default_font_bold, fontSize: 20 },
  planCardTextName: { color: "#000", fontFamily: default_font_bold, fontSize: 16 },
  planCardText: { color: "#000", fontFamily: default_font_regular, fontSize: 14 },
  planCardRight: { justifyContent: 'center', alignItems: 'center', alignSelf: 'center', alignContent: 'center' },

  ribbon: {
    height: 32, flexDirection: 'row', alignItems: 'center', backgroundColor: '#FDCB44'
  },
  ribbonTextLeft: { paddingHorizontal: 20, flex: 3, fontFamily: default_font_bold },
  ribbonTextRight: { paddingHorizontal: 20, flex: 2, textAlign: 'right', fontFamily: default_font_bold },

  dataTablePaginator: { fontFamily: default_font_regular, fontSize: 13 },
  dataTableHeader: { fontFamily: default_font_bold, fontSize: 13 },
  dataTableCellText: { fontFamily: default_font_regular, fontSize: 13 },
  dataTableCellTextGreen: { fontFamily: default_font_bold, fontSize: 13, color: "#008000" },
  dataTableCellTextRed: { fontFamily: default_font_bold, fontSize: 13, color: "#ff0000" },

  profileCardItem: { backgroundColor: "#eceff1", borderRadius: 10, alignItems: "center" },

  mt0: { marginTop: 0 },

  homeCard: { alignSelf: "center", borderRadius: 10, backgroundColor: "#ffffff" },
  homeCardItem: { backgroundColor: "#ffffff", borderRadius: 10 },
  homeCardItemViewContainer: { backgroundColor: "#ffffff", borderColor: "#ffffff", elevation: 0, borderWidth: 0, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }
}

const screen_width = Dimensions.get("screen").width;
const screen_height = Dimensions.get("screen").height;