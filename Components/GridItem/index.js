import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import styles from './styles.js';

 const GridItem = ({ title, fullWidth, handlePress }) => (
   <View style={styles.container} >
     <Button style={styles.headerTitle} onPress={handlePress} title={title}/>
   </View>
 );

export default GridItem;
