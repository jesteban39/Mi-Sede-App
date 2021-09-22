import {
  StyleSheet, StatusBar
} from 'react-native';

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 6,
    marginVertical: 2,
    marginHorizontal: 3,
  },
  title: {
    fontSize: 16,
  },
});

export default styles