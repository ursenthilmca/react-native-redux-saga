import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View} from 'react-native';

const Indicator = () => {
    return (
        <View style={styles.container}>
         <ActivityIndicator size="large" color="#00ff00" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height:"100%",
        alignItems:'center',
        justifyContent: 'center'
    }
});

export default Indicator;