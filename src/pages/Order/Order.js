import React, { Component } from 'react';
import { Header, Block } from '../../components';
import OrderTab from './OrderTab'
import Tabs from '../../common/Tabs'


export default class Order extends Component {
  constructor(props) {
    super()
    this.tabs = new Tabs()
    this.props = props
    this.tabOptions = [
      {
        name: '全部',
        component: () => {
          return <OrderTab {...this.props} />
        }
      },
      {
        name: '待付款',
        component: () => {
          return <OrderTab {...this.props} />
        }
      },
      {
        name: '待收货',
        component: () => {
          return <OrderTab {...this.props}/>
        }
      },
      {
        name: '已完成',
        component: () => {
          return <OrderTab {...this.props}/>
        }
      },
    ]
  }
  render () {
    const statusBar = {
      backgroundColor: 'transparent',
      barStyle: 'dark-content',
      translucent: true
    };
    return (
      <Block block>
        <Header
          title={"订单中心"}
          style={{ backgroundColor: '#fff' }}
          statusBar={statusBar}
          leftContent={ViewUtil.getLeftBackButton(() => _utils.goBack(this.props.navigation), theme.COLORS.black)}
        />
        <Block block>
          {this.tabs.render(this.tabOptions)}
        </Block>
      </Block>
    )
  }
}
