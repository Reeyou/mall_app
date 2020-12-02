import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import NavigationBar from '../../component/NavigationBar';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import GoodsList from './goodsList';
import Modal, {Manager as ModalManager} from 'react-native-root-modal';
import {getProductListById} from '../../api/product';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const leftWidth = screenWidth - 100;
const leftSpace = 100;
const LIGHT_COLOR = '#f2270c';
export default class Goods extends Component {
  constructor(props) {
    super(props);
    this.navBar = null;
    this.showModalByFadeIn = this.showModalByFadeIn.bind(this);
    this.hideModalByFadeIn = this.hideModalByFadeIn.bind(this);
    this.marginLeftValue = new Animated.Value(0); // 左侧向右动画初始值，默认为0
    this.fadeInAnimated = new Animated.Value(0); // 渐隐动画初始值，默认为0，透明
    this.state = {
      isShowModal: false,
      borderStyle: {},
      searchColor: 'white',
      inputTextColor: '#bbb',
      iconColor: 'white',
      iconBackgroundColor: 'rgba(0,0,0,.48)',
      statusBarbackgroundColor: 'transparent',
      category_id: this.props.navigation.state.params.category_id,
      goods_list: [],
    };
  }
  componentDidMount() {
    this.loadData();
  }
  loadData() {
    getProductListById({category_id: this.state.category_id}).then(res => {
      console.log(res);
      this.setState({
        goods_list: res.data.spu,
      });
    });
  }
  getLeftContent() {
    return (
      <TouchableWithoutFeedback style={{flexDirection: 'row'}}>
        <Text style={styles.title}>分类</Text>
      </TouchableWithoutFeedback>
    );
  }
  getRightButton() {
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={[styles.navBtn]}>
          <AntDesign name={'message1'} size={22} style={{color: '#000'}} />
        </TouchableOpacity>
      </View>
    );
  }
  getSearchInput() {
    return (
      <View style={styles.inputContainer}>
        <EvilIcons name={'search'} size={26} style={styles.search} />
        <TextInput
          style={styles.TextInput}
          onChangeText={() => this.onChangeText()}
          placeholder={'搜索商家或商品名称'}
          placeholderTextColor={'#bbb'}
        />
      </View>
    );
  }
  /*显示浮层*/
  showModalByFadeIn() {
    this.setState(
      {
        isShowModal: true,
      },
      () => {
        this.marginLeftValue.setValue(0);
        // 组动画，组内动画同时执行
        Animated.parallel([
          // 从左向右的动画效果
          Animated.timing(this.marginLeftValue, {
            toValue: 1,
            duration: 500,
            easing: Easing.linear,
          }),
          // 透明度变化的动画效果
          Animated.timing(this.fadeInAnimated, {
            toValue: 0, // 1为不透明
            duration: 500,
            easing: Easing.linear,
          }),
        ]).start();
      },
    );
  }

  /*隐藏浮层*/
  hideModalByFadeIn() {
    Animated.parallel([
      Animated.timing(this.marginLeftValue, {
        toValue: 0,
        duration: 500,
        easing: Easing.linear,
      }),
      Animated.timing(this.fadeInAnimated, {
        toValue: 0, // 1为不透明
        duration: 500,
        easing: Easing.linear,
      }),
    ]).start(() => {
      this.setState({
        isShowModal: false,
      });
    });
  }
  renderGoodsListBar() {
    return (
      <View style={styles.bar_container}>
        <View style={styles.barLabel}>
          <Text style={[styles.label_name, styles.label_light_name]}>综合</Text>
          <AntDesign
            name={'caretdown'}
            size={10}
            style={[styles.bar_icon, styles.bar_light]}
          />
        </View>
        <View style={styles.barLabel}>
          <Text style={styles.label_name}>销量</Text>
        </View>
        <View style={styles.barLabel}>
          <Text style={styles.label_name}>价格</Text>
          <Entypo name={'select-arrows'} size={16} style={styles.bar_icon} />
        </View>
        <TouchableWithoutFeedback
          onPress={() => {
            this.showModalByFadeIn();
          }}>
          <View style={styles.barLabel}>
            <Text style={[styles.label_name, styles.label_light_name]}>
              筛选
            </Text>
            <AntDesign
              name={'filter'}
              size={16}
              style={[styles.bar_icon, styles.bar_light]}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
  render() {
    const movingMargin = this.marginLeftValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-leftWidth, 0],
    });
    let statusBar = {
      backgroundColor: this.state.statusBarbackgroundColor,
      barStyle: 'light-content',
    };
    let navigationBar = (
      <NavigationBar
        barRef={el => (this.navBar = el)}
        statusBar={statusBar}
        renderLeftContent={this.getLeftContent()}
        renderRightButton={this.getRightButton()}
        searchInput={this.getSearchInput()}
        style={[{backgroundColor: 'white'}, this.state.borderStyle]}
      />
    );
    return (
      <ScrollView
        style={styles.goods_list_container}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}>
        {navigationBar}
        {this.renderGoodsListBar()}
        <GoodsList data={this.state.goods_list} />
        {/* //react-native-root-modal  */}
        <Modal style={styles.modalStyle} visible={this.state.isShowModal}>
          <View
            style={{
              marginTop: 0,
              marginLeft: 0,
              width: screenWidth,
              height: screenHeight,
              flexDirection: 'row',
            }}>
            {/*动画View*/}
            <Animated.View
              style={{
                marginTop: 0,
                marginLeft: movingMargin,
                width: leftWidth,
                height: screenHeight,
                backgroundColor: 'white',
              }}>
              <TouchableOpacity
                style={styles.downViewStyle}
                onPress={() => {
                  this.hideModalByFadeIn();
                }}>
                <Text style={{lineHeight: 50}}>touch me hide</Text>
              </TouchableOpacity>
            </Animated.View>

            {/*右侧点击按钮*/}
            <TouchableOpacity
              style={styles.rightStyle}
              onPress={() => {
                this.hideModalByFadeIn();
              }}
              activeOpacity={1}
            />
          </View>
        </Modal>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  goods_list_container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    marginRight: 10,
  },
  inputContainer: {
    marginLeft: 10,
    // marginRight: 10
  },
  TextInput: {
    fontSize: 13,
    color: '#000',
    height: 34,
    borderRadius: 14,
    padding: 0,
    paddingLeft: 34,
    paddingRight: 10,
    backgroundColor: '#eee',
    zIndex: -999,
  },
  search: {
    color: '#bbb',
    position: 'absolute',
    top: 6,
    left: 8,
    zIndex: 999,
  },
  tabStyle: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
  },
  barStyle: {
    height: 50,
    paddingRight: 18,
    paddingLeft: 18,
    backgroundColor: 'white',
  },
  labelStyle: {
    fontSize: 13,
    margin: 0,
  },
  indicatorStyle: {
    height: 2,
    backgroundColor: 'white',
    position: 'absolute',
    left: 10,
  },
  indicatorContainer: {
    alignItems: 'center',
  },

  //
  category_container: {
    flex: 1,
    flexDirection: 'row',
  },
  sectionHeader: {
    flex: 1,
    paddingLeft: 18,
    marginTop: 18,
    marginBottom: 10,
    width: Dimensions.get('window').width,
  },
  header_text: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  listViewStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 10,
    marginRight: 10,
  },
  item_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  item: {
    width: '33.3%',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  category_img: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  item_label: {
    width: 100,
    marginTop: 2,
    fontSize: 12,
    textAlign: 'center',
    color: '#333',
  },
  indicator: {
    color: 'red',
    margin: 10,
  },
  //
  bar_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 40,
    backgroundColor: 'white',
  },
  barLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bar_icon: {
    marginLeft: 2,
  },
  bar_light: {
    color: LIGHT_COLOR,
  },
  label_name: {
    fontWeight: 'bold',
  },
  label_light_name: {
    color: LIGHT_COLOR,
  },
});
