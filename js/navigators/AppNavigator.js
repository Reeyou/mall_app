import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Welcome from '../pages/Welcome'
import Index from '../pages'

const InitNavigator = createStackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      headerShown: false
    }
  }
})
const MainNavigator = createStackNavigator({
  Index: {
    screen: Index,
    navigationOptions: {
      headerShown: false
    }
  }
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Init: InitNavigator,
      Main: MainNavigator
    },
    {
      navigationOptions: {
        headerShown: false
      }
    }
  )
)