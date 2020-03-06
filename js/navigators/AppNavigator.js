import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Welcome from '../pages/Welcome'
import Index from '../pages'
import GoodsDetail from '../pages/Home/GoodsDetail'
import ParallaxHeader from '../pages/Home/parallaxHeader'

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
  },
  GoodsDetail: {
    screen: GoodsDetail,
    navigationOptions: {
      headerShown: false
    }
  },
  ParallaxHeader: {
    screen: ParallaxHeader,
    navigationOptions: {
      headerShown: false
    }
  },
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