import React from 'react'
import { StatusBar, TouchableOpacity, Alert, ActivityIndicator, Image, FlatList, TextInput, Dimensions, AsyncStorage, ToastAndroid, BackHandler } from 'react-native'
import { Container, Content, Icon, Text, View, Header } from 'native-base'
import NavigationService from '@Service/Navigation'
import DatabaseService from '@Service/Database'
import Style from '@Theme/Style'
import Styles from '@Screen/Login/Style'
import { connect } from 'react-redux';
import { set_page_type, set_init } from '@Redux/actions/page_type_action';
class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      check_login_status: false,
      otp_sent: false,
      country_code: '',
      contact_number: '',
      otp: '',
      message: ''
    }
  }

  _storeData = async (Name, Value) => {
    try {
      return new Promise(async (resolve, reject) => {
        try {
          let data = await AsyncStorage.setItem(Name, Value);
          resolve(data)
        }
        catch (e) {
          reject(e)
        }
      })
    } catch (error) { }
  };


  componentDidMount() {
    try {
      let ref = this;
      ref.props.navigation.addListener('didFocus', async () => {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress.bind(ref))
      })
      ref.props.navigation.addListener('didBlur', async () => {
        BackHandler.removeEventListener('hardwareBackPress');
      })
    }
    catch (e) {
      console.log(eF)
    }
  }

  async send_otp() {
    try {
      if (this.state.country_code != undefined && this.state.contact_number != undefined && this.state.country_code.length === 3 && this.state.contact_number.length === 10) {
        let response = await DatabaseService.send_otp(this.state.country_code + this.state.contact_number)
        if (response != undefined && response.status != undefined && response.status == true) {
          this.setState({
            otp_sent: true,
            otp: '',
            message: ''
          })
        } else {
          this.setState({
            message: 'Invalid Number, Please try again in some time.'
          })
        }
      } else {
        this.setState({
          message: 'Invalid Number, \nPlease try again in some time.'
        })
      }
    }
    catch (e) {
      console.log(e);
      this.setState({
        message: 'All fields are required'
      })
    }
  }

  async verify_otp() {
    try {
      if (this.state.otp != undefined && this.state.otp.length === 4) {
        let response = await DatabaseService.verify_otp(this.state.country_code + this.state.contact_number, this.state.otp)
        console.log(response)
        if (response != undefined && response.token != undefined) {
          let respo = await this._storeData('@token', response.token.toString());
          this.props.set_init()
          this.setState({
            formSubmitted: false,
            message: ''
          })
          NavigationService.navigate('Home')
        } else {
          this.setState({
            message: 'Invalid OTP.'
          })
        }
      } else {
        this.setState({
          message: 'All fields are required'
        })
      }
    }
    catch (e) {
      console.log(e)
    }
  }

  handleBackPress() {
    Alert.alert("Do you wish to exit ?", "",
      [{
        text: "Yes",
        onPress: () => {
          BackHandler.exitApp()
        }
      },
      {
        text: "no",
        onPress: null
      }]
    )
    return true
  }

  render() {
    return <Container>
      {
        ((this.state.check_login_status != null && this.state.check_login_status != true))
          ?
          (
            this.state.otp_sent === false
              ?
              <Content contentContainerStyle={Styles.layoutDefault}>
                <View style={Styles.titleDisplay}>
                  <Text style={Styles.getOTP}>Get OTP</Text>
                  <Text style={Styles.subTitleDisplay}>{'Enter Your' + '\n' + 'Phone Number'}</Text>
                  <View style={Styles.InputDiv}>
                    <TextInput maxLength={3} style={Styles.inputA} ref={(ref) => { this.country_code = ref }} value={this.state.country_code} onChangeText={(text) => {
                      this.setState({
                        country_code: text
                      })
                      if (text.length === 3) {
                        this.contact.focus();
                      }
                    }} placeholder='' />
                    <TextInput maxLength={10} style={Styles.inputB} ref={(ref) => { this.contact = ref }} value={this.state.contact_number} onChangeText={(text) => {
                      this.setState({
                        contact_number: text
                      })
                    }} placeholder='' />
                  </View>
                  <Text style={{ marginBottom: 0, marginTop: 10, fontSize: 12, color: 'red' }}>
                    {
                      this.state.message.length > 0 ? this.state.message : ''
                    }
                  </Text>
                  <View style={Styles.viewA}>
                    <TouchableOpacity style={Styles.continueBtn} onPress={() => {
                      this.send_otp()
                    }}>
                      <Text style={Styles.continueDesc}>Continue</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Content>
              :
              <Content contentContainerStyle={Styles.layoutDefault}>
                <View style={Styles.titleDisplay}>
                  <View style={Styles.OTPHead}>
                    <Text style={Styles.OTPPhone}>{this.state.country_code + ' ' + this.state.contact_number}</Text>
                    <Icon
                      name="edit"
                      type="MaterialIcons"
                      style={Styles.OTPEdit}
                      onPress={() => {
                        this.setState({ otp_sent: false });
                      }}
                    />
                  </View>
                  <Text style={Styles.subTitleDisplay}>{'Enter The' + '\n' + 'OTP'}</Text>
                  <View style={Styles.InputDiv}>
                    <TextInput maxLength={4} style={Styles.inputC} placeholder='' value={this.state.otp} onChangeText={(text) => {
                      this.setState({
                        otp: text
                      })
                    }} />
                  </View>
                  <Text style={{ marginBottom: 0, marginTop: 10, fontSize: 12, color: 'red' }}>
                    {
                      this.state.message.length > 0 ? this.state.message : ''
                    }
                  </Text>
                  <View style={Styles.ctnFlex}>
                    <TouchableOpacity style={Styles.continueBtn} onPress={async () => {
                      this.verify_otp();
                    }}>
                      <Text style={Styles.continueDesc}>Continue</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Content>
          ) :
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator style={{ width: "100%", height: 240 }} />
          </View>
      }
    </Container >
  }
}

const mapStateToProps = (state) => {
  const { page_type } = state.page_type_reducer;
  return { page_type }
};

const mapDispatchToProps = dispatch => {
  return {
    set_page_type: (type) => {
      dispatch(set_page_type(type))
    },
    set_init: () => {
      dispatch(set_init())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
