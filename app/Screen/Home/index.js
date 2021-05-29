import React from 'react'
import { StatusBar, TouchableOpacity, ImageBackground, Image, FlatList, Dimensions, AsyncStorage, StyleSheet, Linking, ActivityIndicator } from 'react-native'
import { Container, Content, Text, View, Header, Icon } from 'native-base'
import { connect } from 'react-redux';
import { set_page_type, set_init, set_verifications } from '@Redux/actions/page_type_action';

import Styles from '@Screen/Home/Style'


class Home extends React.Component {

  constructor(props) {
    super(props);
    this.props.set_page_type('discover');
  }

  componentDidMount() {
    try {
      let ref = this;
      ref.props.navigation.addListener('didFocus', async () => {
        let data = await AsyncStorage.getItem('@token');
        if (data != undefined && data != null && data != "") {
          ref.props.set_page_type('discover');
        }
        AsyncStorage.clear()
      })
      ref.props.navigation.addListener('didBlur', async () => {

      })
    }
    catch (e) {
    }
  }


  render_aisle() {
    return <Content>
      <View style={{ width: Dimensions.get('window').width, alignItems: 'center', marginTop: 10 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 27 }}>Notes</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10, marginTop: 5 }}>Personal messages to you</Text>
        <ImageBackground imageStyle={{ borderRadius: 25 }} resizeMode="cover" source={require('@Asset/images/photo_1.png')} style={{ opacity: 0.8, backgroundColor: 'black', alignSelf: 'center', height: Dimensions.get('window').width * 1.2, borderRadius: 25, paddingHorizontal: 5, aspectRatio: 0.8, overflow: 'hidden' }}>
          <View style={{ bottom: 10, position: 'absolute', flexDirection: 'column' }}>
            <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 22, marginHorizontal: 20 }}>Meena, 23</Text>
            <Text style={{ fontWeight: 'normal', color: '#fff', fontSize: 15, marginHorizontal: 20 }}>Tap to review 50+ notes</Text>
            <View style={{ backgroundColor: '#FFF', opacity: 1, width: Dimensions.get('window').width, alignItems: 'center', marginTop: 10, flexDirection: 'row', marginBottom: -10 }}>
              <View style={{ width: Dimensions.get('window').width / 9 * 5, marginHorizontal: 20, flex: 1.0, flexDirection: 'column' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 5, marginTop: 5 }}>Interested In You</Text>
                <Text style={{ fontWeight: 'normal', fontSize: 13, marginBottom: 5, marginTop: 5 }}>Premium members can view all their likes at once.</Text>
              </View>
              <View style={{ flex: 0.8, paddingHorizontal: 20 }}>
                <TouchableOpacity style={{
                  backgroundColor: '#FDCB44',
                  borderRadius: 20,
                  justifyContent: 'center',
                  paddingVertical: 10,
                  opacity: 1.0,
                  marginVertical: 30,
                  flex: .3
                }} onPress={async () => {

                }}>
                  <Text style={{
                    textAlign: 'center',
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: 'black',
                  }}>Upgrade</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
        <View style={{ width: Dimensions.get('window').width - 10, alignItems: 'center', marginTop: 10, marginBottom: 10, flexDirection: 'row', marginHorizontal: 10 }}>
          <Image blurRadius={2} source={require('@Asset/images/photo_2.png')} resizeMode="cover" style={{ height: Dimensions.get('window').width, aspectRatio: 0.8, marginHorizontal: 3, flex: 1, borderRadius: 30 }} />
          <Image blurRadius={2} source={require('@Asset/images/photo_3.png')} resizeMode="cover" style={{ height: Dimensions.get('window').width, aspectRatio: 0.8, marginHorizontal: 3, flex: 1, borderRadius: 30 }} />
        </View>
      </View>
    </Content>
  }

  render() {

    let ref = this;
    return <Container style={{ flex: 1, height: Dimensions.get('window').height, width: Dimensions.get('window').width }}>
      <Content style={{ height: Dimensions.get('window').height, width: Dimensions.get('window').width }}>
        {this.render_aisle()}
      </Content>
      <View style={Styles.fItems} >
        <TouchableOpacity style={ref.props.page_type === 'discover' ? Styles.fBtnActive : Styles.fBtn} onPress={() => {
          ref.props.set_page_type('discover');
        }}>
          <Icon name='dashboard' type="MaterialIcons" style={ref.props.page_type === 'discover' ? Styles.fBtnIconActive : Styles.fBtnIcon} />
          <Text style={ref.props.page_type === 'discover' ? Styles.fBtnTextActive : Styles.fBtnText}>Discover</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ref.props.page_type === 'notes' ? Styles.fBtnActive : Styles.fBtn} onPress={() => {
          ref.props.set_page_type('notes')
        }}>
          <Icon name='email' type='MaterialIcons' style={ref.props.page_type === 'notes' ? Styles.fBtnIconActive : Styles.fBtnIcon} />
          <Icon name='fiber-manual-record' type="MaterialIcons" style={{ zIndex: 1, position: 'absolute', left: 50, bottom: 25, color: '#8C5CFB' }} color="#8C5CFB" fontSize={20} />
          <Text style={{ zIndex: 1, position: 'absolute', left: 60, bottom: 28, color: "#fff" }}>9</Text>
          <Text style={ref.props.page_type === 'notes' ? Styles.fBtnTextActive : Styles.fBtnText}>Notes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ref.props.page_type === 'matches' ? Styles.fBtnActive : Styles.fBtn} onPress={() => {
          ref.props.set_page_type('matches');
        }}>
          <Icon name='chat-bubble-outline' type="MaterialIcons" style={ref.props.page_type === 'matches' ? Styles.fBtnIconActive : Styles.fBtnIcon} />
          <Icon name='fiber-manual-record' type="MaterialIcons" style={{ zIndex: 1, position: 'absolute', left: 50, bottom: 25, color: '#8C5CFB' }} color="#8C5CFB" fontSize={20} />
          <Text style={{ zIndex: 1, position: 'absolute', left: 60, bottom: 28, color: "#fff" }}>5</Text>
          <Text style={ref.props.page_type === 'matches' ? Styles.fBtnTextActive : Styles.fBtnText}>Matches</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ref.props.page_type === 'profile' ? Styles.fBtnActive : Styles.fBtn} onPress={() => {
          ref.props.set_page_type('profile')
        }}>
          <Icon name='person' type='MaterialIcons' style={ref.props.page_type === 'profile' ? Styles.fBtnIconActive : Styles.fBtnIcon} />
          <Text style={ref.props.page_type === 'profile' ? Styles.fBtnTextActive : Styles.fBtnText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </Container>
  }
}


const mapStateToProps = (state) => {
  const { page_type, verifications } = state.page_type_reducer;
  return { page_type, verifications }
};

const mapDispatchToProps = dispatch => {
  return {
    set_page_type: (type) => {
      dispatch(set_page_type(type))
    },
    set_init: () => {
      dispatch(set_init())
    },
    set_verifications: (data) => {
      dispatch(set_verifications(data))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);