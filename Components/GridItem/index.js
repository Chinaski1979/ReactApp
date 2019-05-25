import React from 'react';
import { StyleSheet, Button, View } from 'react-native';

 const GridItem = ({ title, fullWidth, handlePress }) => (
   <View style={styles.container} >
     <Button style={styles.headerTitle} onPress={handlePress} title={title}/>
   </View>
 );

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#173F5F',
    color: '#fff',
    backgroundColor: '#20639B',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: '33.3%',
    flexGrow: 1,
  },
});

export default GridItem;
