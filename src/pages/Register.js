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
import { Header, Button, Block, Input, Text } from "../components";
import { theme } from "../constants";
import { StackActions } from '@react-navigation/native';
const popAction = StackActions.pop(1);
export default class Register extends Component {
  state = {
    email: null,
    username: null,
    password: null,
    errors: [],
    loading: false
  };

  handleSignUp () {
    const { navigation } = this.props;
    const { email, username, password } = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({ loading: true });

    // check with backend API or with some static data
    if (!email) errors.push("email");
    if (!username) errors.push("username");
    if (!password) errors.push("password");

    this.setState({ errors, loading: false });

    if (!errors.length) {
      Alert.alert(
        "Success!",
        "Your account has been created",
        [
          {
            text: "Continue",
            onPress: () => {
              navigation.navigate("Browse");
            }
          }
        ],
        { cancelable: false }
      );
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
      <KeyboardAvoidingView style={styles.signup} behavior={Platform.OS == "ios" ? "padding" : "height"}>
        <Header statusBar={statusBar} leftContent={this._renderLeftContent()} />
        <Block padding={[0, theme.SIZES.base * 2]}>
          <Text h1 bold>
            注册
          </Text>
          <Block middle>
            <Input
              email
              label="邮箱"
              error={hasErrors("email")}
              style={[styles.input, hasErrors("email")]}
              defaultValue={this.state.email}
              onChangeText={text => this.setState({ email: text })}
            />
            <Input
              label="用户名"
              error={hasErrors("username")}
              style={[styles.input, hasErrors("username")]}
              defaultValue={this.state.username}
              onChangeText={text => this.setState({ username: text })}
            />
            <Input
              secure
              label="用户密码"
              error={hasErrors("password")}
              style={[styles.input, hasErrors("password")]}
              defaultValue={this.state.password}
              onChangeText={text => this.setState({ password: text })}
            />
            <Input
              label="验证码"
              error={hasErrors("password")}
              style={[styles.input, hasErrors("password")]}
              defaultValue={this.state.password}
              onChangeText={text => this.setState({ password: text })}
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
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.COLORS.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  hasErrors: {
    borderBottomColor: theme.COLORS.accent
  }
});