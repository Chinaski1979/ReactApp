import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

 const Header = () => (
   <View style={styles.container}>
     <Text style={styles.headerTitle}>App Header</Text>
   </View>
 );

const styles = StyleSheet.create({
  container: {
    color: '#fff',
    backgroundColor: '#34495e',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    alignSelf: 'stretch',
  },
  headerTitle: {
    color: '#fff',
  }
});

export default Header;
