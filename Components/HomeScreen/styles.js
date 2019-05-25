import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  gridContainer: {
    backgroundColor: '#173F5F',
    flex: 1,
    alignSelf: 'stretch',
    padding: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: '#34495e',
  },
});

export default styles;
