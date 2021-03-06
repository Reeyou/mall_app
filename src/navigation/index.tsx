import React from "react";
import {
    Image,
    TouchableOpacity
} from 'react-native';
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

// screens
import {
  Welcome,
  Detail,
  GoodsDetail,
  Login,
  Register,
  Userinfo,
  Setting,
  AboutApp,
  AboutMe,
  Web,
  Order
} from "../pages";
// extra screens
import Tabs from "./Tabs";

import { icons, COLORS, SIZES } from '../constants';


const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};

const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                initialRouteName={'Welcome'}
                screenOptions={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                  }}
            >
                {/* Screens */}
                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="GoodsDetail"
                    component={GoodsDetail}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Userinfo"
                    component={Userinfo}
                />
                <Stack.Screen
                    name="Setting"
                    component={Setting}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AboutApp"
                    component={AboutApp}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AboutMe"
                    component={AboutMe}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="WebView"
                    component={Web}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Order"
                    component={Order}
                    options={{ headerShown: false }}
                />
    
                {/* Tabs */}
                < Stack.Screen
                    name="Home"
                    component={Tabs}
                    options={{ headerShown: false }}
                />
    
    
            </Stack.Navigator>
        </NavigationContainer >
    )
}