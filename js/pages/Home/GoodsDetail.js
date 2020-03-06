import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView
} from 'react-native'
import NavigationBar from '../../component/NavigationBar'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Swiper from 'react-native-swiper';
import Carousel from 'react-native-snap-carousel'

const offsetTopHeight = -50
const { width } = Dimensions.get('window');
const DOT_WIDTH = 8
const GOODS_RED = '#ef5a62'
export default class GoodsDetail extends Component {
  constructor(props) {
    super(props)
    this.bannerList = [
      { bannerImg: require('./Demo/img/1.jpg') },
      { bannerImg: require('./Demo/img/2.jpg') },
      { bannerImg: require('./Demo/img/3.jpg') },
      { bannerImg: require('./Demo/img/4.jpg') },
      { bannerImg: require('./Demo/img/5.jpg') }
    ]
  }
  getLeftButton() {
    return <TouchableOpacity
      style={styles.navBtn}
    >
      <Ionicons
        name={'ios-arrow-back'}
        size={22}
        style={{ color: '#000' }}
      />
    </TouchableOpacity>
  }
  getRightButton() {
    return <View style={{ flexDirection: 'row', alignItems: "center" }}>
      <TouchableOpacity style={styles.navBtn}>
        <SimpleLineIcons
          name={'share-alt'}
          size={20}
          style={{ color: '#000' }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navBtn}>
        <Ionicons
          name={'ios-more'}
          size={20}
          style={{ color: 'black' }}
        />
      </TouchableOpacity>
    </View>
  }
  onScroll(e) {
    // console.log(e)
  }
  onMoment(e, state, context) {

  }
  renderGoodsInfo() {
    return (
      <View style={[styles.goods_info, styles.addPadding]}>
        {/* <header></header> */}
        <View style={styles.goods_info_header}>
          <Text style={styles.price}>￥<Text style={styles.price_pic}>3599</Text>.00</Text>
          <TouchableOpacity style={styles.goods_info_heart}>
            <MaterialCommunityIcons
              // heart-multiple
              name={'heart-multiple-outline'}
              size={20}
              style={{ color: '#666' }}
            />
            <Text style={styles.tip}>关注</Text>
          </TouchableOpacity>
        </View>
        {/* goods_name */}
        <View style={{ flex: 1 }}>
          <Text style={styles.goods_name}>荣耀9X 麒麟810 4000mAh超强续航全网通1116GB+128GB (黑色)</Text>
          <Text style={styles.goods_desc}>荣耀9X 麒麟810 4000mAh超强续航 6GB+128GB (黑色)</Text>
        </View>
      </View>
    )
  }
  renderGoodsPromotion() {
    return (
      // {/* 促销活动 */}
      <View style={[styles.promotion, styles.addPadding]}>
        <View style={styles.promotion_content}>
          <Text style={styles.tip}>促销</Text>
          <View style={styles.promotion_item_content}>
            <View style={styles.promotion_item}>
              <Text style={styles.promotion_label}>赠品</Text>
              <Text style={styles.promotion_title} numberOfLines={1} ellipsizeMode="tail">华为Mate30Pro系列钢化膜 赠品（图片仅供参考，具体请以收到实物为准）</Text>
            </View>
            <View style={styles.promotion_item}>
              <Text style={styles.promotion_label}>赠品</Text>
              <Text style={styles.promotion_title} numberOfLines={1} ellipsizeMode="tail">华为Mate30Pro系列钢化膜 赠品（图片仅供参考，具体请以收到实物为准）</Text>
            </View>
          </View>
        </View>
        <Ionicons
          name={'ios-more'}
          size={18}
          style={{ color: '#666' }}
        />
      </View>
    )
  }
  renderGoodsSku() {
    return (
      // {/* sku */}
      <View style={[styles.goods_sku, styles.addPadding]}>
        <View style={styles.goods_sku_content}>
          <Text style={styles.tip}>已选</Text>
          <Text style={styles.sku_info}>丹霞橙(8+256G)，1件，可选服务</Text>
        </View>
        <Ionicons
          name={'ios-more'}
          size={18}
          style={{ color: '#666' }}
        />
      </View>
    )
  }
  renderGoodsParts() {
    return (
      // {/* 热门配件 */}
      <View style={[styles.goods_parts, styles.addPadding]}>
        <View style={styles.parts_header}>
          <Text style={styles.tip}>热门配件</Text>
          <View style={styles.parts_more}>
            <Text style={styles.tip}>查看更多</Text>
            <AntDesign
              name={'right'}
              size={12}
              style={{ color: '#666' }}
            />
          </View>
        </View>
        <View style={styles.part_content}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}>
            {
              this.bannerList.map((item,index) => (
                <View style={styles.part_item}>
                  <Image style={{width: 60,height: 60}} source={item.bannerImg} resizeMode='cover'/>
                  <Text style={styles.part_item_label}>手机贴膜</Text>
                </View>
              ))
            }
          </ScrollView>
        </View>
      </View>
    )
  }
  _renderItem ({item, index}) {
    return (
        <View style={styles.slide}>
            <Image style={{width: 80,height: 80}} source={item.bannerImg} resizeMode='cover'/>
        </View>
    );
}
  // 商品评价
  renderGoodsComment() {
    return (
      <View style={[styles.goods_comment, styles.addPadding]}>
        <View style={styles.goods_comment_header}>
          <View style={styles.header_left}>
            <View style={styles.comment_line}></View>
            <Text style={styles.goods_comment_label}>商品评价(<Text style={styles.goods_comment_count}>12</Text>)</Text>
          </View>
          <View style={styles.header_Right}>
            <Text style={styles.goods_comment_percent}>好评度<Text style={styles.percent}>100%</Text></Text>
            <AntDesign
              name={'right'}
              size={12}
              style={{ color: '#666' }}
            />
          </View>
        </View>
        <View style={styles.goods_comment_container}>
          <View style={styles.comment_content_header}>
            <View style={styles.comment_user}>
              <Image
                style={{ width: 30, height: 30, borderRadius: 30 }}
                source={require('./Demo/img/1.jpg')}
                resizeMode='cover'
              />
              <Text style={styles.comment_username}>Reeyou</Text>
            </View>
            <AntDesign
              name={'right'}
              size={12}
              style={{ color: '#666' }}
            />
          </View>
          <View style={styles.goods_comment_content}>
            <Text style={styles.comment_text}>手机收到了，很漂亮，应该质量很好，看到很满意，特别是物流很快，下单以后一天就收到了，很满意，谢谢😊</Text>
            <View style={styles.goods_comment_img}>
              <Image
                style={{ width: 60, height: 60 }}
                source={require('./Demo/img/1.jpg')}
                resizeMode='cover'
              />
            </View>
          </View>
          <Text style={styles.comment_goods_sku}>亮黑色,8GB+256GB</Text>
          <View style={styles.comment_all_container}>
            <Text style={styles.comment_all}>查看全部评价</Text>
          </View>
        </View>
      </View >
    )
  }
  renderGoodsDetail() {
    return (
      // {/* 商品详情 */}
      <View style={styles.goods_detail}>
        <View style={styles.detail_header}>
          <View style={styles.detail_header_line}></View>
          <Text style={styles.detail_title}>商品详情</Text>
          <View style={styles.detail_header_line}></View>
        </View>
        <Image
          style={{ width: '100%' }}
          source={require('./Demo/img/1.jpg')}
          resizeMode='cover'
        />
      </View>
    )
  }
  renderGoodsCart() {
    return (
      <View style={[styles.detail_cart,styles.addPadding]}>
        <View style={styles.service}>
          <AntDesign
            name={'customerservice'}
            size={20}
            style={{ color: '#333' }}
          />
          <Text style={styles.cart_label}>客服</Text>
        </View>
        <View style={styles.cart_add}>
          <EvilIcons
            name={'cart'}
            size={26}
            style={{ color: '#333' }}
          />
          <Text style={styles.cart_label}>购物车</Text>
        </View>
        <View style={styles.cart_handle}>
          <Text style={styles.add}>加入购物车</Text>
          <Text style={styles.buy}>立即购买</Text>
        </View>
      </View>
    )
  }
  render() {
    let statusBar = {
      // backgroundColor: this.state.statusBarbackgroundColor, // 单独设置吸顶状态栏样式
    }
    let navigationBar = <NavigationBar
      statusBar={statusBar}
      renderLeftContent={this.getLeftButton()}
      renderRightButton={this.getRightButton()}
      style={{ backgroundColor: 'transparent' }}
    />
    return (
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {navigationBar}
          <View style={styles.container}>
            <Swiper style={styles.wrapper}
              height={150}
              autoplay={true}
              onScrollBeginDrag={this.onScroll.bind(this)}
              onMomentumScrollEnd={this.onMoment.bind(this)}
              dot={<View style={{
                backgroundColor: 'white',
                width: 8,
                height: 4,
                borderRadius: 8,
                marginLeft: 2,
                marginRight: 2
              }} />}
              activeDot={<View style={{
                backgroundColor: 'white',
                width: 14,
                height: 4,
                borderRadius: 8,
                marginLeft: 2,
                marginRight: 2
              }} />}
              paginationStyle={{
                bottom: 10,
              }}>
              {
                this.bannerList.map((item, index) => (
                  <View style={styles.slide}>
                    <Image
                      style={styles.image}
                      source={item.bannerImg}
                      // resizeMode='cover'
                    />
                  </View>
                ))
              }
            </Swiper>
          </View>
          <View style={styles.goods_container}>
            {this.renderGoodsInfo()}
            {this.renderGoodsPromotion()}
            {this.renderGoodsSku()}
            {this.renderGoodsParts()}
            {this.renderGoodsComment()}
          </View>
          {this.renderGoodsDetail()}
        </ScrollView>
        {this.renderGoodsCart()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 320,
    position: 'relative',
    top: offsetTopHeight,
    left: 0,
    marginBottom: offsetTopHeight,
    elevation: -2
  },
  wrapper: {
    width: '100%',
    height: '100%',
  },
  slide: {
    backgroundColor: 'transparent'
  },
  image: {
    width,
    height: '100%',
  },
  leftBtn: {
    flexDirection: 'row'
  },
  navBtn: {
    // backgroundColor: 'rgba(0,0,0,0.34)',
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 6,
    paddingRight: 6,
    borderRadius: 20,
  },

  //goods_info
  addPadding: {
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  goods_container: {
    flex: 1,
  },
  goods_info: {
    flex: 1,
    backgroundColor: 'white',
  },
  goods_info_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 14,
    color: '#f2270c',
    fontWeight: 'bold'
  },
  price_pic: {
    fontSize: 18
  },
  goods_info_heart: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  goods_name: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },
  goods_desc: {
    fontSize: 12,
    color: '#666'
  },
  // goods_promotion
  promotion: {
    width: '100%',
    flexDirection: "row",
    justifyContent: 'space-between',
    backgroundColor: "white",
    marginTop: 10
  },
  promotion_content: {
    width: 240,
    flexDirection: 'row',
    // alignItems: 'center'
  },
  promotion_item_content: {
    flexDirection: 'column'
  },
  promotion_item: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 240,
    marginBottom: 4
  },
  promotion_label: {
    fontSize: 8,
    color: GOODS_RED,
    marginLeft: 10,
    textAlign: 'center',
    paddingHorizontal: 6,
    borderColor: GOODS_RED,
    borderWidth: 1,
    borderRadius: 10
  },
  promotion_title: {
    marginTop: -2,
    fontSize: 13,
    color: '#666',
    marginLeft: 5
  },
  tip: {
    fontSize: 12,
    color: '#666',
    marginTop: -2,
    alignItems: 'flex-start'
  },
  //goods_sku
  goods_sku: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "white",
    marginTop: 10,
    color: '#666'
  },
  goods_sku_content: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  sku_info: {
    paddingLeft: 12,
    paddingRight: 32,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },
  //goods_parts
  goods_parts: {
    flexDirection: 'column',
    backgroundColor: 'white',
    marginTop: 10
  },
  parts_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  parts_more: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  part_content: {
    marginTop: 10
  },
  part_item: {
    marginRight: 10,
    width: 80,
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(102,104,108,0.1)',
    borderRadius: 2,
    paddingVertical: 4
  },
  part_item_label: {
    width: '100%',
    paddingVertical: 2,
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: '#f9f9f9',
    opacity: 0.8,
    fontSize: 12,
    color: '#000',
    marginTop: 2,
    textAlign: 'center'
  },

  //goods_commnet
  goods_comment: {
    marginTop: 10,
    backgroundColor: '#fff'
  },
  goods_comment_header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  header_left: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  header_Right: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  comment_line: {
    width: 4,
    height: 14,
    backgroundColor: '#f2270c'
  },
  goods_comment_label: {
    fontWeight: 'bold',
    marginLeft: 2
  },
  goods_comment_count: {

  },
  goods_comment_percent: {
    fontSize: 12,
    color: '#666'
  },
  percent: {
    color: GOODS_RED
  },
  goods_comment_container: {

  },
  comment_content_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10
  },
  comment_user: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  comment_username: {
    marginLeft: 10,
    fontSize: 12,
    color: '#333'
  },
  goods_comment_content: {
    marginVertical: 10,
  },
  comment_text: {
    fontSize: 12
  },
  goods_comment_img: {
    marginTop: 6
  },
  comment_goods_sku: {
    fontSize: 12,
    color: '#999'
  },
  comment_all_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10
  },
  comment_all: {
    fontSize: 12,
    fontWeight: '400',
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20
  },
  //goods_cart
  detail_cart: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopColor: '#ccc',
    borderTopWidth: 1,
  },
  service: {
    width: 54,
    flexDirection: 'column',
    alignItems: 'center'
  },
  cart_add: {
    width: 54,
    flexDirection: 'column',
    alignItems: 'center'
  },
  cart_label: {
    fontSize: 10,
    color: "#333"
  },
  cart_handle: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  add: {
    backgroundColor: GOODS_RED,
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal:  18,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20
  },
  buy: {
    backgroundColor: "#ca141d",
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal:  18,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20
  },
  //goods_detail
  goods_detail: {
    flexDirection: 'column',
    alignItems: "center",
  },
  detail_header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  detail_header_line: {
    width: 20,
    height: 1,
    backgroundColor: '#999'
  },
  detail_title: {
    paddingVertical: 10,
    color: '#666',
    marginHorizontal: 4
  }
})