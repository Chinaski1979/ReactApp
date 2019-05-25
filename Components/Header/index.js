import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

 const Header = ({title, handleTitleChange, inputText}) => (
   <View style={styles.container}>
     <Text style={styles.headerTitle}>{ title }</Text>
     <TextInput
      style={styles.textInput}
      onChangeText={(text) => handleTitleChange(text)}
      value={inputText}
     />
   </View>
 );

const styles = StyleSheet.create({
  container: {
    color: '#fff',
    backgroundColor: '#173F5F',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    alignSelf: 'stretch',
  },
  headerTitle: {
    color: '#fff',
  },
  textInput: {
    height: 20,
    borderColor: 'gray',
    borderWidth: 1,
    width: '70%',
  }
});

export default Header;
