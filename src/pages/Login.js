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
import { Header, Button, Block, Input, Text } from "../components";
import { theme } from "../constants";
import { StackActions } from '@react-navigation/native';

const VALID_EMAIL = "contact@react-ui-kit.com";
const VALID_PASSWORD = "subscribe";
const popAction = StackActions.pop(1);
export default class LoginScreen extends Component {
  state = {
    email: VALID_EMAIL,
    password: VALID_PASSWORD,
    errors: [],
    loading: false
  };
  handleLogin() {
    const { navigation } = this.props;
    const { email, password } = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({ loading: true });

    // check with backend API or with some static data
    if (email !== VALID_EMAIL) {
      errors.push("email");
    }
    if (password !== VALID_PASSWORD) {
      errors.push("password");
    }

    this.setState({ errors, loading: false });

    if (!errors.length) {
      navigation.navigate("Home");
    }
  }
  _renderLeftContent () {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.dispatch(popAction)}>
        <Ionicons
          name={'return-down-back-outline'}
          size={22}
          style={{ color: '#333', marginLeft: 10 }}
        />
      </TouchableOpacity>
    );
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
        <Header statusBar={statusBar} leftContent={this._renderLeftContent()} />
        <Block padding={[0, theme.SIZES.base * 2]}>
          <Text h1 bold>
            登录
          </Text>
          <Block middle>
            <Input
              label="Email"
              error={hasErrors("email")}
              style={[styles.input, hasErrors("email")]}
              defaultValue={this.state.email}
              onChangeText={text => this.setState({ email: text })}
            />
            <Input
              secure
              label="Password"
              error={hasErrors("password")}
              style={[styles.input, hasErrors("password")]}
              defaultValue={this.state.password}
              onChangeText={text => this.setState({ password: text })}
            />
            <Button gradient onPress={() => this.handleLogin()}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
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
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.COLORS.black,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  hasErrors: {
    borderBottomColor: theme.COLORS.accent
  }
});
