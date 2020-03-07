import React,{Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native'
import NavigationBar from '../../component/NavigationBar'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import GoodsList from './goodsList'

export default class GoodsList extends Component {
  renderGoodsListBar() {
    return (
      <View style={styles.bar_container}>
        <View style={styles.barLabel}>
          <Text>综合</Text>
          <AntDesign
            name={'caretdown'}
            size={16}
            style={{color: '#333'}}
          />
        </View>
        <View style={styles.barLabel}>
          <Text>销量</Text>
        </View>
        <View style={styles.barLabel}>
          <Text>价格</Text>
          <Entypo
            name={'select-arrows'}
            size={16}
            style={{color: '#333'}}
          />
        </View>
        <View style={styles.barLabel}>
          <Text>筛选</Text>
          <AntDesign
            name={'filter'}
            size={16}
            style={{color: '#333'}}
          />
        </View>
      </View>
    )
  }
  render() {
    let statusBar = {
      backgroundColor: this.state.statusBarbackgroundColor,
      barStyle: 'light-content'
    }
    let navigationBar = <NavigationBar
      barRef={el => this.navBar = el}
      statusBar={statusBar}
      renderLeftContent={this.getLeftButton()}
      renderRightButton={this.getRightButton()}
      searchInput={this.getSearchInput()}
      style={this.state.borderStyle}
    />
    return(
      <ScrollView style={goods_list_container}>
        {navigationBar}
        {this.renderGoodsListBar()}
        <GoodsList />
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({

})