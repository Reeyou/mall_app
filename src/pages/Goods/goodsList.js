import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import NavigationUtils from '../../navigators/NavigationUtils';

export default class GoodsList extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  goodsItemClick(goods_id) {
    console.log(goods_id);
    NavigationUtils.goPage('GoodsDetail', {goods_id});
  }
  render() {
    return (
      <View style={[styles.base_item, styles.goods_list]}>
        {this.props.data.map(item => {
          return (
            <TouchableOpacity
              style={styles.goods_list_item}
              onPress={() => this.goodsItemClick(item._id)}>
              <Image
                style={styles.goods_list_img}
                source={require('../Home/Demo/img/5.jpg')}
                resizeMode="cover"
              />
              <View style={styles.goods_info}>
                <Text numberOfLines={2} style={styles.name}>
                  {item.product_name}
                </Text>
                <Text style={styles.price_wrapper}>
                  ￥ <Text style={styles.price}> 390 </Text>.00
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  // goods_list
  base_item: {
    textAlign: 'center',
    paddingLeft: 8,
    paddingRight: 8,
  },
  itemPic: {
    width: '100%',
    height: 50,
  },
  goods_list: {
    flexDirection: 'column',
    marginVertical: 10,
  },
  goods_list_item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 10,
  },
  goods_list_img: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
  goods_info: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingLeft: 5,
    paddingRight: 5,
  },
  name: {
    width: '100%',
    fontSize: 14,
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  price_wrapper: {
    color: 'red',
    paddingLeft: 5,
  },
  price: {
    fontSize: 16,
  },
  goods_comment: {
    flexDirection: 'row',
  },
  goods_comment_text: {
    fontSize: 10,
    color: '#777',
    marginRight: 10,
  },
});
