import * as React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';


export default function HomeScreen (props: any) {
    return (
        <View>
            <Text style={styles.title}>Home</Text>
            <Button
                onPress={() => props.navigation.navigate('Detail')}
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
