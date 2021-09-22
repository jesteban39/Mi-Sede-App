import {
  StyleSheet, StatusBar, Button
} from 'react-native';

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fA6AAA',
    width: 170,
    padding: 6,
    marginVertical: 2,
    marginHorizontal: 3,
  },
  div: {
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  text: {
    backgroundColor: '#f36dff',
    padding: 6,
    width: 120,
    marginVertical: 2,
    marginHorizontal: 3,
    fontSize: 18,
  },
  title: {
    fontSize: 16,
  },
  button: {
    padding: 6,
    width: 90,
  }
});

export default styles