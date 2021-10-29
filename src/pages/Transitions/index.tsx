import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useDerivedValue, useSharedValue, withSpring, withTiming } from "react-native-reanimated";

import { Button, StyleGuide, cards } from "../../components";

import {AnimatedCard} from "./AnimatedCard";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleGuide.palette.background,
    justifyContent: "flex-end",
  },
});

const useSpring = (state: any, config: any) => {
  const value = useSharedValue(0);
  useEffect(() => {
    value.value = typeof state === 'number' ? state : (state ? 1 : 0);
  }, [state, value]);

  return useDerivedValue(() => {
    return  withSpring(value.value, config)
  })
}

const useTiming = (state: any, config: any) => {
  const value = useSharedValue(0);
  useEffect(() => {
    value.value = typeof state === 'number' ? state : (state ? 1 : 0);
  }, [state, value]);

  return useDerivedValue(() => {
    return  withTiming(value.value, config)
  })
}

export const Transitions = () => {
  // const [toggled, setToggle] = useState(false);
  const toggled = useSharedValue(false);
  // const transition = useSpring(toggled, { duration: 600 });
  const transition = useDerivedValue(() => {
    return withSpring(toggled.value ? 0 : 1)
  });

  return (
    <View style={styles.container}>
      {cards.slice(0, 3).map((card, index) => (
        <AnimatedCard key={card} {...{ index, card, transition }} />
      ))}
      <Button
        label={toggled ? "Reset" : "Start"}
        primary
        onPress={() => toggled.value = !toggled.value}
      />
    </View>
  );
};
