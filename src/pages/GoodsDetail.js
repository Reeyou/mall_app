
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Header, Block, SearchBar, Swiper, Text, Button, Modal } from '../components'


export default class GoodsDetailScreen extends Component {
  state = {
    position: 'center'
  }
  showModal () {
    // this.props.navigation.navigate('GoodsDetail')
    this.refs.toast.show();
  }
  render () {
    return (
      <Block style={styles.container}>
        <Text style={styles.title}>GoodsDetailcreen</Text>
        <Text style={styles.title}>GoodsDetailcreen</Text>
        <Text style={styles.title}>GoodsDetailcreen</Text>
        <Text style={styles.title}>GoodsDetailcreen</Text>
        <Text style={styles.title}>GoodsDetailcreen</Text>
        <Text style={styles.title}>GoodsDetailcreen</Text>
        <Text style={styles.title}>GoodsDetailcreen</Text>
        <Text style={styles.title}>GoodsDetailcreen</Text>
        <Text style={styles.title}>GoodsDetailcreen</Text>
        <Text style={styles.title}>GoodsDetailcreen</Text>
        <Text style={styles.title}>GoodsDetailcreen</Text>
        <Text style={styles.title}>GoodsDetailcreen</Text>
        <Button onPress={() => this.showModal()}>
          <Text>Modal</Text>
        </Button>
        <Modal ref="toast" position={this.state.position}/>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
