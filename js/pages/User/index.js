import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ART
} from 'react-native'
import NavigationBar from '../../component/NavigationBar'
import AntDesign from 'react-native-vector-icons/AntDesign'

const WIDTH = Dimensions.get('window').width
const THEME_COLOR = 'white'
const {
  Surface, //  一个矩形可渲染的区域，是其他元素的容器
  Group, // 可容纳多个形状、文本和其他的分组
  Shape, // 形状定义，可填充
  Path, // 路径
  LinearGradient, // 渐变色
  Pattern, // 填充图片
  ClippingRectangle, // 剪辑
} = ART;
export default class User extends Component {
  constructor(props) {
    super(props)
  }
  getLeftContent() {
    return <TouchableOpacity
      style={{ flexDirection: 'row' }}
    >
      <Text
        style={styles.title}
      >个人中心</Text>
    </TouchableOpacity>
  }
  getRightButton() {
    return <TouchableOpacity
      style={{ flexDirection: 'row' }}
    >
      <AntDesign
        name={'message1'}
        size={26}
        style={{ color: '#000' }}
      />
    </TouchableOpacity>
  }

  // 绘制用户信息贝塞尔曲线
  _renderCurve() {
    let d_path = Path('M 0 0 h 360 v 183.1 C 300 207 240 219 180 219 S 60 207 0 183.1 V 0 Z M 0 0 h 360 v 183.1 C 300 207 240 219 180 219 S 60 207 0 183.1 V 0 Z M 0 0 h 360 v 183.1 C 300 207 240 219 180 219 S 60 207 0 183.1 V 0 Z');
    let path = Path().move(0, 0).curve(WIDTH / 2, 80, WIDTH, 0).close()

    return <View style={styles.userInfo}>
      <View style={{ width: WIDTH, height: 100, backgroundColor: '#fff', marginBottom: -10 }}></View>
      <Surface width={WIDTH} height={100} style={{ backgroundColor: '#ddd', marginTop: 10 }}>
        <Shape d={path} fill='#fff' strokeWidth={1} />
      </Surface>
    </View>
  }
  render() {
    let statusBar = {
      backgroundColor: THEME_COLOR,
      barStyle: 'light-content',
      // hidden: true
    }
    let navigationBar = <NavigationBar
      statusBar={statusBar}
      renderLeftContent={this.getLeftContent()}
      renderRightButton={this.getRightButton()}
      style={{ backgroundColor: THEME_COLOR }}
    />
    return (
      <View style={styles.container}>
        {navigationBar}
        {this._renderART()}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    marginRight: 10
  },
  TextInput: {
    fontSize: 13,
    color: '#e5e5e5',
    height: 34,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    padding: 0,
    paddingLeft: 26,
    paddingRight: 10,
  },
  tabStyle: {
    flex: 1,
    fontSize: 24,
    fontWeight: "bold"

  },
  barStyle: {
    height: 50,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: THEME_COLOR
  },
  labelStyle: {
    fontSize: 13,
    margin: 0,
  },
  indicatorStyle: {
    height: 2,
    backgroundColor: 'white',
    position: 'absolute',
    left: 10
  },
  indicatorContainer: {
    alignItems: 'center'
  },

  //==================//
  userInfo: {
    width: WIDTH,
    position: 'relative',
    top: -70,
    left: 0,
    marginBottom: -70,
    elevation: -1
  }
})