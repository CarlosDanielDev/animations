import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { runOnJS, runOnUI } from 'react-native-reanimated';

export const FirstExample: React.FC = () => {
  const sayHello = (cb: () => void) => {
    "worklet";
    console.log('Hello from UI thread! ');
    runOnJS(cb)();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => runOnUI(sayHello)(() => console.log('Back to JS thread'))}>
        <Text style={styles.text}>
          Say Hello
        </Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
    borderRadius: 8
  },
  text: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 20,
    fontWeight: 'bold',
  }
})
