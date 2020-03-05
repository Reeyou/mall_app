import {StyleSheet} from 'react-native'
import { Px2dp } from '../../../utils/Px2dp'

export const styles = StyleSheet.create({
  // baseitem
  base_item: {
    textAlign: 'center',
    paddingLeft: 8,
    paddingRight: 8,
  },
  itemPic: {
    width: '100%',
    height: 40,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  b_singleCell: {
    flex: 1
  },
  b_singlePic: {
    width: '100%',
    height: 110,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  b_singleLabel: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    color: 'white',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 14,
    lineHeight: 15,
    fontWeight: 'bold',
    // backgroundColor: 'rgba(0,0,0,.2)'
  },
  b_doubleCell: {
    flex: 1,
    backgroundColor: 'pink',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10
  },
  item_line: {
    width: 20,
    height: 2,
    backgroundColor: 'white'
  },
  item_label: {
    textAlign: 'center',
    color: 'white'
  },
  smallPicWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
    paddingLeft: 10,
    paddingRight: 10
  },
  smallPic: {
    width: Px2dp(120),
    height: Px2dp(120),
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 6
  },
  d_c_smallPic: {
    marginRight: 10
  },
  b_d_smallPic: {
    paddingTop: 10,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  single_cell: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    flex: 1,
    paddingBottom: 10
    // flexDirection: 'row',
    // alignItems: 'center'
  },
  img_wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  doubleCell: {
    flex: 2,
    backgroundColor: 'white',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  b_l_picWrapper: {
    paddingLeft: 4,
    marginTop: 4,
    paddingBottom: 10
  },
  mainTitle: {
    marginTop: 5,
    fontSize: 14,
    paddingLeft: 10,
  },
  subTitle: {
    fontSize: 10,
    color: '#666',
    paddingLeft: 10,
  },
  b_r_smallPic: {
    marginTop: 4
  },
})