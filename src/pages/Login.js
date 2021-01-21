import React, { Component } from 'react'
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Platform
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Header, Button, Block, Input, Text, Spin, Toast } from "../components";
import { COLORS, SIZES, theme } from "../constants";
import { StackActions } from '@react-navigation/native';
import { login } from '../api/auth'
import AsyncStorage from '@react-native-community/async-storage';

const VALID_USERNAME = "test";
const VALID_PASSWORD = "111";
const popAction = StackActions.pop(1);
export default class LoginScreen extends Component {
  state = {
    username: VALID_USERNAME,
    password: VALID_PASSWORD,
    errors: [],
    loading: false,
    position: 'top'
  };
  handleLogin () {
    const { navigation } = this.props;
    const { username, password } = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({ loading: true });

    // check with backend API or with some static data
    if (!username) errors.push("username")
    if (!password) errors.push("password")

    this.setState({ errors, loading: false });

    if (!errors.length) {
      const params = { username, password }
      this.setState({ loading: true })
      login(params).then(res => {
        console.log(res)
        this.setState({ loading: false })
        if (res.code === 200) {
          this.refs.toast.show(res.msg);
          AsyncStorage.setItem('userinfo', JSON.stringify(res.data))
          AsyncStorage.getItem('userinfo', (err, result) => {
            console.log(JSON.parse(result))
          })
          // navigation.navigate("Home");
        } else {
          this.refs.toast.show(res.msg);
        }
      })
    }
  }
  render () {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);
    const statusBar = {
      backgroundColor: '#fff',
      barStyle: 'dark-content',
    };
    return (
      <KeyboardAvoidingView style={styles.login} behavior={Platform.OS == "ios" ? "padding" : "height"}>
        <Header
          statusBar={statusBar}
          leftContent={ViewUtil.getLeftBackButton(() => _utils.goBack(this.props.navigation))}
        />
        <Block block padding={[0, theme.SIZES.base * 2]}>
          <Text h1 bold>
            登录
          </Text>
          <Block block middle>
            <Input
              label="用户名/邮箱"
              placeholder="请输入用户名/邮箱地址"
              error={hasErrors("username")}
              style={[styles.input, hasErrors("username")]}
              defaultValue={this.state.username}
              onChangeText={text => this.setState({ username: text })}
            />
            <Input
              secure
              label="密码"
              placeholder="请输入密码"
              error={hasErrors("password")}
              style={[styles.input, hasErrors("password")]}
              defaultValue={this.state.password}
              onChangeText={text => this.setState({ password: text })}
            />
            <Button gradient onPress={() => this.handleLogin()}>
              {loading ? (
                <ActivityIndicator size={28} color="white" />
              ) : (
                  <Text bold white center>
                    登录
                  </Text>
                )}
            </Button>

            <Button onPress={() => navigation.navigate("Register")}>
              <Text
                gray
                caption
                right
                style={{ textDecorationLine: "underline" }}
              >
                新用户注册
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
  login: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: '#fff',
  },
  input: {
    borderRadius: SIZES.base / 2,
    borderWidth: 0,
    backgroundColor: COLORS.gray1,
  },
  hasErrors: {
    borderBottomColor: theme.COLORS.accent
  }
});
