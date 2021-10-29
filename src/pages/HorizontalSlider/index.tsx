import React from 'react';
import { Dimensions, View, StyleSheet, Animated as ReactNativeAnimated } from 'react-native';
import { 
  PanGestureHandler,
  State
} from 'react-native-gesture-handler';
import Animated, { diffClamp, sub, interpolate } from 'react-native-reanimated';
import { onGestureEvent, withOffset } from 'react-native-redash';
import { Knob, KNOB_SIZE } from '../../components/Knob';

const { Value } = Animated;

const { width } = Dimensions.get('window');

const SLIDER_WIDTH = width - 100;
const SLIDER_HEIGHT = 25;

export const HorizontalSlider: React.FC = () => {
  const state = new Value(State.UNDETERMINED);
  const translationX = new Value(0);
  const gestureHandler = onGestureEvent({state, translationX});
  const x = diffClamp(withOffset(translationX, state), 0, SLIDER_WIDTH);
  const translateX = sub(x, KNOB_SIZE / 2);
  // console.log('X',translateX)
  const scaleX = interpolate(Number(x), [0, SLIDER_WIDTH] , [0, 1])

  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <View>
          <View style={styles.backgroundSlider}/>
          {/* <Animated.View style={[
            styles.backgroundSlider, 
            {
              ...StyleSheet.absoluteFillObject, 
              backgroundColor: '#20B4FE',
              transform: [
                {
                  translateX: -SLIDER_WIDTH / 2
                },
                { scaleX },
                {
                  translateX: SLIDER_WIDTH / 2
                }

              ]
            }
          ]}
        /> */}
        </View>
        <PanGestureHandler {...gestureHandler}>
          <Animated.View style={{
            ...StyleSheet.absoluteFillObject,
            transform: [
              { translateX },
            ]
          }}>
            <Knob {...{state}}/>
          </Animated.View>
        </PanGestureHandler>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  slider: {
    width: SLIDER_WIDTH,
    height: SLIDER_HEIGHT,
    justifyContent: 'center'
  },
  backgroundSlider: {
    height: 10,
    backgroundColor: '#C7C7CC',
    borderRadius: 10
  }
});
