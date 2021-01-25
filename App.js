import React from 'react';
import {View, Text, Animated, PanResponder} from 'react-native';

export default function App() {
  const position = new Animated.ValueXY({x: 0, y: 0});

  const panGesture = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (e, gesture) => {
      position.setValue({x: gesture.dx, y: gesture.dy});
      // console.log(gesture);
    },
    onPanResponderRelease: () => {
      Animated.spring(position, {
        useNativeDriver: true,
        toValue: {x: 0, y: 0},
      }).start();
    },
  });

  const rotate = position.x.interpolate({
    inputRange: [0, 50],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        {...panGesture.panHandlers}
        style={{
          transform: [
            {translateX: position.x},
            {translateY: position.y},
            {rotate: rotate},
          ],
          height: 80,
          width: 80,
          backgroundColor: 'lightgray',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Hello world!</Text>
      </Animated.View>
    </View>
  );
}
