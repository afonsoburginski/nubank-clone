import React from 'react'
import Header from '~/components/Header'
import Content from '~/components/Content'
import { StyleSheet, View } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export default function Main() {
  return (
    <>
      <View style={styles.container}>        
        <Header />
        <Content/>        
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7800c9',  
    justifyContent: 'center',
    paddingTop: 15
  }
});

