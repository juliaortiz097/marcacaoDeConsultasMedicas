import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Oiissssss</Text>
      <p style={styles.text}>Como vai?</p>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0944',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',  
  },
});
