import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { State } from 'react-native-gesture-handler';
import Animated, { eq } from 'react-native-reanimated';

interface KnobProps {
  state: Animated.Node<State>
}
export const KNOB_SIZE = 25;

const styles = StyleSheet.create({
  container: {
    width: KNOB_SIZE,
    height: KNOB_SIZE,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined
  }
});


export const Knob: React.FC<KnobProps> = ({state}) => {
  const opacity = eq(state, State.ACTIVE)
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('./assets/down.png')}
      />
      <Animated.Image 
        style={[styles.image, {opacity}]}
        source={require('./assets/up.png')}
      />
    </View>
  )
}
