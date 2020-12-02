import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  StatusBar,
  Image,
  View,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
  SectionList,
  Dimensions,
} from 'react-native';
import NavigationBar from '../../component/NavigationBar';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import DataRequest from '../../utils/DataRequest';
import {getCategoryList} from '../../api/category';
import {handleCategoryListData} from './util';
import NavigationUtils from '../../navigators/NavigationUtils';

import Spinkiter from 'react-native-spinkit';

const ANDROID_STATUBAR_HEIGHT = StatusBar.currentHeight;
const THEME_COLOR = 'white';

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      activeIndex: 0,
      menuList: [],
      secondMenuList: [],
    };
    this.DataRequest = new DataRequest();
  }
  componentDidMount() {
    this.loadData();
  }
  loadData() {
    getCategoryList().then(res => {
      this.handleCategory(res.data.list);
      //   let data = handleCategoryListData(res.data.list)
    });
  }
  handleCategory(data) {
    let arr = handleCategoryListData(data);
    let second = [];
    console.log(arr);
    arr.map(item => {
      if (item.hasOwnProperty('children')) {
        item.children.map(i => {
          let obj = {};
          obj.lable = i.category_name;
          obj.data = i.children;
          second.push(obj);
        });
      }
    });
    console.log(second);
    this.setState({
      menuList: arr,
      secondMenuList: second,
    });
  }
  getLeftContent() {
    return (
      <TouchableWithoutFeedback style={{flexDirection: 'row'}}>
        <Text style={styles.title}>分类</Text>
      </TouchableWithoutFeedback>
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
  onClick(index) {
    console.log(index);
    this.setState({
      activeIndex: index,
    });
  }
  _renderMenu() {
    const {activeIndex} = this.state;
    return (
      <ScrollView style={styles.menu}>
        {this.state.menuList.map((item, index) => (
          <TouchableWithoutFeedback
            key={index}
            onPress={() => this.onClick(index)}>
            <View
              style={[
                styles.cell,
                activeIndex == index ? styles.active_cell : '',
              ]}>
              <Text
                style={[
                  styles.label,
                  activeIndex == index ? styles.active_label : '',
                ]}>
                {item.category_name}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    );
  }

  _renderMenuItem() {
    return (
      <View style={styles.category_wrapper}>
        <View
          style={[
            styles.category_content,
            this.state.activeIndex !== 0 ? styles.radius : null,
          ]}>
          <SectionList
            sections={this.state.secondMenuList}
            renderItem={data => this._renderItem(data)}
            renderSectionHeader={data => this._renderSectionHeader(data)}
            contentContainerStyle={styles.listViewStyle}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }
  _renderSectionHeader({section}) {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.header_text}>{section.lable}</Text>
      </View>
    );
  }
  gotoDetail(id) {
    NavigationUtils.goPage('Goods', {category_id: id});
  }
  _renderItem(data) {
    return (
      <View style={styles.item_container}>
        <TouchableOpacity
          style={styles.item}
          onPress={() => this.gotoDetail(data.item._id)}>
          <Image
            style={styles.category_img}
            source={{uri: data.item.img_url}}
          />
          <Text style={styles.item_label}>{data.item.category_name}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    let statusBar = {
      backgroundColor: '#484848',
      barStyle: 'light-content',
    };
    let navigationBar = (
      <NavigationBar
        statusBar={statusBar}
        renderLeftContent={this.getLeftContent()}
        searchInput={this.getSearchInput()}
        style={{backgroundColor: '#f8f8f8'}}
      />
    );
    return (
      <View style={styles.container}>
        {navigationBar}
        <View style={styles.category_container}>
          {this._renderMenu()}
          {this._renderMenuItem()}
          {/* <Spinkiter isVisible={true} size={30} type="Circle" color="#000000" /> */}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
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
    backgroundColor: '#f8f8f8',
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
    backgroundColor: THEME_COLOR,
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
    backgroundColor: '#f8f8f8',
  },
  sectionHeader: {
    flex: 1,
    // paddingLeft: 2,
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
  },
  category_wrapper: {
    flex: 3,
    backgroundColor: '#f8f8f8',
  },
  category_content: {
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
  },
  radius: {
    borderTopLeftRadius: 18,
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
    width: 64,
    height: 64,
    borderRadius: 4,
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
  menu: {
    width: 30,
    flexDirection: 'column',
    backgroundColor: '#f8f8f8',
  },
  cell: {
    height: 44,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  active_cell: {
    backgroundColor: 'white',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  label: {
    fontSize: 13,
    color: '#999',
    textAlign: 'center',
  },
  active_label: {
    color: '#000',
  },
});
