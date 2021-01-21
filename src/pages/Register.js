import React, { Component } from "react";
import {
  Alert,
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Platform
} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Header, Button, Block, Input, Text, Toast } from "../components";
import { theme } from "../constants";
import { StackActions } from '@react-navigation/native';
import { getCode } from '../api/auth'

const popAction = StackActions.pop(1);
const timer = 60
let _timer
export default class Register extends Component {
  state = {
    email: null,
    username: null,
    password: null,
    code: null,
    errors: [],
    loading: false,
    codeLoading: false,
    codeVisible: true,
    codeSendTime: timer,
    position: 'top'
  };
  componentWillUnmount () {
    clearInterval(_timer)
  }
  handleSignUp () {
    const { navigation } = this.props;
    const { email, username, password, code } = this.state;
    const errors = [];
    console.log(username)

    Keyboard.dismiss();
    this.setState({ loading: true });

    // check with backend API or with some static data
    if (!email) errors.push("email");
    if (!username) errors.push("username");
    if (!password) errors.push("password");
    if (!code) errors.push("code");

    this.setState({ errors, loading: false });

    if (!errors.length) {
      Alert.alert(
        "Success!",
        "Your account has been created",
        [
          {
            text: "Continue",
            onPress: () => {
              // navigation.navigate("Browse");
            }
          }
        ],
        { cancelable: false }
      );
    }
  }
  _rightLabel () {
    const { codeLoading, codeVisible } = this.state
    if (!codeLoading && codeVisible) {
      return <Text black>发送</Text>
    } else if (codeLoading && !codeVisible) {
      return <ActivityIndicator size={28} color="red" />
    } else {
      return <Text lightGray>{this.state.codeSendTime}s</Text>
    }
  }
  _sendCode () {
    this.setState({ codeLoading: true, codeVisible: false })
    getCode({ email: '978403496@qq.com' }).then(res => {
      if (res.code === 200) {
        this.refs.toast.show(res.msg);
        this.setState({
          codeVisible: false,
          codeLoading: false
        }, () => {
          if (!this.state.codeVisible) {
            _timer = setInterval(() => {
              this.setState({
                codeSendTime: (this.state.codeSendTime - 1)
              }, () => {
                if (this.state.codeSendTime === 0) {
                  clearInterval(_timer)
                  this.setState({ codeVisible: true, codeSendTime: timer })
                }
              })
            }, 1000)
          }
        })
      } else {
        this.refs.toast.show(res.msg);
        this.setState({ codeLoading: false, codeVisible: true })
      }
    }).catch(e => {
      console.log(e)
    })
  }
  render () {
    const { navigation } = this.props;
    const { loading, errors, email, username, password, code } = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);
    const statusBar = {
      backgroundColor: '#fff',
      barStyle: 'dark-content',
    };
    return (
      <KeyboardAvoidingView style={styles.signup} behavior={Platform.OS == "ios" ? "padding" : "height"}>
        <Header
          statusBar={statusBar}
          leftContent={ViewUtil.getLeftBackButton(() => _utils.goBack(this.props.navigation))}
        />
        <Block padding={[0, theme.SIZES.base * 2]}>
          <Text h1 bold>
            注册
          </Text>
          <Block middle>
            <Input
              email
              label="邮箱"
              placeholder="请输入邮箱地址"
              error={hasErrors("email")}
              style={[styles.input, hasErrors("email")]}
              defaultValue={email}
              onChangeText={text => this.setState({ email: text })}
            />
            <Input
              label="用户名"
              placeholder="请输入用户名"
              error={hasErrors("username")}
              style={[styles.input, hasErrors("username")]}
              defaultValue={username}
              onChangeText={text => this.setState({ username: text })}
            />
            <Input
              secure
              label="用户密码"
              placeholder="请输入密码"
              error={hasErrors("password")}
              style={[styles.input, hasErrors("password")]}
              defaultValue={password}
              onChangeText={text => this.setState({ password: text })}
            />
            <Input
              label="验证码"
              placeholder="请输入验证码"
              disabled={!this.state.codeVisible}
              rightLabel={this._rightLabel()}
              onRightPress={() => this._sendCode()}
              error={hasErrors("code")}
              style={[styles.input, hasErrors("code")]}
              defaultValue={code}
              onChangeText={text => this.setState({ code: text })}
            />
            <Button gradient onPress={() => this.handleSignUp()}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                  <Text bold white center>
                    注册
                  </Text>
                )}
            </Button>

            <Button onPress={() => navigation.navigate("Login")}>
              <Text
                gray
                caption
                right
                style={{ textDecorationLine: "underline" }}
              >
                返回登录
              </Text>
            </Button>
          </Block>
        </Block>
        <Toast ref="toast" position={this.state.position} />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  signup: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: '#fff'
  },
  input: {
    borderRadius: theme.SIZES.base / 2,
    borderWidth: 0,
    backgroundColor: theme.COLORS.gray1,
  },
  hasErrors: {
    borderWidth: StyleSheet.hairlineWidth,
    borderStyle: 'solid',
    borderColor: theme.COLORS.accent,
  }
});