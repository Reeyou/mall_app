
import * as React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';


export default function DetailScreen(props: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DetailScreen</Text>
      <Button
        onPress={() => props.navigation.navigate('GoodsDetail')}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
    />
    </View>
  );
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
