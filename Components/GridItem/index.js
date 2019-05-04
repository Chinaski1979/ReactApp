import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

 const GridItem = ({ title, fullWidth }) => (
   <View style={styles.container}>
     <Text style={styles.headerTitle}>{ title }</Text>
   </View>
 );

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#3498db',
    color: '#fff',
    backgroundColor: '#34495e',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: '33.3%',
    flexGrow: 1,
  },
});

export default GridItem;
