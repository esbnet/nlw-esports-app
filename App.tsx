import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return (
    <TouchableOpacity>
      <Text style={styles.title}>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Hello Word!
      </Text>
      <Button title='Clique aqui'/>
      <Button title='Clique aqui 2'/>
      <Button title='Clique aqui 3'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',

  },
  title: {
    color: '#fff',
    fontSize: 22
  }
});
