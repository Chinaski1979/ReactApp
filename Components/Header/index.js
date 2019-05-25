import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import styles from './styles.js';

 const Header = ({ title, handleTitleChange, inputText }) => (
   <View style={ styles.container }>
     <Text style={ styles.headerTitle }>{ title }</Text>
     <TextInput
      style={ styles.textInput }
      onChangeText={(text) => handleTitleChange(text)}
      value={ inputText }
     />
   </View>
 );

export default Header;
