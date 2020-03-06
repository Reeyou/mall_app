import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  Dimensions
} from 'react-native'
import NavigationBar from '../../component/NavigationBar'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import LinearGradient from 'react-native-linear-gradient';
import Banner from '../../component/Banner'
import Menu from './Menu'
import GoodsList from './GoodsList';
import GoodsCard from './GoodsCard';
import { Px2dp } from '../../utils/Px2dp'
import NavigationUtils from '../../navigators/NavigationUtils'
import ParallaxScrollView from 'react-native-parallax-scroll-view'

let { width, height } = Dimensions.get('window');
const ScrollList = (props) => {
  return (
    <View
      style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', padding: 10, backgroundColor: '#fff', borderBottomColor: '#efefef', borderBottomWidth: 1 }}>
      <View style={{ alignItems: 'center' }}>
        <Text style={{}}>借款</Text>
        <Text style={{ marginTop: 5 }}> 93,943.44</Text>
      </View>
      <Text style={{ fontSize: 15 }}>+903.09 USDT</Text>

    </View>
  )
}
const TitleContent = (props) => {
  return (
    <View style={{
      width: width,
      height: 850,
      justifyContent: 'center'
      , marginTop: 30
    }}>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text
          style={{ color: 'white', fontSize: 28, marginTop: 50 }}>BTC</Text>
      </View>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Text style={{ paddingVertical: 5, textAlign: 'center', color: 'white' }}> 93,943.44</Text>
          <Text style={{ paddingVertical: 5, textAlign: 'center', color: 'white' }}>总资产</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ paddingVertical: 5, textAlign: 'center', color: 'white' }}>93,943.44</Text>
          <Text style={{ paddingVertical: 5, textAlign: 'center', color: 'white' }}> 可用资产</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ paddingVertical: 5, textAlign: 'center', color: 'white' }}> 93,943.44 </Text>
          <Text style={{ paddingVertical: 5, textAlign: 'center', color: 'white' }}> 冻结资产</Text>
        </View>
      </View>
    </View>
  )
}
export default class DetailPage extends Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      // <View style={{ width: width, height: 800 }}>
        <View style={styles.container}>
          <ParallaxScrollView
            backgroundColor="#484848"
            contentBackgroundColor="transparent"
            headerBackgroundColor="#333"
            stickyHeaderHeight={70}
            parallaxHeaderHeight={250}
            backgroundSpeed={2}
            //设置头部背景图片
            renderBackground={() => (
              <View key="background">
                <Image source={require('./Demo/img/1.jpg')}
                  resizeMode='cover'
                  style={{
                    width: width,
                    height: 250,
                  }}>
                </Image>
                <View style={{ position: 'absolute', top: 0, width: width, backgroundColor: 'rgba(0,0,0,.4)', height: 250 }} />
              </View>
            )
            }
            //自定义头部内容
            renderForeground={() => (
              <TitleContent />
            )
            }
            //导航栏标题
            renderStickyHeader={() => (
              <View key="sticky-header" style={styles.stickySection}>
                {/* <Text style={styles.stickySectionText}>详情页</Text> */}
              </View>
            )
            }
            //固定的导航栏样式
            renderFixedHeader={() => (
              <View key="fixed-header" style={styles.fixedSection}>
                <TouchableOpacity style={{}} onPress={() => { }}>
                  <Text style={{ color: '#fff', marginRight: 10 }}>记录</Text>
                </TouchableOpacity>
              </View>
            )
            }
          >
            <View style={{ marginTop: 10 }}>
              {/* //自定义内容 */}
              <ScrollList />
              <ScrollList />
              <ScrollList />
              <ScrollList />
              <ScrollList />
              <ScrollList />
              <ScrollList />
              <ScrollList />
              <ScrollList />
            </View>
          </ParallaxScrollView>
        </View>
      // </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef'
  },
  header: {
    backgroundColor: '#3E71FC'
  },
  parallaxHeader: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 100
  },
  stickySection: {
    flexDirection: 'row',
    alignItems: "center",
    height: 50,
    width: width,
    backgroundColor: "#484848",
    justifyContent: 'space-around'
  },
  stickySectionText: {
    color: 'white',
    fontSize: 20,
    margin: 10,
  },
  fixedSection: {
    width: width,
    position: 'absolute',
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
})