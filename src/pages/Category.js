import React, { Component, useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  SectionList,
  Dimensions,
  Image
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Header, SearchBar, Spin } from '../components';
import { getCategoryList } from '../api/category'
import { handleCategoryListData } from '../utils/util'


export default class CategoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      activeIndex: 0,
      menuList: [],
      secondMenuList: [],
    };
  }
  componentDidMount () {
    this.loadData();
  }
  loadData () {
    getCategoryList().then((res) => {
      setTimeout(() => {
        this.setState({
          loading: false
        })
      }, 1000)
      this.handleCategory(res.data.list);
    });
  }
  handleCategory (data) {
    let arr = handleCategoryListData(data);
    let _arr = [];

    arr.map(item => {
      if (item.hasOwnProperty('children')) {
        item.children.map((i) => {
          let obj = { lable: '', data };
          obj.lable = i.category_name;
          obj.data = i.children;
          _arr.push(obj);
        });
      }
    });
    this.setState({
      menuList: arr,
      secondMenuList: _arr,
    });
  }
  getRightButton () {
    return (
      <TouchableOpacity>
        <AntDesign
          name={'message1'}
          size={22}
          style={{ color: '#333', marginLeft: 10 }}
        />
      </TouchableOpacity>
    );
  }
  _renderMenu () {
    const { menuList, activeIndex } = this.state
    return (
      <ScrollView style={styles.menu}>
        {menuList.map((item, index) => (
          <TouchableWithoutFeedback
            key={index}
            onPress={() => this.setState({ activeIndex: index })}>
            <View
              style={styles.cell}>
              <Text
                style={[
                  styles.label,
                  activeIndex == index ? styles.active_label : null,
                ]}>
                {item.category_name}
              </Text>
              <View style={activeIndex == index ? styles.active_cell : null}></View>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    );
  }

  _renderMenuItem () {
    const { secondMenuList, activeIndex } = this.state
    return (
      <View style={styles.category_wrapper}>
        <View
          style={styles.category_content}>
          <SectionList
            sections={secondMenuList}
            keyExtractor={(item, index) => item + index}
            renderItem={data => this._renderItem(data)}
            renderSectionHeader={data => this._renderSectionHeader(data)}
            contentContainerStyle={styles.listViewStyle}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }
  _renderSectionHeader = ({ section }) => {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.header_text}>{section.lable}</Text>
      </View>
    );
  }
  _renderItem (data) {
    return (
      <View style={styles.item_container}>
        <TouchableOpacity
          style={styles.item}
          onPress={() => this.props.navigation.navigate('GoodsDetail')}>
          <Image
            style={styles.category_img}
            source={{ uri: data.item.img_url }}
          />
          <Text style={styles.item_label}>{data.item.category_name}</Text>
        </TouchableOpacity>
      </View>
    );
  }
  render () {
    const statusBar = {
      backgroundColor: '#fff',
      barStyle: 'dark-content',
    };
    return (
      <View style={{ flex: 1 }}>
        <Header
          statusBar={statusBar}
          searchInput={<SearchBar placeholder="请输入..." />}
          rightContent={this.getRightButton()}
          style={{ backgroundColor: '#fff' }}
        />
        <Spin isVisible={this.state.loading} />
        {
          !this.state.loading
            ? <View style={styles.category_container}>
              {this._renderMenu()}
              {this._renderMenuItem()}
            </View>
            : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  //
  category_container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
  },
  //
  menu: {
    maxWidth: 80,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  cell: {
    width: 80,
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  active_cell: {
    position: 'absolute',
    width: 2,
    height: 18,
    right: 0,
    borderRadius: 4,
    backgroundColor: '#e01d20',
  },
  label: {
    fontSize: 13,
    color: '#999',
    textAlign: 'center',
  },
  active_label: {
    color: '#e01d20',
  },
  category_wrapper: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  category_content: {
    width: '100%',
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
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
    width: 54,
    height: 54,
    borderRadius: 4,
  },
  item_label: {
    width: 100,
    marginTop: 2,
    fontSize: 11,
    textAlign: 'center',
    color: '#333',
  },
  indicator: {
    color: 'red',
    margin: 10,
  },
});
